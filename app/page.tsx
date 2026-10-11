'use client'

import Link from 'next/link'
import { ArrowDownRight, ArrowUpRight, Clock3, ShieldCheck, Sparkles, Users } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from '@/components/site/reveal'
import { Marquee } from '@/components/site/marquee'
import { Magnetic } from '@/components/site/magnetic'
import { ScrollProgress } from '@/components/site/scroll-progress'

const services = [
  { number: '01', slug: 'temporaer', title: 'Temporärarbeit', text: 'Flexible Einsätze für kurzfristige Auftragsspitzen. Wir stellen schnell das richtige Personal bereit – ohne langwierige Prozesse.' },
  { number: '02', slug: 'vermittlung', title: 'Personalvermittlung', text: 'Wir finden Mitarbeitende, die fachlich überzeugen, Verantwortung übernehmen und langfristig zu Ihrem Unternehmen passen.' },
  { number: '03', slug: 'try-and-hire', title: 'Try & Hire', text: 'Lernen Sie Ihre zukünftigen Mitarbeitenden im echten Arbeitsalltag kennen und entscheiden Sie erst dann, wenn Sie wirklich überzeugt sind.' },
  { number: '04', slug: 'hr', title: 'HR-Abwicklung', text: 'Lohnabrechnung, Sozialversicherungen, Verträge – wir kümmern uns um den administrativen Aufwand. Sie um Ihr Kerngeschäft.' },
]

