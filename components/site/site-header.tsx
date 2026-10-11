'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const nav = [
  { href: '/leistungen', label: 'Leistungen' },
  { href: '/branchen', label: 'Branchen' },
  { href: '/prozess', label: 'Prozess' },
  { href: '/ueber-uns', label: 'Über uns' },
]

const DARK_HERO_PATHS = new Set<string>(['/', '/ueber-uns', '/kontakt'])

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [overDark, setOverDark] = useState(() => DARK_HERO_PATHS.has(pathname))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    setOverDark(DARK_HERO_PATHS.has(pathname))
    const dark = document.querySelector<HTMLElement>('.hero, [data-hero-tone="ink"], .contact-page')
    if (!dark) {
      setOverDark(false)
      return
    }
    setOverDark(true)
    const observer = new IntersectionObserver(
      ([entry]) => setOverDark(entry.isIntersecting),
      { rootMargin: '-72px 0px 0px 0px', threshold: 0 },
    )
    observer.observe(dark)
    return () => observer.disconnect()
  }, [pathname])

  const theme = open ? 'dark' : overDark ? 'dark' : 'light'

  return (
    <header
      className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}
      data-theme={theme}
    >
      <Link href="/" className="brand" aria-label="MR Work AG Startseite">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MrWork%20Logo%20Transparent%20%28High%20Res%29-OHPPWG77XCNct2QqHGvHKub2pEJLNI.png" alt="MR WORK AG" />
      </Link>
      <nav className="nav" aria-label="Hauptnavigation">
        <ul>
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <li key={item.href}>
                <Link href={item.href} className={active ? 'is-active' : ''}>
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        <Link href="/kontakt" className="nav-cta">
          Jetzt anfragen <ArrowUpRight size={14} />
        </Link>
      </nav>
      <button
        className="menu-button"
        aria-expanded={open}
        aria-label={open ? 'Menü schliessen' : 'Menü öffnen'}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      <div className={`mobile-sheet ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile Navigation">
          <ol>
            {nav.map((item, i) => (
              <li key={item.href} style={{ transitionDelay: `${80 + i * 60}ms` }}>
                <Link href={item.href}>
                  <span className="num">0{i + 1}</span>
                  <span className="label">{item.label}</span>
                  <ArrowUpRight size={18} />
                </Link>
              </li>
            ))}
          </ol>
          <Link href="/kontakt" className="mobile-cta">
            Jetzt anfragen <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </header>
  )
}
