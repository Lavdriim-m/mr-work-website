import type { ReactNode } from 'react'
import { Reveal } from './reveal'

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  meta?: ReactNode
  tone?: 'ink' | 'paper' | 'sand'
}

export function PageHero({ eyebrow, title, lead, meta, tone = 'ink' }: PageHeroProps) {
  return (
    <section className={`page-hero page-hero-${tone}`} data-hero-tone={tone}>
      <div className="page-hero-inner">
        <Reveal as="p" className="eyebrow">
          <span className="eyebrow-line" /> {eyebrow}
        </Reveal>
        <Reveal as="h1" delay={0.08} className="page-hero-title">
          {title}
        </Reveal>
        {lead && (
          <Reveal as="p" delay={0.18} className="page-hero-lead">
            {lead}
          </Reveal>
        )}
        {meta && (
          <Reveal as="div" delay={0.26} className="page-hero-meta">
            {meta}
          </Reveal>
        )}
      </div>
      <div className="page-hero-glow" aria-hidden="true" />
    </section>
  )
}
