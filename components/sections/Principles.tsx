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
    <section id="principles" ref={ref} className="py-24 px-6 bg-mist">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-light text-ink mb-16 text-center"
        >
          Our Principles
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="bg-white/50 backdrop-blur-sm border border-ink/10 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-euca/30">
                  <Icon className="w-8 h-8 text-euca mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-serif text-xl font-medium text-ink mb-3">
                    {principle.title}
                  </h3>
                  <p className="font-sans text-sm text-ink/60 leading-relaxed">
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
