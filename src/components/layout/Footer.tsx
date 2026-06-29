import type { TranslationDict } from '../../i18n/translations'

interface Props { t: TranslationDict }

export function Footer({ t }: Props) {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 dark:text-gray-500">
          © {year} Krzysztof Manczak. {t.footer.rights}
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500">
          {t.footer.built}
        </p>
      </div>
    </footer>
  )
}
