import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeader } from '../ui/SectionHeader'
import type { TranslationDict } from '../../i18n/translations'

interface Props { t: TranslationDict }

export function About({ t }: Props) {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title={t.about.sectionTitle} />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Collage photo */}
          <ScrollReveal direction="right">
            <div className="relative isolate mx-auto max-w-sm md:max-w-none">
              <div className="relative z-10 aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center gap-3">
                {/* Replace src below with your collage photo path, e.g. src="/collage.jpg" */}
                <img
                  src="/about-collage.png"
                  alt="Photo collage"
                  className="w-full h-full object-cover"
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex' }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ display: 'none' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 dark:text-gray-500">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                  <span className="text-sm text-gray-400 dark:text-gray-500 font-medium px-4 text-center">Add /public/about-collage.png</span>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-accent-100 dark:bg-accent-900/30 -z-10" />
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-violet-100 dark:bg-violet-900/20 -z-10" />
            </div>
          </ScrollReveal>

          {/* Text */}
          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">{t.about.p1}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">{t.about.p2}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">{t.about.p3}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  { label: 'Sikri AS', color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50' },
                  { label: 'Learnlab', color: 'bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800/50' },
                  { label: 'UiA INDØK', color: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50' },
                ].map(item => (
                  <span key={item.label} className={`px-3 py-1.5 rounded-full text-sm font-medium border ${item.color}`}>
                    {item.label}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
