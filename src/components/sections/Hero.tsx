import { motion, useReducedMotion } from 'framer-motion'
import { useMousePosition } from '../../hooks/useMousePosition'
import type { TranslationDict } from '../../i18n/translations'

interface Props { t: TranslationDict }

const ORB_CONFIG = [
  { size: 600, x: '60%', y: '-10%', color: 'bg-accent-400', opacity: 0.15, delay: 0 },
  { size: 500, x: '-5%', y: '40%', color: 'bg-violet-400', opacity: 0.12, delay: 2 },
  { size: 400, x: '80%', y: '60%', color: 'bg-blue-400', opacity: 0.1, delay: 4 },
  { size: 300, x: '30%', y: '80%', color: 'bg-pink-400', opacity: 0.08, delay: 1 },
]

function FloatingOrbs({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const shouldReduce = useReducedMotion()
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {ORB_CONFIG.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.color} blur-3xl`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            opacity: orb.opacity,
          }}
          animate={shouldReduce ? {} : {
            x: mouseX * (12 + i * 4),
            y: mouseY * (10 + i * 3),
          }}
          transition={{ type: 'spring', stiffness: 30, damping: 20, delay: orb.delay * 0.1 }}
        >
          <motion.div
            className="w-full h-full rounded-full"
            animate={shouldReduce ? {} : {
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: orb.delay,
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.12 } } },
  item: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
}

export function Hero({ t }: Props) {
  const { normalized } = useMousePosition()

  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950"
    >
      <FloatingOrbs mouseX={normalized.x} mouseY={normalized.y} />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          color: 'rgb(100 116 139)',
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
        <motion.div
          variants={stagger.container}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left: text content */}
          <div>
            {/* Name */}
            <motion.div variants={stagger.item}>
              <p className="text-lg font-medium text-gray-500 dark:text-gray-400 mb-2">{t.hero.greeting}</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-gray-900 dark:text-white mb-6 leading-none">
                Krzysztof
                <br />
                <span className="bg-gradient-to-r from-accent-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">
                  Manczak
                </span>
              </h1>
            </motion.div>

            {/* Title */}
            <motion.div variants={stagger.item}>
              <p className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4 leading-snug">
                {t.hero.title}
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={stagger.item}>
              <p className="text-base sm:text-lg text-gray-400 dark:text-gray-500 mb-10 leading-relaxed">
                {t.hero.subtitle}
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={stagger.item} className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleScrollTo('#projects')}
                className="px-7 py-3.5 rounded-2xl bg-accent-600 hover:bg-accent-700 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-accent-500/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                {t.hero.cta.projects}
              </button>
              <button
                onClick={() => handleScrollTo('#contact')}
                className="px-7 py-3.5 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold text-sm border border-gray-300 dark:border-transparent transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                {t.hero.cta.contact}
              </button>
              <a
                href="/cv.pdf"
                download
                className="px-7 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 hover:border-accent-400 dark:hover:border-accent-500 text-gray-700 dark:text-gray-300 font-semibold text-sm transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                {t.hero.cta.cv}
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div variants={stagger.item} className="mt-16 hidden lg:flex">
              <motion.button
                onClick={() => handleScrollTo('#about')}
                aria-label="Scroll to About"
                className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </motion.button>
            </motion.div>
          </div>

          {/* Right: portrait photo */}
          <motion.div variants={stagger.item} className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative isolate">
              {/* Decorative accents */}
              <div className="absolute -bottom-4 -right-4 w-36 h-36 rounded-2xl bg-accent-100 dark:bg-accent-900/30 -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl bg-violet-100 dark:bg-violet-900/20 -z-10" />

              <div className="relative z-10 aspect-[3/4] rounded-3xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-300 dark:from-slate-600 dark:to-slate-900 border border-white/60 dark:border-white/10 shadow-2xl shadow-violet-500/20 dark:shadow-violet-500/30 flex flex-col items-center justify-center gap-3">
                {/* Replace src below with your actual photo path, e.g. src="/photo.jpg" */}
                <img
                  src="/hero-photo.png"
                  alt="Krzysztof Manczak"
                  className="w-full h-full object-cover"
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex' }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ display: 'none' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 dark:text-gray-500">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="text-sm text-gray-400 dark:text-gray-500 font-medium px-4 text-center">Add /public/hero-photo.png</span>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute z-20 -bottom-3 -left-3 sm:bottom-6 sm:left-6 bg-white dark:bg-gray-900 rounded-2xl px-4 py-2.5 shadow-lg border border-gray-100 dark:border-gray-800">
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">Based in</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Kristiansand, Norway</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile scroll indicator */}
        <motion.div
          variants={stagger.item}
          initial="initial"
          animate="animate"
          className="mt-12 flex justify-center lg:hidden"
        >
          <motion.button
            onClick={() => handleScrollTo('#about')}
            aria-label="Scroll to About"
            className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
