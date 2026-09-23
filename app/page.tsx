'use client'

import { ArrowDownRight, ArrowRight, Check, ChevronDown, Clock3, Mail, MapPin, Menu, Phone, ShieldCheck, Sparkles, Users, X } from 'lucide-react'
import { useState } from 'react'

const services = [
  { number: '01', title: 'Temporärarbeit', text: 'Flexible Einsätze für kurzfristige Auftragsspitzen. Wir stellen schnell das richtige Personal bereit – ohne langwierige Prozesse.' },
  { number: '02', title: 'Personalvermittlung', text: 'Wir finden Mitarbeitende, die fachlich überzeugen, Verantwortung übernehmen und langfristig zu Ihrem Unternehmen passen.' },
  { number: '03', title: 'Try & Hire', text: 'Lernen Sie Ihre zukünftigen Mitarbeitenden im echten Arbeitsalltag kennen und entscheiden Sie erst dann, wenn Sie wirklich überzeugt sind.' },
  { number: '04', title: 'HR-Abwicklung', text: 'Lohnabrechnung, Sozialversicherungen, Verträge – wir kümmern uns um den administrativen Aufwand. Sie um Ihr Kerngeschäft.' },
]

const industries = [
  { title: 'Handwerk', text: 'Ob Schreiner, Elektriker oder Sanitär, wir kennen das Handwerk und finden die Menschen, die wirklich passen.', image: '01' },
  { title: 'Bau', text: 'Ob Hochbau oder Tiefbau, wir liefern zuverlässige Fachkräfte, die auf der Baustelle sofort einsatzbereit sind.', image: '02' },
  { title: 'Industrie', text: 'Automatiker, Polymechaniker, Schweisser: präzise, zuverlässig und einsatzbereit.', image: '03' },
  { title: 'Logistik', text: 'Lageristen, Chauffeure, Staplerfahrer – zuverlässige Kräfte für reibungslose Abläufe.', image: '04' },
]

