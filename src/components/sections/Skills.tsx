import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { ScrollReveal } from '../ui/ScrollReveal'
import { skillGroups } from '../../data/skills'
import type { TranslationDict } from '../../i18n/translations'

interface Props { t: TranslationDict }

const SKILL_CATEGORY_KEYS: Record<string, keyof TranslationDict['skills']> = {
  'skills.frontend': 'frontend',
  'skills.backend': 'backend',
  'skills.design': 'design',
  'skills.tools': 'tools',
  'skills.systems': 'systems',
}

const LANGUAGES = [
  { flag: '🇳🇴', name: 'Norwegian', level: 'Native',       dots: 5 },
  { flag: '🇬🇧', name: 'English',   level: 'Native',       dots: 5 },
  { flag: '🇵🇱', name: 'Polish',    level: 'Native',       dots: 5 },
  { flag: '🇩🇪', name: 'German',    level: 'Intermediate', dots: 3 },
]

function ProficiencyDots({ filled }: { filled: number }) {
  return (
    <div className="flex gap-1 mt-2">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`w-2 h-2 rounded-full transition-colors ${i < filled ? 'bg-accent-500' : 'bg-gray-200 dark:bg-gray-700'}`} />
      ))}
    </div>
  )
}

export function Skills({ t }: Props) {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title={t.skills.sectionTitle} subtitle={t.skills.sectionSubtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIdx) => {
            const categoryKey = SKILL_CATEGORY_KEYS[group.categoryKey] ?? 'frontend'
            const categoryLabel = t.skills[categoryKey] as string

            return (
              <ScrollReveal key={group.categoryKey} delay={groupIdx * 0.08}>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 h-full">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-2.5 h-2.5 rounded-full ${group.dot}`} />
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                      {categoryLabel}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, skillIdx) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: groupIdx * 0.05 + skillIdx * 0.04, duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        className={`inline-block text-xs font-medium px-3 py-1.5 rounded-full ${group.color} cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Spoken languages banner */}
        <ScrollReveal delay={0.2} className="mt-6">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 px-6 py-5">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                Spoken Languages
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {LANGUAGES.map((lang, i) => (
                <motion.div
                  key={lang.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="flex flex-col"
                >
                  <span className="text-2xl mb-1.5 leading-none">{lang.flag}</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">{lang.name}</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">{lang.level}</span>
                  <ProficiencyDots filled={lang.dots} />
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
