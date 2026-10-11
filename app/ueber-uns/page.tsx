import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/site/page-hero'
import { Reveal, Stagger, StaggerItem } from '@/components/site/reveal'

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'MR Work AG ist eine inhabergeführte Personaldienstleisterin aus Zürich. Lernen Sie den Gründer Fidan Mustafi und unser Verständnis von guter Arbeit kennen.',
}

const values = [
  {
    num: '01',
    title: 'Mensch zuerst',
    text: 'Hinter jedem CV steckt eine Biografie. Wir vermitteln Menschen, keine Datensätze – und wir behandeln beide Seiten mit demselben Respekt.',
  },
  {
    num: '02',
    title: 'Verbindlich',
    text: 'Ein Versprechen ist ein Vertrag. Wir sagen zu, was wir halten können – und halten mehr, als wir zusagen.',
  },
  {
    num: '03',
    title: 'Lokal verankert',
    text: 'Zürich ist unser Zuhause, die Schweiz unser Spielfeld. Wir kennen die Regionen, die Branchen und die Menschen, die sie tragen.',
  },
  {
    num: '04',
    title: 'Diskret',
    text: 'Vertraulichkeit ist selbstverständlich. Wer uns sucht oder gesucht wird, kann sich auf absolute Diskretion verlassen.',
  },
]

export default function UeberUnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Über uns"
        title={
          <>
            Personal ist<br />
            <em>Vertrauens­sache.</em>
          </>
        }
        lead="MR Work AG ist eine inhabergeführte Personaldienstleisterin aus Zürich. Klein genug, um Sie beim Namen zu kennen. Erfahren genug, um Sie nie zu enttäuschen."
        tone="ink"
        meta={
          <>
            
          </>
        }
      />

      <section className="about-mission">
        <Reveal>
          <p className="label">Mission</p>
        </Reveal>
        <Reveal as="p" delay={0.08}>
          Wir glauben an die unspektakuläre Wahrheit, dass <em>gute Arbeit</em> dort entsteht,
          wo die richtigen Menschen zur richtigen Zeit zusammenkommen. Alles, was wir tun,
          dient diesem einen Satz.
        </Reveal>
      </section>

      {/*<section className="founder-section">
        <Reveal>
          <div className="founder-visual">
            <img src="/fidan-mustafi.png" alt="Fidan Mustafi, Gründer und Geschäftsführer MR Work AG" />
            <div className="founder-plate">
              <strong>Fidan Mustafi</strong>
              <span>Gründer · Geschäftsführer</span>
            </div>
          </div>
        </Reveal>
        <div className="founder-copy">
          <Reveal as="p" className="eyebrow">
            <span className="eyebrow-line" /> Der Gründer
          </Reveal>
          <Reveal as="h2" delay={0.08}>
            Ein Gesicht.<br />Eine <em>Verantwortung.</em>
          </Reveal>
          <Reveal as="div" delay={0.18} className="bio">
            <p>
              Fidan Mustafi ist in der Schweiz aufgewachsen, hat sich im Baugewerbe die Hände schmutzig gemacht
              und später Linienteams in Produktion und Montage geführt. Er kennt beide Seiten des Schreibtischs –
              die der Fachkraft, die früh aufsteht, und die des Geschäftsführers, der um 23 Uhr noch Dienstpläne schreibt.
            </p>
            <p>
              Nach Jahren der Erfahrung mit anonymen Personalagenturen hat er 2021 MR Work AG gegründet. Mit einer Prämisse:
              Vermittlung muss persönlich sein. Sonst ist es keine.
            </p>
          </Reveal>
          <Reveal as="div" delay={0.26} className="quote-block">
            <q>
              Ein Mensch findet nicht einfach einen Job. Er findet einen Betrieb, in dem er aufwacht und sagt:
              ich gehe gerne. Genau diesen Moment organisieren wir.
            </q>
          </Reveal>
          <Reveal delay={0.34}>
            <div className="founder-stats">
              <div>
                <strong><em>8+</em></strong>
                <small>Jahre Branchen­erfahrung</small>
              </div>
              <div>
                <strong><em>24/7</em></strong>
                <small>Erreichbar</small>
              </div>
              <div>
                <strong>DE · EN · AL</strong>
                <small>Sprachen</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>*/}

      <section className="values-section">
        <div className="values-head">
          <Reveal as="p" className="eyebrow"><span className="eyebrow-line" /> Werte</Reveal>
          <Reveal as="h2" delay={0.08}>
            Vier Prinzipien,<br /><em>null Ausnahmen.</em>
          </Reveal>
        </div>
        <Stagger as="div" className="values-grid" gap={0.08}>
          {values.map((v) => (
            <StaggerItem as="div" key={v.num} className="value-card">
              <span className="num">{v.num}</span>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/*<section className="timeline-section">
        <div className="timeline-head">
          <Reveal as="p" className="eyebrow"><span className="eyebrow-line" /> Werdegang</Reveal>
          <Reveal as="h2" delay={0.08}>
            Von einer Idee<br />zu einem <em>Netzwerk.</em>
          </Reveal>
        </div>
        <Stagger as="div" className="timeline" gap={0.1}>
          {timeline.map((t) => (
            <StaggerItem key={t.year} className="timeline-item">
              <span className="year">{t.year}</span>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>*/}

      <section className="cta-band">
        <Reveal as="h2">
          Lernen wir uns<br /><em>kennen.</em>
        </Reveal>
        <Reveal delay={0.1} as="div" className="cta-band-side">
          <p>
            Ein kurzes Kennenlerngespräch – telefonisch, per Teams oder bei einem Kaffee an der Baslerstrasse.
            Wir nehmen uns die Zeit, Ihre Situation zu verstehen.
          </p>
          <Link href="/kontakt" className="button button-light">
            Gespräch vereinbaren <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>
    </>
  )
}
