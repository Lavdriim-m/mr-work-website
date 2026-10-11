import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Check } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Reveal, Stagger, StaggerItem } from '@/components/site/reveal'

export const metadata: Metadata = {
  title: 'Leistungen',
  description:
    'Temporärarbeit, Personalvermittlung, Try & Hire und HR-Abwicklung aus einer Hand. Für Handwerk, Bau, Industrie und Logistik in der ganzen Schweiz.',
}

type Meta = { label: string; value: string; accent?: string }

const services: {
  slug: string; num: string; title: string; lead: string;
  bullets: string[]; meta: Meta[]; ctaLabel: string;
}[] = [
  {
    slug: 'temporaer',
    num: '01',
    title: 'Temporärarbeit',
    lead: 'Flexibilität ist kein Nice-to-have. Bei Auftragsspitzen, Ausfällen oder Projektlast brauchen Sie zuverlässiges Personal – und zwar schnell.',
    bullets: [
      'Schnelle Besetzung ab zwei Stunden Reaktionszeit',
      'Verträge, Lohn und Sozialversicherungen durch uns abgewickelt',
      'GAV-konforme Entlöhnung – keine Grauzonen',
      'Transparente Stundenerfassung und monatliche Reports',
      'Jederzeit skalierbar: eine Woche, drei Monate oder länger',
    ],
    meta: [
      { label: 'Minimale Dauer', value: '1 Tag', accent: '1' },
      { label: 'Branchenfokus', value: '4 Felder', accent: '4' },
    ],
    ctaLabel: 'Temporärkraft anfragen',
  },
  {
    slug: 'vermittlung',
    num: '02',
    title: 'Personalvermittlung',
    lead: 'Für die Rolle, die bleibt. Wir suchen Mitarbeitende, die fachlich überzeugen und menschlich passen – weil beides zählt.',
    bullets: [
      'Zielgenaues Sourcing über eigenes Netzwerk und aktive Suche',
      'Strukturierte Interviews und Referenz-Checks vor Übergabe',
      'Direktvertrag zwischen Ihnen und der Fachkraft',
      'Transparente Erfolgshonorare – keine versteckten Kosten',
    ],
    meta: [
      
    ],
    ctaLabel: 'Festanstellung besetzen',
  },
  {
    slug: 'try-and-hire',
    num: '03',
    title: 'Try & Hire',
    lead: 'Entscheiden Sie erst, wenn Sie wirklich überzeugt sind. Testen Sie Ihre zukünftige Fachkraft im echten Arbeitsalltag.',
    bullets: [
      'Starten Sie im Temporärverhältnis – übernehmen Sie, wenn es passt',
      'Keine Entscheidung unter Druck: 3 bis 6 Monate Erprobungsphase',
      'Volle Flexibilität ohne Kündigungsrisiko',
      'Pauschale Übernahmegebühr statt klassischem Vermittlungshonorar',
      'Ideal für kritische Schlüsselpositionen',
    ],
    meta: [
      { label: 'Übernahmequote', value: '82 %', accent: '82' },
      { label: 'Testphase', value: '3–6 Mt.', accent: '3–6' },
    ],
    ctaLabel: 'Try & Hire starten',
  },
  {
    slug: 'hr',
    num: '04',
    title: 'HR-Abwicklung',
    lead: 'Wir übernehmen den administrativen Aufwand rund ums Personal. Sie konzentrieren sich auf Ihr Kerngeschäft.',
    bullets: [
      'Lohnabrechnung inkl. Jahresabschluss und Lohnausweisen',
      'Sozialversicherungen (AHV, UVG, KTG, BVG) vollständig verwaltet',
      'Arbeitsverträge, Zeugnisse, Kündigungen – rechtssicher',
      'Ansprechpartner für Behörden und Krankentaggeldversicherungen',
      'Reporting und Payroll-Analytics auf Knopfdruck',
    ],
    meta: [
      
    ],
    ctaLabel: 'HR auslagern',
  },
]

function AccentedValue({ value, accent }: { value: string; accent?: string }) {
  if (!accent) return <>{value}</>
  const idx = value.indexOf(accent)
  if (idx === -1) return <>{value}</>
  return (
    <>
      {value.slice(0, idx)}
      <em>{accent}</em>
      {value.slice(idx + accent.length)}
    </>
  )
}

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title={
          <>
            Alles für Ihr<br />
            <em>Personal.</em> <span className="mute">Aus einer Hand.</span>
          </>
        }
        lead="Vier klar definierte Angebote. Null Baukasten-Logik. Wir sind spezialisiert auf Handwerk, Bau, Industrie und Logistik – und wir machen genau das, was Sie wirklich brauchen."
        meta={
          <>
            <div>
              <strong>4</strong>
              <small>Kern-Leistungen</small>
            </div>
            <div>
              <strong><em>2 h</em></strong>
              <small>Reaktionszeit</small>
            </div>
            <div>
              <strong>CH</strong>
              <small>Nationale Reichweite</small>
            </div>
          </>
        }
      />

      {services.map((svc) => (
        <section id={svc.slug} className="service-detail" key={svc.slug}>
          <aside className="service-detail-aside">
            <Reveal>
              <span className="num">{svc.num}</span>
              <p style={{ textTransform: 'uppercase', letterSpacing: '0.19em', fontSize: 10.5, fontWeight: 600, color: 'var(--teal)', margin: 0 }}>
                Leistung · {svc.num}
              </p>
            </Reveal>
          </aside>
          <div>
            <Reveal as="h2">{svc.title}</Reveal>
            <Reveal as="p" delay={0.08} className="lead">
              {svc.lead}
            </Reveal>
            <Stagger as="ul" className="bullets" gap={0.06}>
              {svc.bullets.map((b) => (
                <StaggerItem as="li" key={b}>
                  <Check size={18} />
                  <span>{b}</span>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.15}>
              <div className="meta-row">
                {svc.meta.map((m) => (
                  <div key={m.label}>
                    <strong>
                      <AccentedValue value={m.value} accent={m.accent} />
                    </strong>
                    <small>{m.label}</small>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2} style={{ marginTop: 48 } as React.CSSProperties}>
              <Link href={`/kontakt?topic=${svc.slug}`} className="button button-dark">
                {svc.ctaLabel} <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="cta-band">
        <Reveal as="h2">
          Nicht sicher,<br />was <em>passt?</em>
        </Reveal>
        <Reveal delay={0.1} as="div" className="cta-band-side">
          <p>
            Beschreiben Sie uns Ihre Situation in zwei Sätzen – wir empfehlen die richtige Leistung,
            ohne Verkaufsgespräch. Kostenlos und unverbindlich.
          </p>
          <Link href="/kontakt" className="button button-light">
            Gespräch vereinbaren <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
