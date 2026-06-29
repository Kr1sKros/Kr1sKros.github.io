import { ScrollReveal } from './ScrollReveal'

interface Props {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ title, subtitle, centered = true }: Props) {
  return (
    <div className={centered ? 'text-center mb-16' : 'mb-16'}>
      <ScrollReveal>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </ScrollReveal>
    </div>
  )
}
