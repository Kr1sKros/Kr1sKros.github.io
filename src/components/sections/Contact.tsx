import { motion } from 'framer-motion'
import { ScrollReveal } from '../ui/ScrollReveal'
import { SectionHeader } from '../ui/SectionHeader'
import type { TranslationDict } from '../../i18n/translations'

interface Props { t: TranslationDict }

const PLACEHOLDER_EMAIL = 'kris.manczak@gmail.com'
const PLACEHOLDER_GITHUB = 'https://github.com/kr1skros'
const PLACEHOLDER_LINKEDIN = 'https://www.linkedin.com/in/krzysztof-manczak'

export function Contact({ t }: Props) {
  const mailtoLink = `mailto:${PLACEHOLDER_EMAIL}?subject=Hello%20from%20your%20portfolio&body=Hi%20Krzysztof%2C%0A%0A`

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title={t.contact.sectionTitle} subtitle={t.contact.subtitle} />

        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="text-base text-gray-500 dark:text-gray-400">{t.contact.openTo}</p>
            </div>
          </ScrollReveal>

          {/* Contact links */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: t.contact.email,
                value: PLACEHOLDER_EMAIL,
                href: mailtoLink,
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
              },
              {
                label: t.contact.github,
                value: 'github.com/kr1skros',
                href: PLACEHOLDER_GITHUB,
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.138 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                ),
              },
              {
                label: t.contact.linkedin,
                value: 'linkedin.com/in/krzysztof-manczak',
                href: PLACEHOLDER_LINKEDIN,
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                ),
              },
            ].map(item => (
              <ScrollReveal key={item.label}>
                <motion.a
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-accent-300 dark:hover:border-accent-700 hover:shadow-md transition-all text-center group"
                >
                  <span className="text-gray-400 dark:text-gray-500 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{item.value}</p>
                  </div>
                </motion.a>
              </ScrollReveal>
            ))}
          </div>

          {/* Visual mailto CTA */}
          <ScrollReveal>
            <div className="rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 text-center">
              <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">{t.contact.formNote}</p>
              <motion.a
                href={mailtoLink}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent-600 hover:bg-accent-700 text-white font-semibold text-sm transition-colors shadow-lg shadow-accent-500/20"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
                {t.contact.send}
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
