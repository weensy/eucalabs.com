'use client'

import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { studio } from '@/lib/site.config'

export function Studio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const leadY = useTransform(scrollYProgress, [0, 1], [28, -18])
  const notesY = useTransform(scrollYProgress, [0, 1], [10, -10])

  return (
    <section id="studio" ref={ref} className="px-6 py-24 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
      >
        <motion.div
          style={shouldReduceMotion ? undefined : { y: leadY }}
          className="rounded-[2rem] bg-ink px-8 py-10 text-white shadow-[0_28px_70px_rgba(34,34,34,0.16)]"
        >
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-white/50">
            {studio.eyebrow}
          </p>
          <h2 className="mt-5 max-w-md font-serif text-4xl font-light tracking-tight md:text-5xl">
            {studio.title}
          </h2>
          <p className="mt-8 max-w-xl font-sans text-lg leading-8 text-white/[0.72]">
            {studio.content}
          </p>
        </motion.div>

        <motion.div
          style={shouldReduceMotion ? undefined : { y: notesY }}
          className="grid gap-6 md:grid-cols-2"
        >
          {studio.notes.map((note) => (
            <div
              key={note.title}
              className="rounded-[2rem] border border-white/80 bg-white/75 p-8 shadow-[0_18px_45px_rgba(34,34,34,0.04)] backdrop-blur-xl"
            >
              <p className="font-serif text-3xl text-ink">{note.title}</p>
              <p className="mt-4 font-sans text-sm leading-7 text-ink/[0.62]">{note.body}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
