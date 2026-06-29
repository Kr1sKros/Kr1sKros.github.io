import { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { motion, AnimatePresence, animate } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeader } from '../ui/SectionHeader'
import { experiences } from '../../data/experience'
import { bscSemesters } from '../../data/bsc-courses'
import { indokSemesters } from '../../data/indok-courses'
import type { BscSemester } from '../../types'
import type { TranslationDict } from '../../i18n/translations'

interface Props { t: TranslationDict }

type ExperienceId = 'sikri' | 'learnlab' | 'uia' | 'uiaBachelor' | 'kiwi' | 'freelance'

const TYPE_DOT: Record<string, string> = {
  work: 'bg-blue-500',
  education: 'bg-emerald-500',
}

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]
const DUR = 0.42

function ExternalLinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function ExpLogo({ src, initials, color }: { src?: string; initials: string; color: string }) {
  const [err, setErr] = useState(false)
  const showInitials = !src || err
  return (
    <div className={`shrink-0 w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center ${showInitials ? color : ''}`}>
      {showInitials
        ? <span className="text-white text-xs font-bold leading-none">{initials}</span>
        : <img src={src} alt="" className="w-full h-full object-cover" onError={() => setErr(true)} />
      }
    </div>
  )
}

interface SemesterPanelProps {
  title: string; subtitle: string; logoImage?: string; logoInitials: string; logoColor: string; semesters: BscSemester[]
}

