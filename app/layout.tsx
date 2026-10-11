import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Fraunces, Instrument_Sans } from 'next/font/google'
import { SiteHeader } from '@/components/site/site-header'
import { SiteFooter } from '@/components/site/site-footer'
import { GrainOverlay } from '@/components/site/grain-overlay'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  style: ['normal', 'italic'],
  axes: ['opsz', 'SOFT'],
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-brand',
  display: 'swap',
  weight: ['700', '900', '1000'],
})

export const metadata: Metadata = {
  title: {
    default: 'MR Work AG — Personal in Bewegung',
    template: '%s · MR Work AG',
  },
  description:
    'Temporärarbeit, Personalvermittlung und HR-Abwicklung in Zürich. Schnell, persönlich und zuverlässig für Handwerk, Bau, Industrie und Logistik.',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
  },
}

export const viewport: Viewport = {
  themeColor: '#3d8df5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de-CH" className={`${fraunces.variable} ${instrumentSans.variable} ${dmSans.variable}`}>
      <body className="antialiased">
        <a href="#main" className="skip-link">Zum Hauptinhalt springen</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <GrainOverlay />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
