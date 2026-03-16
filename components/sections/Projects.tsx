'use client'

import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '@/data/projects'
import { ArrowUpRight } from 'lucide-react'

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="bg-gradient-to-b from-sand/[0.35] to-mist px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl font-serif text-4xl font-light text-ink md:text-5xl"
        >
          Selected work with a quieter point of view.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mt-6 max-w-3xl font-sans text-lg leading-8 text-ink/[0.62]"
        >
          We prefer fewer details, shown with more intention. Each project here balances visual
          restraint with product clarity.
        </motion.p>

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const cardRef = useRef(null)
  const Wrapper = project.status === 'live' && project.url ? 'a' : 'div'
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const visualY = useTransform(scrollYProgress, [0, 1], [26, -18])
  const textY = useTransform(scrollYProgress, [0, 1], [-12, 14])

  return (
    <Wrapper
      {...(project.status === 'live' && project.url
        ? {
            href: project.url,
            target: '_blank',
            rel: 'noopener noreferrer',
          }
        : {})}
      className="group block"
    >
      <div
        ref={cardRef}
        className="grid gap-6 rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_24px_70px_rgba(34,34,34,0.05)] backdrop-blur-xl lg:grid-cols-[minmax(18rem,0.9fr)_minmax(0,1.1fr)] lg:p-8"
      >
        <motion.div
          className={`relative overflow-hidden rounded-[1.75rem] border border-ink/10 p-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
          style={{
            ...(shouldReduceMotion ? {} : { y: visualY }),
            background: `linear-gradient(145deg, ${project.accent}55 0%, rgba(255,255,255,0.88) 68%)`,
          }}
        >
          <div className="relative flex h-full min-h-[16rem] flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1 font-sans text-xs uppercase tracking-[0.22em] text-ink/50">
                {project.category}
              </span>
              <span className="rounded-full bg-white/85 px-3 py-1 font-sans text-xs uppercase tracking-[0.18em] text-ink/[0.5]">
                {project.status === 'live' ? 'Live' : 'In progress'}
              </span>
            </div>

            <div className="max-w-sm">
              <p className="font-serif text-4xl text-ink md:text-5xl">{project.name}</p>
              <p className="mt-4 max-w-xs font-sans text-sm leading-7 text-ink/[0.62]">
                {project.outcome}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={shouldReduceMotion ? undefined : { y: textY }}
          className={`flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : ''}`}
        >
          <div>
            <p className="max-w-2xl font-sans text-base leading-8 text-ink/[0.65]">
              {project.description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-[1rem] border border-ink/10 bg-mist px-4 py-3"
                >
                  <span className="mt-[0.45rem] h-1.5 w-1.5 rounded-full bg-euca" />
                  <span className="font-sans text-sm leading-6 text-ink/60">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between border-t border-ink/10 pt-6">
            <p className="font-sans text-sm text-ink/[0.55]">
              {project.status === 'live' ? 'Visit the live product' : 'Currently in progress'}
            </p>
            {project.status === 'live' ? (
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-mist text-ink transition-transform duration-200 group-hover:-translate-y-0.5">
                <ArrowUpRight className="h-5 w-5" />
              </span>
            ) : null}
          </div>
        </motion.div>
      </div>
    </Wrapper>
  )
}
