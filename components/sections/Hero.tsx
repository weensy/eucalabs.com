'use client'

import { motion } from 'framer-motion'
import { siteConfig } from '@/lib/site.config'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-euca/10 via-mist to-sand/20 -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-serif text-6xl md:text-8xl font-light text-ink mb-6 tracking-tight">
            {siteConfig.name}
          </h1>
          <p className="font-sans text-xl md:text-2xl text-ink/70 font-light tracking-wide">
            {siteConfig.tagline}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 font-sans text-lg md:text-xl text-ink/60 max-w-2xl mx-auto leading-relaxed"
        >
          We build apps that breathe.
        </motion.p>
      </div>
    </section>
  )
}
