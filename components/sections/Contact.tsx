'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail } from 'lucide-react'
import { siteConfig } from '@/lib/site.config'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-6 bg-gradient-to-b from-euca/10 to-mist"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-serif text-4xl md:text-5xl font-light text-ink mb-8">
          Get in Touch
        </h2>
        <p className="font-sans text-lg text-ink/70 mb-12 leading-relaxed">
          We&apos;d love to hear from you. Whether you have a question, feedback, or
          just want to say hello—reach out anytime.
        </p>

        <motion.a
          href={`mailto:${siteConfig.links.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-euca/20 hover:bg-euca/30 text-ink font-sans px-8 py-4 rounded-full transition-colors duration-300 border border-euca/30"
        >
          <Mail className="w-5 h-5" />
          <span>{siteConfig.links.email}</span>
        </motion.a>
      </motion.div>
    </section>
  )
}
