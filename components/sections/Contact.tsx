'use client'

import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { contact, siteConfig } from '@/lib/site.config'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const sectionY = useTransform(scrollYProgress, [0, 1], [28, -16])

  return (
    <section id="contact" ref={ref} className="px-6 pb-24 pt-10 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        style={shouldReduceMotion ? undefined : { y: sectionY }}
        className="mx-auto grid max-w-7xl gap-8 rounded-[2.25rem] bg-[linear-gradient(145deg,rgba(169,199,197,0.32),rgba(255,255,255,0.96)_55%,rgba(245,237,226,0.65))] p-8 shadow-[0_28px_70px_rgba(34,34,34,0.08)] lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:p-12"
      >
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-ink/[0.45]">
            {contact.eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl font-light tracking-tight text-ink md:text-5xl">
            {contact.title}
          </h2>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-8 text-ink/[0.66]">
            {contact.content}
          </p>
        </div>

        <div className="flex flex-col justify-between rounded-[1.75rem] border border-white/80 bg-white/75 p-6 backdrop-blur-xl">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.28em] text-ink/[0.45]">
              What happens next
            </p>
            <p className="mt-4 font-sans text-sm leading-7 text-ink/[0.62]">
              We reply with fit, availability, and the next sensible step. A short brief is enough.
            </p>
          </div>

          <motion.a
            href={`mailto:${siteConfig.links.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center justify-between rounded-full bg-ink px-6 py-4 font-sans text-sm text-white"
          >
            <span>Send project details</span>
            <ArrowUpRight className="h-5 w-5" />
          </motion.a>

          <p className="mt-6 font-sans text-sm leading-7 text-ink/[0.58]">
            Email goes to {siteConfig.links.email}. A short note is enough.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
