import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Reveal } from '@/components/site/reveal'

export const metadata: Metadata = {
  title: 'Branchen',
  description:
    'Spezialisiert auf Handwerk, Bau, Industrie und Logistik. MR Work AG kennt die Realität auf der Baustelle, in der Werkstatt und im Lager.',
}

type Stat = { label: string; value: string; accent?: string }

const industries: {
  slug: string; num: string; title: string; description: string;
  roles: string[]; stats: Stat[]; image: string;
}[] = [
  {
    slug: 'handwerk',
    num: '01 · Branche',
    title: 'Handwerk',
    description:
      'Qualität zeigt sich im Detail. Wir vermitteln Handwerker, die ihr Werkzeug blind kennen und sauber arbeiten – weil in Ihrem Betrieb jede Naht sichtbar ist.',
    roles: ['Schreiner', 'Elektriker', 'Sanitärinstallateur', 'Heizungsinstallateur', 'Maler', 'Gipser', 'Plattenleger', 'Dachdecker', 'Zimmerleute'],
    stats: [
      
    ],
    image: 'https://images.unsplash.com/photo-1497219055242-93359eeed651?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'bau',
    num: '02 · Branche',
    title: 'Bau',
    description:
      'Hochbau, Tiefbau, Rohbau. Baustellenpersonal muss am ersten Tag mitlaufen. Wir prüfen Erfahrung, Sicherheitskultur und Zuverlässigkeit, bevor jemand bei Ihnen auftaucht.',
    roles: ['Maurer', 'Bauführer', 'Vorarbeiter', 'Polier', 'Baumaschinist', 'Strassenbauer', 'Eisenleger', 'Betonbauer'],
    stats: [
      
    ],
    image: 'https://images.unsplash.com/photo-1653280662710-1cac52cde6d7?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'industrie',
    num: '03 · Branche',
    title: 'Industrie',
    description:
      'Präzision ist keine Floskel. Für Produktionsbetriebe suchen wir Fachkräfte, die mit modernen Maschinen arbeiten, Normen verstehen und Verantwortung tragen.',
    roles: ['Automatiker', 'Automatikmonteur', 'Betriebselektriker', 'Betriebsmechaniker', 'Maschinenmonteure', 'Polymechaniker', 'CNC-Fachkraft', 'Konstrukteur', 'Schweisser (MAG/WIG)', 'Produktionsmitarbeiter', 'Qualitätsprüfer'],
    stats: [
      
    ],
    image: 'https://images.unsplash.com/photo-1598302936625-6075fbd98dd7?auto=format&fit=crop&w=1400&q=80',
  },
  {
    slug: 'logistik',
    num: '04 · Branche',
    title: 'Logistik',
    description:
      'Reibungslose Abläufe hängen an den Menschen, die liefern. Von Lagerist bis Chauffeur – wir vermitteln Kräfte, die Prozesse beschleunigen statt verlangsamen.',
    roles: ['Lagerist', 'Staplerfahrer', 'Chauffeur CE', 'Chauffeur C', 'Disponent', 'Spediteur', 'Kommissionierer'],
    stats: [
      
    ],
    image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?auto=format&fit=crop&w=1400&q=80',
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

export default function BranchenPage() {
  return (
    <>
      <PageHero
        eyebrow="Branchen"
        title={
          <>
            Wir kennen die<br />
            <em>Baustelle.</em> <span className="mute">Nicht nur den Lebenslauf.</span>
          </>
        }
        lead="Vier Branchen, in denen wir seit Jahren unterwegs sind. Wir sprechen die Sprache Ihrer Mitarbeitenden – und wir wissen, worauf es ankommt, wenn das Werkzeug fliegt."
        tone="paper"
        meta={
          <>
            <div>
              <strong>4</strong>
              <small>Spezial-Branchen</small>
            </div>
            <div>
              <strong>CH</strong>
              <small>Nationale Reichweite</small>
            </div>
            
          </>
        }
      />

      {industries.map((ind) => (
        <section id={ind.slug} className="industry-detail" key={ind.slug}>
          <div className="industry-detail-copy">
            <Reveal as="p" className="num">{ind.num}</Reveal>
            <Reveal as="h2" delay={0.08}>{ind.title}</Reveal>
            <Reveal as="p" delay={0.16}>{ind.description}</Reveal>
            <Reveal delay={0.24}>
              <p style={{ textTransform: 'uppercase', letterSpacing: '0.19em', fontSize: 10, fontWeight: 600, color: 'var(--teal)', margin: '0 0 14px' }}>
                Typische Rollen
              </p>
              <div className="industry-detail-roles">
                {ind.roles.map((r) => <span key={r}>{r}</span>)}
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="industry-detail-stats">
                {ind.stats.map((s) => (
                  <div key={s.label}>
                    <strong>
                      <AccentedValue value={s.value} accent={s.accent} />
                    </strong>
                    <small>{s.label}</small>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.4} style={{ marginTop: 44 } as React.CSSProperties}>
              <Link href={`/kontakt?industry=${ind.slug}`} className="text-link" style={{ color: 'var(--teal)' }}>
                {ind.title}-Fachkraft anfragen <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="industry-detail-visual">
            <div className="industry-detail-visual-img" style={{ backgroundImage: `url(${ind.image})` }} />
          </div>
        </section>
      ))}

      <section className="cta-band">
        <Reveal as="h2">
          Ihre Branche<br /><em>fehlt?</em>
        </Reveal>
        <Reveal delay={0.1} as="div" className="cta-band-side">
          <p>
            Wir fokussieren uns auf das, was wir wirklich gut können. Aber: Erzählen Sie uns von Ihrem Bedarf.
            Oft kennen wir die passenden Menschen über unser Netzwerk hinaus.
          </p>
          <Link href="/kontakt" className="button button-light">
            Bedarf besprechen <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
