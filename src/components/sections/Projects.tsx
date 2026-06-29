import { SectionHeader } from '../ui/SectionHeader'
import { ProjectCard } from '../ui/ProjectCard'
import { projects } from '../../data/projects'
import type { TranslationDict } from '../../i18n/translations'

interface Props { t: TranslationDict }

export function Projects({ t }: Props) {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title={t.projects.sectionTitle} subtitle={t.projects.sectionSubtitle} />
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
