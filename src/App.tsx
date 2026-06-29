import { useTheme } from './hooks/useTheme'
import { useLanguage } from './hooks/useLanguage'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Hobbies } from './components/sections/Hobbies'
import { Contact } from './components/sections/Contact'

export default function App() {
  const { theme, toggle } = useTheme()
  const { language, setLang, t } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar
        theme={theme}
        onToggleTheme={toggle}
        language={language}
        onSetLang={setLang}
        t={t}
      />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Hobbies t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}