const industries = [
  { title: 'Handwerk', slug: 'handwerk', text: 'Schreiner, Elektriker, Sanitär – Menschen, die ihr Handwerk verstehen.', image: 'https://images.unsplash.com/photo-1497219055242-93359eeed651?auto=format&fit=crop&w=900&q=80', tag: '01' },
  { title: 'Bau', slug: 'bau', text: 'Hochbau oder Tiefbau. Zuverlässige Fachkräfte, sofort einsatzbereit.', image: 'https://images.unsplash.com/photo-1653280662710-1cac52cde6d7?auto=format&fit=crop&w=900&q=80', tag: '02' },
  { title: 'Industrie', slug: 'industrie', text: 'Automatiker, Polymechaniker, Schweisser – präzise und einsatzbereit.', image: 'https://images.unsplash.com/photo-1598302936625-6075fbd98dd7?auto=format&fit=crop&w=900&q=80', tag: '03' },
  { title: 'Logistik', slug: 'logistik', text: 'Lageristen, Chauffeure, Staplerfahrer – für reibungslose Abläufe.', image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?auto=format&fit=crop&w=900&q=80', tag: '04' },
]

const steps = [
  ['01', 'Anfrage stellen', 'Kurzes Formular oder ein Anruf. Kostenlos und unverbindlich.'],
  ['02', 'Beratungsgespräch', 'Wir verstehen Ihre Anforderungen und definieren das ideale Profil.'],
  ['03', 'Kandidaten erhalten', 'Innerhalb von 2 Stunden geprüfte Profile auf Ihrem Tisch.'],
  ['04', 'Einsatz starten', 'Sie wählen, wir übernehmen Vertrag, Administration, Nachbetreuung.'],
]

const tickerItems = ['Temporärarbeit', 'Personalvermittlung', 'Try & Hire', 'HR-Abwicklung', 'Handwerk', 'Bau', 'Industrie', 'Logistik']

export default function HomePage() {
  return (
    <>
      <ScrollProgress />

      <section id="top" className="hero">
        <div className="hero-copy">
          <Reveal as="p" className="eyebrow">
            <span className="eyebrow-line" /> Personal für die Schweiz
          </Reveal>
          <Reveal as="h1" delay={0.08}>
            Die richtigen<br />
            <em>Menschen.</em><br />
            <span className="mute">Zur richtigen Zeit.</span>
          </Reveal>
          <Reveal as="p" delay={0.2} className="hero-lead">
            Temporärarbeit, Personalvermittlung &amp; HR-Abwicklung. Persönlich geführt aus Zürich.
            Innerhalb von zwei Stunden auf Ihrem Tisch – nicht in zwei Wochen.
          </Reveal>
          <Reveal as="div" delay={0.3} className="hero-actions">
            <Magnetic>
              <Link className="button button-dark" href="/kontakt">
                Jetzt anfragen <ArrowUpRight size={16} />
              </Link>
            </Magnetic>
            <Link className="text-link" href="/leistungen">
              Unsere Leistungen <ArrowDownRight size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="hero-visual">
          <div className="hero-image" />
          <div className="hero-caption">
            
          </div>
          <div className="hero-plate">
            <strong><em>2 h</em> Reaktion</strong>
            <span>Garantierte Antwortzeit</span>
          </div>
          <div className="hero-ticker">
            <Marquee speed={32}>
              {tickerItems.map((item) => <span key={item}>{item}</span>)}
            </Marquee>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="MR Work Vorteile">
        <div>
          <strong>2<span>h</span></strong>
          <small>Reaktionszeit</small>
        </div>
        <div>
          <strong>100<span>%</span></strong>
          <small>Persönliche Betreuung</small>
        </div>
        <div>
          <strong>360<span>°</span></strong>
          <small>HR-Kompetenz</small>
        </div>
        <div>
          <strong>CH<span>·</span></strong>
          <small>Lokal verankert</small>
        </div>
        <p>Wir bringen Menschen und<br />Unternehmen zusammen.</p>
      </section>

      <section id="leistungen" className="section services-section">
        <div className="section-intro">
          <Reveal as="p" className="eyebrow"><span className="eyebrow-line" /> Was wir bieten</Reveal>
          <Reveal as="h2" delay={0.08} className="section-title">
            Personal,<br /><em>das passt.</em>
          </Reveal>
          <Reveal as="div" delay={0.2} style={{ marginTop: 32 } as React.CSSProperties}>
            <Link className="text-link" href="/leistungen">
              Alle Leistungen <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
        <Stagger as="div" className="services-grid" gap={0.1}>
          {services.map((service) => (
            <StaggerItem as="article" key={service.number} className="service-card">
              <span className="card-number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href={`/leistungen#${service.slug}`} aria-label={`Mehr über ${service.title}`}>
                  Mehr erfahren <ArrowUpRight />
                </Link>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section id="branchen" className="industries-section">
        <div className="section-topline">
          <div>
            <Reveal as="p" className="eyebrow"><span className="eyebrow-line" /> Wo wir stark sind</Reveal>
            <Reveal as="h2" delay={0.08} className="section-title" style={{ color: 'white', marginTop: 16 } as React.CSSProperties}>
              Verstehen,<br />was <em>Sie bewegt.</em>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link className="text-link" href="/branchen">
              Branchen entdecken <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
        <Stagger as="div" className="industry-grid" gap={0.08} delay={0.1}>
          {industries.map((industry) => (
            <StaggerItem as="article" key={industry.title} className="industry-card">
              <Link href={`/branchen#${industry.slug}`} className="industry-image">
                <div className="industry-image-img" style={{ backgroundImage: `url(${industry.image})` }} />
                <span className="tag">{industry.tag}</span>
                <span className="corner"><ArrowUpRight size={14} /></span>
              </Link>
              <h3>{industry.title}</h3>
              <p>{industry.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section id="prozess" className="process-section">
        <div className="process-head">
          <Reveal as="p" className="eyebrow"><span className="eyebrow-line" /> So einfach geht&apos;s</Reveal>
          <Reveal as="h2" delay={0.08} className="section-title">
            In vier Schritten<br /><em>zum richtigen Personal.</em>
          </Reveal>
          <Reveal as="p" delay={0.2}>
            Von der Anfrage bis zum ersten Arbeitstag: transparent, persönlich, effizient.
          </Reveal>
          <Reveal delay={0.3} style={{ marginTop: 32 } as React.CSSProperties}>
            <Link href="/prozess" className="text-link">Prozess im Detail <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
        <Stagger as="div" className="steps-grid" gap={0.08}>
          {steps.map(([number, title, text]) => (
            <StaggerItem as="div" key={number} className="step">
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="difference-section">
        <div className="difference-quote">
          <Reveal as="p" className="eyebrow"><span className="eyebrow-line" /> Warum MR Work AG?</Reveal>
          <Reveal as="h2" delay={0.08} className="section-title">
            Der Unterschied,<br /><em>den wir machen.</em>
          </Reveal>
          <Reveal as="p" delay={0.2} className="quote">
            „Gute Arbeit beginnt dort, wo Menschen wirklich zusammenpassen – nicht dort, wo ein Algorithmus übereinstimmt.&rdquo;
          </Reveal>
          <Reveal delay={0.3}>
            <div className="signature">
              <strong>Fidan Mustafi</strong>
              <span>Geschäftsführer &amp; Gründer</span>
              <Link href="/ueber-uns" className="link">Mehr über uns <ArrowUpRight size={14} /></Link>
            </div>
          </Reveal>
        </div>
        <Stagger as="div" className="difference-list" gap={0.08}>
          <StaggerItem as="div">
            <Clock3 />
            <span>
              <strong>Blitzschnelle Reaktion</strong>
              <p>Innerhalb von 2 Stunden passende Kandidaten auf Ihrem Tisch – garantiert.</p>
            </span>
          </StaggerItem>
          <StaggerItem as="div">
            <Users />
            <span>
              <strong>Persönliche Betreuung</strong>
              <p>Sie sprechen immer mit derselben Person, die Ihre Situation kennt.</p>
            </span>
          </StaggerItem>
          <StaggerItem as="div">
            <ShieldCheck />
            <span>
              <strong>Geprüfte Fachkräfte</strong>
              <p>Jedes Profil wird sorgfältig geprüft. Nur wirklich qualifizierte Kandidaten erreichen Sie.</p>
            </span>
          </StaggerItem>
          <StaggerItem as="div">
            <Sparkles />
            <span>
              <strong>Lokal verwurzelt</strong>
              <p>Tief verwurzelt im Schweizer Arbeitsmarkt, bestens vernetzt in der ganzen Nation.</p>
            </span>
          </StaggerItem>
        </Stagger>
      </section>

      <section className="cta-band">
        <Reveal as="h2">
          Bereit, Ihr<br />Team zu <em>stärken?</em>
        </Reveal>
        <Reveal delay={0.1} as="div" className="cta-band-side">
          <p>
            Eine Anfrage. Zwei Stunden Antwortzeit. Null Verpflichtung.
            Sagen Sie uns, wen Sie suchen – wir liefern Profile, die Sie überraschen werden.
          </p>
          <Magnetic>
            <Link href="/kontakt" className="button button-light">
              Anfrage senden <ArrowUpRight size={16} />
            </Link>
          </Magnetic>
        </Reveal>
      </section>
    </>
  )
}
