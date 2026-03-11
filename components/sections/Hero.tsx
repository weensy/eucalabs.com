'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { hero } from '@/lib/site.config'
import { projects } from '@/data/projects'

const featuredProject = projects.find((project) => project.status === 'live') ?? projects[0]

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-14 lg:px-10 lg:pb-28 lg:pt-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[36rem] bg-[radial-gradient(circle_at_top_left,_rgba(169,199,197,0.38),_transparent_42%),radial-gradient(circle_at_top_right,_rgba(245,237,226,0.9),_transparent_34%)]" />
      <div className="absolute left-[12%] top-24 -z-10 h-72 w-72 rounded-full bg-euca/25 blur-3xl" />
      <div className="absolute right-[10%] top-40 -z-10 h-60 w-60 rounded-full bg-sand blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100svh-9rem)] max-w-7xl items-center gap-14 lg:grid-cols-[minmax(0,1.32fr)_minmax(18rem,0.68fr)]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-ink/50">
            {hero.eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl font-light tracking-tight text-ink sm:text-6xl lg:text-8xl">
            {hero.title}
          </h1>
          <p className="mt-8 max-w-2xl font-sans text-lg leading-8 text-ink/[0.68] md:text-xl">
            {hero.intro}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 font-sans text-sm text-white transition-transform duration-200 hover:-translate-y-0.5"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-ink/10 bg-white/80 px-6 py-3 font-sans text-sm text-ink transition-colors duration-200 hover:border-euca/40 hover:bg-euca/10"
            >
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {hero.signals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-ink/10 bg-white/70 px-4 py-2 font-sans text-sm text-ink/[0.65] backdrop-blur"
              >
                {signal}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
          className="relative max-w-[24rem] lg:ml-auto"
        >
          <div className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_24px_60px_rgba(34,34,34,0.06)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <div>
                <p className="font-sans text-xs uppercase tracking-[0.3em] text-ink/[0.45]">
                  Featured product
                </p>
                <p className="mt-2 font-sans text-sm leading-7 text-ink/[0.62]">
                  A recent product shaped with the same calm, low-noise approach.
                </p>
              </div>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 font-sans text-sm text-ink/[0.6] transition-colors duration-200 hover:text-ink"
              >
                <span>All projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div
              className="mt-6 rounded-[1.75rem] border border-ink/10 p-6"
              style={{
                background: `linear-gradient(145deg, ${featuredProject.accent}22 0%, rgba(255,255,255,0.92) 58%)`,
              }}
            >
              <h2 className="mt-3 font-serif text-3xl text-ink">{featuredProject.name}</h2>
              <p className="mt-4 max-w-sm font-sans text-sm leading-7 text-ink/[0.62]">
                {featuredProject.outcome}
              </p>
              <a
                href={featuredProject.url ?? '#projects'}
                target={featuredProject.url ? '_blank' : undefined}
                rel={featuredProject.url ? 'noopener noreferrer' : undefined}
                className="mt-6 inline-flex items-center gap-2 font-sans text-sm text-ink/[0.62] transition-colors duration-200 hover:text-ink"
              >
                <span>{featuredProject.url ? 'Visit product' : 'See project details'}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
