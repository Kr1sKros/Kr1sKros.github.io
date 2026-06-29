import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { Project } from '../../types'
import type { TranslationDict } from '../../i18n/translations'

interface Props {
  project: Project
  t: TranslationDict
  index: number
}

export function ProjectCard({ project, t, index }: Props) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setHovered(false)
  }

  const titleKey = project.titleKey.split('.').slice(-1)[0] as 'publikum' | 'raydar' | 'gain' | 'byte33'
  const descKey = project.descriptionKey.split('.').slice(-1)[0] as 'description'
  const projectId = project.id as keyof typeof t.projects

  const getTitle = () => {
    const pKey = project.id as 'publikum' | 'raydar' | 'gain' | 'byte33'
    return t.projects[pKey]?.title ?? project.titleKey
  }
  const getDescription = () => {
    const pKey = project.id as 'publikum' | 'raydar' | 'gain' | 'byte33'
    return t.projects[pKey]?.description ?? project.descriptionKey
  }

  void titleKey; void descKey; void projectId

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="group relative bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden cursor-default transition-shadow duration-300 hover:shadow-2xl hover:shadow-accent-500/10 dark:hover:shadow-accent-400/10"
      >
        {/* Project image */}
        <div className="relative h-52 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
          {project.image && (
            <img
              src={project.image}
              alt={project.imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
            />
          )}
          {!project.image && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <div className="w-16 h-16 rounded-2xl bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 dark:text-gray-500">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">{project.imageAlt}</span>
            </div>
          )}
          <motion.div
            className="absolute inset-0 bg-accent-600/5 dark:bg-accent-400/5"
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3 gap-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
              {getTitle()}
            </h3>
            <span className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              {project.category}
            </span>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5 line-clamp-3">
            {getDescription()}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.techStack.map(tech => (
              <span key={tech} className="text-xs font-medium px-2 py-0.5 rounded-md bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 border border-accent-100 dark:border-accent-800/50">
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
            {project.links.caseStudy && (
              <a href={project.links.caseStudy} className="text-sm font-medium text-accent-600 dark:text-accent-400 hover:underline flex items-center gap-1">
                {t.projects.caseStudy}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.138 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                {t.projects.github}
              </a>
            )}
            {project.links.demo && (
              <a href={project.links.demo} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors">
                {t.projects.demo}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
