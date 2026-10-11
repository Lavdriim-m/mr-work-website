'use client'

import { motion, useReducedMotion } from 'motion/react'
import type { Variants } from 'motion/react'
import { type CSSProperties, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'article' | 'span' | 'li' | 'h1' | 'h2' | 'h3' | 'p'
  className?: string
  style?: CSSProperties
  once?: boolean
}

export function Reveal({ children, delay = 0, y = 24, as = 'div', className, style, once = true }: RevealProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y, filter: reduce ? 'none' : 'blur(6px)' },
    show: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }

  return (
    <MotionTag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-10% 0px -10% 0px' }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'ul' | 'ol' | 'section'
  gap?: number
  delay?: number
}

export function Stagger({ children, className, as = 'div', gap = 0.08, delay = 0 }: StaggerProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerItem({ children, className, as = 'div', y = 24 }: { children: ReactNode; className?: string; as?: 'div' | 'li' | 'article' | 'section' | 'p'; y?: number }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : y, filter: reduce ? 'none' : 'blur(4px)' },
        show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </MotionTag>
  )
}
