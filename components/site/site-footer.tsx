import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const columns = [
  {
    title: 'Leistungen',
    links: [
      { href: '/leistungen#temporaer', label: 'Temporärarbeit' },
      { href: '/leistungen#vermittlung', label: 'Personalvermittlung' },
      { href: '/leistungen#try-and-hire', label: 'Try & Hire' },
      { href: '/leistungen#hr', label: 'HR-Abwicklung' },
    ],
  },
  {
    title: 'Branchen',
    links: [
      { href: '/branchen#handwerk', label: 'Handwerk' },
      { href: '/branchen#bau', label: 'Bau' },
      { href: '/branchen#industrie', label: 'Industrie' },
      { href: '/branchen#logistik', label: 'Logistik' },
    ],
  },
  {
    title: 'Unternehmen',
    links: [
      { href: '/ueber-uns', label: 'Über uns' },
      { href: '/prozess', label: 'Prozess' },
      { href: '/kontakt', label: 'Kontakt' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand brand-footer" aria-label="MR Work AG Startseite">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MrWork%20Logo%20Transparent%20%28High%20Res%29-OHPPWG77XCNct2QqHGvHKub2pEJLNI.png" alt="MR WORK AG" />
          </Link>
          <p className="footer-tag">
            <em>„Verbindungen,</em><br />die bewegen.&rdquo;
          </p>
          <ul className="footer-contact">
            <li>
              <a href="https://maps.google.com/?q=Baslerstrasse+30,+8048+Zürich">
                <MapPin size={16} /> Baslerstrasse 30, 8048 Zürich
              </a>
            </li>
            <li>
              <a href="tel:+41445003217">
                <Phone size={16} /> +41 44 500 32 17
              </a>
            </li>
            <li>
              <a href="mailto:info@mr-work.ch">
                <Mail size={16} /> info@mr-work.ch
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-columns">
          {columns.map((col) => (
            <div key={col.title}>
              <strong>{col.title}</strong>
              <ul>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-cta">
          <p>Bereit, Ihr Team zu verstärken?</p>
          <Link href="/kontakt" className="button button-ghost-light">
            Anfrage stellen <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="footer-bar">
        <span className="footer-wordmark" aria-hidden>MR·WORK</span>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MR Work AG · Alle Rechte vorbehalten</span>
        <span className="footer-credit">
          Made by{' '}
          <a href="https://www.linkedin.com/in/lavdrim-mustafi" target="_blank" rel="noopener noreferrer">
            Lavdrim Mustafi
          </a>
        </span>
        <span>Zürich · Schweiz</span>
      </div>
    </footer>
  )
}
