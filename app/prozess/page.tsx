import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Clock3, Sparkles } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Reveal, Stagger, StaggerItem } from '@/components/site/reveal'

export const metadata: Metadata = {
  title: 'Prozess',
  description:
    'Von der ersten Anfrage bis zum ersten Arbeitstag: der MR-Work-Prozess ist transparent, persönlich und schnell. Ab 2 Stunden Reaktionszeit.',
}

const steps = [
  {
    num: '01',
    title: 'Anfrage stellen',
    text: 'Füllen Sie unser Formular aus oder rufen Sie direkt an. Wir brauchen keine lange Spezifikation – zwei Sätze genügen für den Start.',
    meta: ['Formular oder Anruf'],
  },
  {
    num: '02',
    title: 'Beratungsgespräch',
    text: 'Ihr persönlicher Ansprechpartner klärt Rolle, Zeithorizont, Rahmenbedingungen. Keine Verkaufsshow, nur Verständnisfragen.',
    meta: ['Innerhalb 2 h'],
  },
  {
    num: '03',
    title: 'Shortlist erhalten',
    text: 'Sie bekommen drei bis fünf geprüfte Profile – inklusive Lebenslauf, Verfügbarkeit und unserer persönlichen Einschätzung zu jeder Person.',
    meta: ['Shortlist in 2–72 h'],
  },
  {
    num: '04',
    title: 'Kennenlernen',
    text: 'Wir organisieren Interviews, Probetage oder Try-&-Hire-Einsätze. Sie entscheiden in Ihrem Tempo – wir sorgen dafür, dass alle Beteiligten vorbereitet sind.',
    meta: ['Flexibles Format'],
  },
  {
    num: '05',
    title: 'Vertrag & Start',
    text: 'Wir übernehmen Vertragsabwicklung, Lohnbuchhaltung und Sozialversicherungen. Sie fokussieren sich auf das Onboarding und den ersten Arbeitstag.',
    meta: ['Vertrag binnen 24 h'],
  },
  {
    num: '06',
    title: 'Nachbetreuung',
    text: 'Nach einer Woche und nach einem Monat melden wir uns bei Ihnen und bei der Fachkraft. Wir hören zu, moderieren – und greifen ein, falls nötig.',
    meta: ['Zwei Check-ins'],
  },
]

const guarantees = [
  {
    icon: Clock3,
    title: '2-Stunden-Reaktion',
    text: 'Jede Anfrage, die werktags vor 17 Uhr eingeht, erhält am selben Tag eine persönliche Antwort – spätestens innerhalb von zwei Stunden.',
  },
  {
    icon: Sparkles,
    title: 'Eine Ansprechperson',
    text: 'Vom ersten Anruf bis zum zehnten Jahr: Sie sprechen mit derselben Person, die Ihre Situation, Ihr Team und Ihre Kultur kennt.',
  },
]

const faq = [
  {
    q: 'Wie schnell erhalte ich die ersten Kandidaten?',
    a: 'Für Temporärarbeit meist innerhalb von 2 bis 24 Stunden. Für Festanstellungen präsentieren wir eine Shortlist in der Regel binnen 72 Stunden. Falls es länger dauert, sagen wir Ihnen das offen – und warum.',
  },
  {
    q: 'Wie prüfen Sie die Kandidaten?',
    a: 'Jede Fachkraft durchläuft ein persönliches Gespräch, einen Fachcheck (Branchenerfahrung, Zertifikate, Lizenzen). Wir empfehlen nur, wen wir selber einstellen würden.',
  },
  {
    q: 'Was kostet eine Vermittlung?',
    a: 'Temporärarbeit rechnen wir mit einem transparenten Stundenaufschlag ab (GAV-konform). Für Festanstellungen fällt ein Erfolgshonorar an – immer prozentual zum Jahresgehalt, nie versteckt. Angebot innerhalb 24 Stunden.',
  },
  {
    q: 'Welche Branchen bedienen Sie?',
    a: 'Primär Handwerk, Bau, Industrie und Logistik in der ganzen Schweiz. Für angrenzende Bereiche fragen Sie uns direkt – oft kennen wir die richtigen Menschen über unser Netzwerk.',
  },
  {
    q: 'Was ist Try & Hire genau?',
    a: 'Sie starten mit der Fachkraft im Temporärverhältnis (3–6 Monate). Bewährt sich die Zusammenarbeit, übernehmen Sie zu einer pauschalen Übernahmegebühr. Das Risiko einer Fehlentscheidung sinkt dramatisch.',
  },
  {
    q: 'Übernehmen Sie auch die ganze Payroll?',
    a: 'Ja. Unser HR-Abwicklungs-Service deckt Lohnabrechnung, Sozialversicherungen (AHV, UVG, KTG, BVG), Jahresabschlüsse und Behördenkommunikation vollständig ab – auch unabhängig von einer Vermittlung.',
  },
]

