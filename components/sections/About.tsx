'use client'

import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { about } from '@/lib/site.config'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const cardY = useTransform(scrollYProgress, [0, 1], [36, -24])

  return (
    <section
      id="about"
      ref={ref}
      className="px-6 py-24 lg:px-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        style={shouldReduceMotion ? undefined : { y: cardY }}
        className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/80 bg-white/70 p-8 shadow-[0_24px_70px_rgba(34,34,34,0.05)] backdrop-blur-xl lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:p-12"
      >
        <div className="lg:pr-6">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-ink/[0.45]">
            {about.eyebrow}
          </p>
          <h2 className="mt-5 max-w-lg font-serif text-4xl font-light tracking-tight text-ink md:text-5xl">
            {about.title}
          </h2>
        </div>

        <div className="space-y-8">
          <p className="max-w-2xl font-sans text-lg leading-8 text-ink/[0.68]">
            {about.content}
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {about.points.map((point) => (
              <div
                key={point}
                className="rounded-[1.5rem] border border-ink/10 bg-mist px-5 py-6"
              >
                <p className="font-sans text-sm leading-7 text-ink/[0.65]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
