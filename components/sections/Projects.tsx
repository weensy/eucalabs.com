'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '@/data/projects'
import { ExternalLink, Clock } from 'lucide-react'

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-6 bg-gradient-to-b from-sand/30 to-mist"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-light text-ink mb-16 text-center"
        >
          Our Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {project.status === 'live' && project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <ProjectCard project={project} />
                </a>
              ) : (
                <div className="cursor-default">
                  <ProjectCard project={project} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <div
      className="bg-white/50 backdrop-blur-sm border border-ink/10 rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-lg hover:border-ink/20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${project.accent}15 0%, transparent 100%)`,
      }}
    >
      {/* Accent line */}
      <div
        className="absolute top-0 left-0 w-full h-1 opacity-50"
        style={{ backgroundColor: project.accent }}
      />

      <div className="flex items-start justify-between mb-4">
        <h3 className="font-serif text-2xl font-medium text-ink">
          {project.name}
        </h3>
        {project.status === 'live' ? (
          <ExternalLink className="w-5 h-5 text-ink/40 group-hover:text-ink/70 transition-colors" />
        ) : (
          <div className="flex items-center gap-1.5 text-xs text-ink/40 font-sans">
            <Clock className="w-4 h-4" />
            <span>Soon</span>
          </div>
        )}
      </div>

      <p className="font-sans text-ink/70 leading-relaxed">
        {project.description}
      </p>
    </div>
  )
}