export default function ProzessPage() {
  return (
    <>
      <PageHero
        eyebrow="Prozess"
        title={
          <>
            Vom Hörer<br />
            <em>zur Fachkraft.</em> <span className="mute">In sechs Schritten.</span>
          </>
        }
        lead="Wir behandeln Prozesse nicht als Marketing-Dekoration. Jeder Schritt hat einen klaren Zweck, einen definierten Zeitrahmen und einen verantwortlichen Menschen. Keine Blackbox."
        tone="paper"
        meta={
          <>
            <div>
              <strong><em>6</em></strong>
              <small>Prozess-Schritte</small>
            </div>
            <div>
              <strong><em>2 h</em></strong>
              <small>Reaktionszeit</small>
            </div>
            
          </>
        }
      />

      <section className="process-detail">
        <Reveal as="p" className="eyebrow"><span className="eyebrow-line" /> Schritt für Schritt</Reveal>
        <Reveal as="h2" delay={0.08} className="section-title">
          Der <em>MR-Work-Weg.</em>
        </Reveal>
        <div className="process-detail-list">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.04}>
              <div className="process-step">
                <span className="num">{s.num}</span>
                <h3>{s.title}</h3>
                <div className="process-step-body">
                  <p>{s.text}</p>
                  <div className="meta">
                    {s.meta.map((m) => <span key={m}>{m}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="guarantees-section">
        <Reveal as="p" className="eyebrow"><span className="eyebrow-line" /> Garantien</Reveal>
        <Reveal as="h2" delay={0.08} className="section-title" style={{ color: 'white' } as React.CSSProperties}>
          Drei Versprechen,<br /><em>die wir halten.</em>
        </Reveal>
        <Stagger as="div" className="guarantees-grid" gap={0.1}>
          {guarantees.map((g) => (
            <StaggerItem as="div" key={g.title} className="guarantee-card">
              <g.icon />
              <h3>{g.title}</h3>
              <p>{g.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="faq-section">
        <div>
          <Reveal as="p" className="eyebrow"><span className="eyebrow-line" /> FAQ</Reveal>
          <Reveal as="h2" delay={0.08} className="section-title">
            Antworten,<br /><em>bevor Sie fragen.</em>
          </Reveal>
          <Reveal delay={0.2} style={{ marginTop: 36 } as React.CSSProperties}>
            <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.6, maxWidth: 320 }}>
              Mehr Fragen? Rufen Sie an unter +41 44 500 32 17 – wir mögen Fragen.
            </p>
          </Reveal>
        </div>
        <div className="faq-list">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <details className="faq-item">
                <summary>{item.q}</summary>
                <div className="faq-body">{item.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <Reveal as="h2">
          Starten wir<br /><em>heute?</em>
        </Reveal>
        <Reveal delay={0.1} as="div" className="cta-band-side">
          <p>
            Zwei Sätze reichen für den Start. Beschreiben Sie uns, wen Sie suchen – wir melden uns innerhalb von zwei Stunden.
          </p>
          <Link href="/kontakt" className="button button-light">
            Anfrage senden <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
