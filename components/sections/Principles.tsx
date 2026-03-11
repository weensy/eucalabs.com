'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { principles } from '@/lib/site.config'
import { Leaf, Eye, Heart, Sparkles } from 'lucide-react'

const icons = [Leaf, Eye, Heart, Sparkles]

export function Principles() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="principles" ref={ref} className="bg-mist px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl font-serif text-4xl font-light text-ink md:text-5xl"
        >
          The principles behind the calm.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 max-w-2xl font-sans text-lg leading-8 text-ink/[0.62]"
        >
          Our visual language stays quiet, but the standards behind it are exacting. These
          principles shape the work more than any aesthetic trend does.
        </motion.p>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex h-full flex-col rounded-[1.75rem] border border-white/80 bg-white/75 p-8 shadow-[0_18px_45px_rgba(34,34,34,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-euca/30 hover:shadow-[0_24px_55px_rgba(34,34,34,0.07)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-euca/[0.18]">
                    <Icon className="h-6 w-6 text-euca transition-transform duration-300 group-hover:scale-110" />
                  </span>
                  <h3 className="mt-8 font-serif text-2xl font-medium text-ink">
                    {principle.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-7 text-ink/60">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
