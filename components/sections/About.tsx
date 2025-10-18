'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { about } from '@/lib/site.config'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-6 bg-gradient-to-b from-mist to-sand/30"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-light text-ink mb-8 text-center">
          {about.title}
        </h2>
        <p className="font-sans text-lg md:text-xl text-ink/70 leading-relaxed text-center">
          {about.content}
        </p>
      </motion.div>
    </section>
  )
}