function SemesterDetailPanel({ title, subtitle, logoImage, logoInitials, logoColor, semesters }: SemesterPanelProps) {
  const [active, setActive] = useState(semesters[0].number)
  const semester = semesters.find(s => s.number === active)!
  return (
    <div>
      <div className="mb-5">
        <div className="mb-3">
          <ExpLogo src={logoImage} initials={logoInitials} color={logoColor} />
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">{title}</h3>
        <p className="text-sm text-accent-600 dark:text-accent-400 font-medium mt-0.5">{subtitle}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {semesters.map(s => (
          <button key={s.number} onClick={() => setActive(s.number)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
              active === s.number
                ? 'bg-accent-600 text-white shadow-sm'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}>
            S{s.number}
          </button>
        ))}
      </div>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
        {semester.period}
      </p>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: EASE }} className="space-y-3">
          {semester.courses.map(course => (
            <div key={course.code} className="bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-start gap-2 min-w-0">
                  <span className="shrink-0 text-xs font-mono font-bold px-2 py-0.5 rounded bg-accent-50 dark:bg-accent-900/40 text-accent-700 dark:text-accent-300 border border-accent-200 dark:border-accent-800/60 whitespace-nowrap">
                    {course.code}
                  </span>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">{course.name}</h4>
                </div>
                {course.url && (
                  <a href={course.url} target="_blank" rel="noopener noreferrer"
                    className="shrink-0 mt-0.5 text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                    title="View course at UiA">
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{course.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {course.skills.map(skill => (
                  <span key={skill} className="text-xs px-2 py-0.5 rounded-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function GenericDetailPanel({ t, expId }: { t: TranslationDict; expId: string }) {
  const exp = experiences.find(e => e.id === expId)!
  const k = exp.id as ExperienceId
  return (
    <div>
      <div className="mb-5">
        {exp.logo && (
          <div className="mb-3">
            <ExpLogo src={exp.logo.image} initials={exp.logo.initials} color={exp.logo.color} />
          </div>
        )}
        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">{t.experience[k]?.role ?? exp.roleKey}</h3>
        <p className="text-sm text-accent-600 dark:text-accent-400 font-medium mt-0.5">{exp.company} · {exp.period}</p>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{t.experience[k]?.description ?? exp.descriptionKey}</p>
    </div>
  )
}

function DetailPanel({ t, expId }: { t: TranslationDict; expId: string }) {
  if (expId === 'uiaBachelor') return <SemesterDetailPanel title="BSc — Computer Engineering" subtitle="University of Agder · 2023 — 2026" logoImage="/uia.png" logoInitials="UiA" logoColor="bg-teal-600" semesters={bscSemesters} />
  if (expId === 'uia') return <SemesterDetailPanel title="MSc — Industrial Economics & Technology Management" subtitle="University of Agder · 2026 — 2028" logoImage="/uia.png" logoInitials="UiA" logoColor="bg-teal-600" semesters={indokSemesters} />
  return <GenericDetailPanel t={t} expId={expId} />
}

export function Experience({ t }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [panelStyle, setPanelStyle] = useState<{ marginTop: number } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const heightsBefore = useRef<number[]>([])
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    const measure = () => { if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth) }
    measure()
    const ro = new ResizeObserver(measure)
    if (containerRef.current) ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [])

  // When a panel opens, scroll so the top of the list is visible
  useEffect(() => {
    if (!expandedId) return
    const timer = setTimeout(() => {
      const anchor = cardRefs.current[0]
      if (!anchor) return
      const rect = anchor.getBoundingClientRect()
      const NAVBAR = 80
      if (rect.top < NAVBAR) {
        window.scrollTo({ top: window.scrollY + rect.top - NAVBAR, behavior: 'smooth' })
      }
    }, 60)
    return () => clearTimeout(timer)
  }, [expandedId])

  const isAnyExpanded = expandedId !== null
  const isWide = containerWidth >= 680
  const COMPACT_W = 350
  const FULL_W = containerWidth > 0 ? Math.min(768, containerWidth) : 768
  const centerML = isWide ? Math.max(0, (containerWidth - FULL_W) / 2) : 0
  const targetML = isAnyExpanded && isWide ? 0 : centerML
  const timelineWidth = isAnyExpanded && isWide ? COMPACT_W : FULL_W

  const handleToggle = (id: string) => {
    // Capture card heights NOW, before any DOM change
    heightsBefore.current = cardRefs.current.map(r => r?.offsetHeight ?? 0)

    if (expandedId === id) {
      setExpandedId(null)
      setPanelStyle(null)
      return
    }

    // Measure top of list BEFORE state change so panel always aligns to card[0]
    if (isWide && containerRef.current) {
      const anchorEl = cardRefs.current[0]
      if (anchorEl) {
        const containerRect = containerRef.current.getBoundingClientRect()
        const anchorRect    = anchorEl.getBoundingClientRect()
        setPanelStyle({ marginTop: anchorRect.top - containerRect.top })
      }
    }

    setExpandedId(id)
  }

  // After React updates the DOM (new width → text reflows), animate heights from captured → new
  useLayoutEffect(() => {
    if (!heightsBefore.current.some(h => h > 0)) return
    cardRefs.current.forEach((el, i) => {
      if (!el) return
      const from = heightsBefore.current[i]
      if (!from) return
      // scrollHeight = natural height at new width, before we apply any constraint
      const to = el.scrollHeight
      if (Math.abs(from - to) < 2) return
      // Lock to old height so the browser paints that first, then animate
      el.style.height = `${from}px`
      el.style.overflow = 'hidden'
      animate(el, { height: to }, { duration: DUR, ease: EASE }).then(() => {
        el.style.height = ''
        el.style.overflow = ''
      })
    })
    heightsBefore.current = []
  }, [isAnyExpanded])

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title={t.experience.sectionTitle} subtitle={t.experience.sectionSubtitle} />

        <div ref={containerRef} className="flex items-start gap-6">

            {/* Timeline — width snaps instantly (one reflow), only marginLeft glides */}
            <motion.div
              style={{ flexShrink: 0, width: timelineWidth }}
              animate={{ marginLeft: targetML }}
              transition={{ duration: DUR, ease: EASE }}
            >
              {experiences.map((exp, i) => {
                const k = exp.id as ExperienceId
                const isExpanded = expandedId === exp.id
                return (
                  <div key={exp.id} className="relative pl-8">
                    {i < experiences.length - 1 && (
                      <div className="absolute left-3 top-10 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />
                    )}
                    <motion.div
                      initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.08 }}
                      className={`absolute left-0.5 top-5 w-5 h-5 rounded-full border-2 border-white dark:border-gray-900 ${TYPE_DOT[exp.type]} transition-transform duration-300 ${isExpanded ? 'scale-125' : ''}`}
                    />

                    <ScrollReveal delay={i * 0.08} className="pb-3">
                      {/* ref sits on this div so height animation includes padding */}
                      <div ref={el => { cardRefs.current[i] = el }}>
                        <button
                          onClick={() => handleToggle(exp.id)}
                          className={`w-full text-left rounded-2xl border p-5 transition-colors duration-300 ${
                            isExpanded
                              ? 'bg-white dark:bg-gray-900 border-accent-400 dark:border-accent-600 shadow-md shadow-accent-500/10'
                              : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-sm'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            {exp.logo && (
                              <ExpLogo src={exp.logo.image} initials={exp.logo.initials} color={exp.logo.color} />
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 flex-wrap">
                                <div className="min-w-0">
                                  {/* Title: no truncation — always fully visible, wraps if needed */}
                                  <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">
                                    {t.experience[k]?.role ?? exp.roleKey}
                                  </p>
                                  <p className="text-xs font-medium text-accent-600 dark:text-accent-400 mt-0.5 truncate">{exp.company}</p>
                                </div>
                                <div className="flex items-center gap-1.5 shrink-0">
                                  {exp.current && (
                                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 whitespace-nowrap">
                                      {t.common.current}
                                    </span>
                                  )}
                                  <span className="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap hidden sm:block">{exp.period}</span>
                                </div>
                              </div>
                              {/* Description: line-clamp-2 so height never changes due to wrapping */}
                              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-2 line-clamp-2">
                                {t.experience[k]?.description ?? exp.descriptionKey}
                              </p>
                            </div>
                          </div>

                          <div className={`flex items-center justify-end gap-1 mt-3 text-xs font-medium transition-colors duration-200 ${isExpanded ? 'text-accent-600 dark:text-accent-400' : 'text-gray-400 dark:text-gray-600'}`}>
                            <span>{isExpanded ? t.common.close : t.common.learnMore}</span>
                            <ChevronIcon open={isExpanded} />
                          </div>
                        </button>
                      </div>
                    </ScrollReveal>
                  </div>
                )
              })}
            </motion.div>

            {/* Detail panel — slides in from right, aligned to clicked card */}
            <AnimatePresence mode="wait">
              {expandedId && isWide && panelStyle && (
                <motion.div
                  key={expandedId}
                  style={{ marginTop: panelStyle.marginTop }}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 56 }}
                  transition={{ duration: DUR, ease: EASE, delay: 0.07 }}
                  className="flex-1 min-w-0 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 self-start"
                >
                  <DetailPanel t={t} expId={expandedId} />
                </motion.div>
              )}
            </AnimatePresence>
        </div>

        {/* Mobile: detail panel stacks below */}
        <AnimatePresence mode="wait">
          {expandedId && !isWide && (
            <motion.div
              key={expandedId}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="mt-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6"
            >
              <DetailPanel t={t} expId={expandedId} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