const steps = [
  ['01', 'Anfrage stellen', 'Füllen Sie unser Kontaktformular aus oder rufen Sie uns direkt an. Kostenlos und unverbindlich.'],
  ['02', 'Beratungsgespräch', 'Wir verstehen Ihre Anforderungen und definieren gemeinsam das ideale Profil für Ihre offene Stelle.'],
  ['03', 'Kandidaten erhalten', 'Innerhalb von 2 Stunden erhalten Sie passende, geprüfte Kandidaten direkt auf den Tisch.'],
  ['04', 'Einsatz starten', 'Sie wählen, wir kümmern uns um Vertrag, Administration und Nachbetreuung.'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="MR Work AG Startseite"><span>MR</span><i>WORK</i><small>AG</small></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Hauptnavigation">
          <a href="#leistungen" onClick={() => setMenuOpen(false)}>Leistungen</a>
          <a href="#branchen" onClick={() => setMenuOpen(false)}>Branchen</a>
          <a href="#prozess" onClick={() => setMenuOpen(false)}>Prozess</a>
          <a className="nav-cta" href="#kontakt" onClick={() => setMenuOpen(false)}>Jetzt anfragen <ArrowRight size={15} /></a>
        </nav>
        <button className="menu-button" aria-label={menuOpen ? 'Menü schliessen' : 'Menü öffnen'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Ihr Partner für Personal in der Schweiz</p>
          <h1>Die richtigen<br /><em>Menschen.</em><br /><span>Zur richtigen Zeit.</span></h1>
          <p className="hero-lead">Temporärarbeit, Personalvermittlung & HR-Abwicklung – schnell, persönlich und zuverlässig.</p>
          <div className="hero-actions"><a className="button button-dark" href="#kontakt">Jetzt anfragen <ArrowRight size={17} /></a><a className="text-link" href="#leistungen">Unsere Leistungen <ArrowDownRight size={17} /></a></div>
        </div>
        <div className="hero-visual"><div className="hero-image" /><div className="hero-caption"><span>01 / 04</span><span>Verbindungen, die bewegen.</span></div></div>
        <div className="hero-scroll">Scrollen <span /></div>
      </section>

      <section className="proof-strip" aria-label="MR Work Vorteile">
        <div><strong>24<span>h</span></strong><small>Reaktionszeit</small></div><div><strong>100<span>%</span></strong><small>Persönliche Betreuung</small></div><div><strong>360<span>°</span></strong><small>HR-Kompetenz</small></div><p>Wir bringen Menschen und<br className="desktop-only" /> Unternehmen zusammen.</p>
      </section>

      <section id="leistungen" className="section services-section">
        <div className="section-intro"><p className="eyebrow">Was wir bieten</p><h2>Personal,<br /><em>das passt.</em></h2></div>
        <div className="services-grid">{services.map((service) => <article className="service-card" key={service.number}><span className="card-number">{service.number}</span><div><h3>{service.title}</h3><p>{service.text}</p><a href="#kontakt" aria-label={`Mehr über ${service.title}`}>Mehr erfahren <ArrowUpRight /></a></div></article>)}</div>
      </section>

      <section id="branchen" className="section industries-section">
        <div className="section-topline"><p className="eyebrow">Wo wir stark sind</p><a className="text-link" href="#kontakt">Branchen entdecken <ArrowRight size={17} /></a></div>
        <h2>Verstehen, was<br /><em>Sie bewegt.</em></h2>
        <div className="industry-grid">{industries.map((industry) => <article className="industry-card" key={industry.title}><div className={`industry-image industry-${industry.image}`}><span>0{industry.image}</span></div><h3>{industry.title}</h3><p>{industry.text}</p></article>)}</div>
      </section>

      <section id="prozess" className="process-section"><div className="process-head"><p className="eyebrow">So einfach geht&apos;s</p><h2>In vier Schritten<br /><em>zum richtigen Personal.</em></h2><p>Von der ersten Anfrage bis zum erfolgreichen Einsatz: Wir machen den Prozess transparent, persönlich und effizient.</p></div><div className="steps-grid">{steps.map(([number, title, text]) => <div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>

      <section className="difference-section"><div className="difference-quote"><p className="eyebrow">Warum MR Work AG?</p><h2>Der Unterschied,<br /><em>den wir machen.</em></h2><p className="quote">„Gute Arbeit beginnt dort, wo Menschen wirklich zusammenpassen.“</p><div className="signature"><strong>Fidan Mustafi</strong><span>Geschäftsführer</span></div></div><div className="difference-list"><div><Clock3 /><span><strong>Blitzschnelle Reaktion</strong><p>Innerhalb von 2 Stunden haben Sie passende Kandidaten auf dem Tisch – garantiert.</p></span></div><div><Users /><span><strong>Persönliche Betreuung</strong><p>Sie sprechen immer mit demselben Menschen, der Ihre Situation kennt.</p></span></div><div><ShieldCheck /><span><strong>Geprüfte Fachkräfte</strong><p>Jede Bewerbung wird sorgfältig geprüft. Nur wirklich qualifizierte Kandidaten erreichen Sie.</p></span></div><div><Sparkles /><span><strong>Lokal verwurzelt</strong><p>Tief verwurzelt im Schweizer Arbeitsmarkt und bestens vernetzt in der ganzen Nation.</p></span></div></div></section>

      <section id="kontakt" className="contact-section"><div className="contact-heading"><p className="eyebrow">Kontakt aufnehmen</p><h2>Bereit,<br /><em>loszulegen?</em></h2><p>Füllen Sie das Formular aus und wir melden uns innerhalb von 2 Stunden bei Ihnen. Kostenlos und unverbindlich.</p><div className="contact-details"><a href="https://maps.google.com/?q=Baslerstrasse+30,+8048+Zürich"><MapPin />Baslerstrasse 30, 8048 Zürich</a><a href="tel:+41445003217"><Phone />+41 44 500 32 17</a><a href="mailto:info@mr-work.ch"><Mail />info@mr-work.ch</a></div></div><form className="contact-form" onSubmit={(e) => e.preventDefault()}><div className="form-row"><label>Ihr Vor- und Nachname *<input required name="name" /></label><label>Firma<input name="company" /></label></div><div className="form-row"><label>E-Mail *<input required type="email" name="email" /></label><label>Telefon<input name="phone" /></label></div><label>Ich suche... *<select required name="need" defaultValue=""><option value="" disabled>Bitte auswählen</option><option>Temporäres Personal</option><option>Festanstellung</option><option>Try & Hire</option><option>HR-Abwicklung</option></select></label><label>Ihre Anfrage<textarea name="message" rows={4} placeholder="Branche, Anzahl Personen, Startdatum ..." /></label><label className="upload-label"><input type="file" multiple />Lebenslauf und Bewerbungsunterlagen hochladen <span>PDF, DOCX</span></label><button className="button button-light" type="submit">Anfrage senden <ArrowRight size={17} /></button></form></section>

      <footer className="footer"><a href="#top" className="brand brand-footer"><span>MR</span><i>WORK</i><small>AG</small></a><div className="footer-links"><div><strong>Leistungen</strong><a href="#leistungen">Temporärarbeit</a><a href="#leistungen">Personalvermittlung</a><a href="#leistungen">Try & Hire</a></div><div><strong>Kontakt</strong><a href="#kontakt">Anfrage stellen</a><a href="tel:+41445003217">+41 44 500 32 17</a><a href="mailto:info@mr-work.ch">info@mr-work.ch</a></div></div><div className="footer-bottom"><span>© 2026 MR Work AG. Alle Rechte vorbehalten.</span><span>Zürich · Schweiz</span></div></footer>
    </main>
  )
}

function ArrowUpRight() { return <ArrowRight size={18} /> }
