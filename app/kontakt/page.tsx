'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Check, FileText, Mail, MapPin, Paperclip, Phone, X } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'

const MAX_FILES = 5
const MAX_FILE_SIZE = 7 * 1024 * 1024
const MAX_TOTAL_SIZE = 25 * 1024 * 1024

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function KontaktPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [files, setFiles] = useState<File[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [uploadNote, setUploadNote] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const dragCounter = useRef(0)

  const totalBytes = files.reduce((sum, f) => sum + f.size, 0)
  const overTotalLimit = totalBytes > MAX_TOTAL_SIZE

  useEffect(() => {
    if (!inputRef.current) return
    const dt = new DataTransfer()
    files.forEach((f) => dt.items.add(f))
    inputRef.current.files = dt.files
  }, [files])

  useEffect(() => {
    const prevent = (e: DragEvent) => {
      e.preventDefault()
    }
    window.addEventListener('dragover', prevent)
    window.addEventListener('drop', prevent)
    return () => {
      window.removeEventListener('dragover', prevent)
      window.removeEventListener('drop', prevent)
    }
  }, [])

  function addFiles(incoming: FileList | File[]) {
    const incomingArr = Array.from(incoming)
    const notes: string[] = []
    const combined: File[] = []
    let runningSize = 0
    let rejectedForTotal = 0

    for (const f of [...files, ...incomingArr]) {
      if (combined.some((x) => x.name === f.name && x.size === f.size)) continue
      if (f.size > MAX_FILE_SIZE) continue
      if (runningSize + f.size > MAX_TOTAL_SIZE) {
        rejectedForTotal++
        continue
      }
      combined.push(f)
      runningSize += f.size
    }
    const trimmed = combined.slice(0, MAX_FILES)
    const rejectedForLimit = combined.length - trimmed.length
    setFiles(trimmed)

    if (incomingArr.some((f) => f.size > MAX_FILE_SIZE)) {
      notes.push(`Einzeldateien max. ${MAX_FILE_SIZE / 1024 / 1024} MB.`)
    }
    if (rejectedForLimit > 0) {
      notes.push(`Max. ${MAX_FILES} Dateien, ${rejectedForLimit} ignoriert.`)
    }
    if (rejectedForTotal > 0) {
      notes.push(`Gesamtlimit ${MAX_TOTAL_SIZE / 1024 / 1024} MB erreicht, ${rejectedForTotal} ignoriert.`)
    }
    setUploadNote(notes.length ? notes.join(' ') : null)
    if (notes.length) setTimeout(() => setUploadNote(null), 7000)
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    dragCounter.current = 0
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(e.dataTransfer.files)
    }
  }

  function handleDragEnter(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    dragCounter.current += 1
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragActive(true)
    }
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
    dragCounter.current -= 1
    if (dragCounter.current <= 0) {
      dragCounter.current = 0
      setDragActive(false)
    }
  }

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    e.stopPropagation()
  }

  function handleBrowse() {
    inputRef.current?.click()
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      addFiles(e.target.files)
    }
  }

  async function submitForm(form: HTMLFormElement) {
    if (overTotalLimit) {
      setStatus('error')
      setErrorMessage(`Die Anhänge sind zusammen zu gross (${formatBytes(totalBytes)}). Maximum sind ${MAX_TOTAL_SIZE / 1024 / 1024} MB.`)
      return
    }
    setStatus('loading')
    setErrorMessage(null)
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: new FormData(form) })
      if (res.ok) {
        setStatus('success')
        return
      }
      let serverMessage: string | undefined
      try {
        const data = await res.json()
        if (data && typeof data.error === 'string') serverMessage = data.error
      } catch {}
      setErrorMessage(serverMessage ?? null)
      setStatus('error')
    } catch {
      setErrorMessage(null)
      setStatus('error')
    }
  }

  return (
    <section className="contact-page">
      <div className="contact-heading">
        <Reveal as="p" className="eyebrow"><span className="eyebrow-line" /> Kontakt</Reveal>
        <Reveal as="h1" delay={0.08}>
          Bereit,<br /><em>loszulegen?</em>
        </Reveal>
        <Reveal as="p" delay={0.2}>
          Füllen Sie das Formular aus – wir melden uns innerhalb von zwei Stunden bei Ihnen.
          Kostenlos, unverbindlich und auf Augenhöhe.
        </Reveal>
        <Reveal delay={0.3}>
          <div className="contact-details">
            <a href="https://maps.google.com/?q=Baslerstrasse+30,+8048+Zürich">
              <MapPin /> Baslerstrasse 30, 8048 Zürich
            </a>
            <a href="tel:+41445003217">
              <Phone /> +41 44 500 32 17
            </a>
            <a href="mailto:info@mr-work.ch">
              <Mail /> info@mr-work.ch
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid rgba(255,255,255,0.14)' }}>
            <p style={{ textTransform: 'uppercase', letterSpacing: '0.19em', fontSize: 10, color: 'var(--teal)', fontWeight: 600, margin: '0 0 12px' }}>
              Öffnungszeiten
            </p>
            <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>
              Montag – Freitag · 07:00 – 17:30 Uhr<br />
              Samstag · nach Vereinbarung<br />
              <span style={{ color: 'var(--teal)' }}>+41 44 500 32 17</span>
            </p>
          </div>
        </Reveal>
      </div>

      {status === 'success' ? (
        <Reveal>
          <div className="form-success">
            <Check size={36} />
            <h3>Anfrage gesendet.</h3>
            <p>Vielen Dank. Wir melden uns innerhalb von zwei Stunden – meistens früher.</p>
          </div>
        </Reveal>
      ) : (
        <Reveal>
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault()
              void submitForm(e.currentTarget)
            }}
          >
            <div className="form-row">
              <label>
                Ihr Vor- und Nachname *
                <input required name="name" autoComplete="name" />
              </label>
              <label>
                Firma
                <input name="company" autoComplete="organization" />
              </label>
            </div>
            <div className="form-row">
              <label>
                E-Mail *
                <input required type="email" name="email" autoComplete="email" />
              </label>
              <label>
                Telefon
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
            </div>
            <label>
              Ich suche... *
              <select required name="need" defaultValue="">
                <option value="" disabled>Bitte auswählen</option>
                <option>Temporäres Personal</option>
                <option>Festanstellung</option>
                <option>Try &amp; Hire</option>
                <option>HR-Abwicklung</option>
                <option>Gespräch mit Fidan</option>
              </select>
            </label>
            <label>
              Ihre Anfrage
              <textarea name="message" rows={4} placeholder="Branche, Anzahl Personen, Startdatum ..." />
            </label>

            <div className="upload-field">
              <span className="upload-field-label">Lebenslauf &amp; Unterlagen</span>
              <div
                className={`dropzone ${dragActive ? 'is-active' : ''} ${files.length >= MAX_FILES ? 'is-full' : ''}`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={handleBrowse}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleBrowse()
                  }
                }}
                aria-label="Dateien hochladen – Klicken oder hierher ziehen"
              >
                <input
                  ref={inputRef}
                  type="file"
                  name="files"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleInputChange}
                  style={{ display: 'none' }}
                />
                <Paperclip size={18} />
                <div className="dropzone-text">
                  <strong>
                    {dragActive
                      ? 'Jetzt loslassen'
                      : files.length >= MAX_FILES
                        ? 'Maximum erreicht'
                        : 'Dateien hierher ziehen'}
                  </strong>
                  <span>
                    oder klicken zum Auswählen · PDF, DOCX, Bilder · max. {MAX_FILES} Dateien · {MAX_FILE_SIZE / 1024 / 1024} MB pro Datei · {MAX_TOTAL_SIZE / 1024 / 1024} MB insgesamt
                  </span>
                </div>
                <span className={`dropzone-counter ${overTotalLimit ? 'is-over' : ''}`}>
                  {files.length}/{MAX_FILES} · {formatBytes(totalBytes)}
                </span>
              </div>

              {uploadNote && <p className="upload-note">{uploadNote}</p>}

              {files.length > 0 && (
                <ul className="file-list">
                  {files.map((f, i) => (
                    <li key={`${f.name}-${f.size}-${i}`}>
                      <FileText size={16} />
                      <span className="file-name">{f.name}</span>
                      <span className="file-size">{formatBytes(f.size)}</span>
                      <button
                        type="button"
                        className="file-remove"
                        onClick={(e) => {
                          e.stopPropagation()
                          removeFile(i)
                        }}
                        aria-label={`${f.name} entfernen`}
                      >
                        <X size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {status === 'error' && (
              <p className="form-error">
                {errorMessage ?? 'Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an info@mr-work.ch.'}
              </p>
            )}
            <button className="button button-light" type="submit" disabled={status === 'loading' || overTotalLimit}>
              {status === 'loading' ? 'Wird gesendet…' : (
                <>
                  Anfrage senden <ArrowUpRight size={16} />
                </>
              )}
            </button>
          </form>
        </Reveal>
      )}
    </section>
  )
}
