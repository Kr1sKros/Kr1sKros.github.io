import { SectionHeader } from '../ui/SectionHeader'
import { HobbyCard } from '../ui/HobbyCard'
import { hobbies } from '../../data/hobbies'
import type { TranslationDict } from '../../i18n/translations'

interface Props { t: TranslationDict }

export function Hobbies({ t }: Props) {
  return (
    <section id="hobbies" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title={t.hobbies.sectionTitle} subtitle={t.hobbies.sectionSubtitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {hobbies.map((hobby, i) => (
            <HobbyCard key={hobby.id} hobby={hobby} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
