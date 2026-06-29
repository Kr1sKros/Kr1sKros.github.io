import { motion, useAnimationFrame, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import type { Hobby } from '../../types'
import type { TranslationDict } from '../../i18n/translations'

interface Props {
  hobby: Hobby
  t: TranslationDict
  index: number
}

function GuitarWave() {
  const points = useRef<number[]>(Array.from({ length: 40 }, (_, i) => i))
  const [path, setPath] = useState('')
  const timeRef = useRef(0)

  useAnimationFrame((t) => {
    timeRef.current = t
    const pts = points.current.map(i => {
      const x = (i / 39) * 180
      const y = 30 + Math.sin((i / 39) * Math.PI * 4 + t * 0.003) * (8 + Math.sin(t * 0.001) * 5)
      return `${x},${y}`
    })
    setPath(`M ${pts.join(' L ')}`)
  })

  return (
    <div className="opacity-70" style={{ width: 'calc(100% + 3rem)', marginLeft: '-1.5rem' }}>
      <svg width="100%" height="60" viewBox="0 0 180 60">
        <path d={path} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function BicepCurl() {
  const svgRef = useRef<SVGSVGElement>(null)
  const forearmRef = useRef<SVGGElement>(null)
  const bicepRef = useRef<SVGEllipseElement>(null)
  const startRef = useRef<number | null>(null)
  const wasInView = useRef(false)
  const inView = useInView(svgRef)

  const EX = 90, EY = 30, FL = 18

  useAnimationFrame((t) => {
    if (!inView) {
      if (wasInView.current) {
        wasInView.current = false
        startRef.current = null
        forearmRef.current?.setAttribute('transform', `rotate(0,${EX},${EY})`)
        if (bicepRef.current) {
          bicepRef.current.setAttribute('ry', '8')
          bicepRef.current.setAttribute('cy', String(EY - 13))
        }
      }
      return
    }
    if (!wasInView.current) { startRef.current = t; wasInView.current = true }

    const p = ((t - startRef.current!) % 3000) / 3000
    const KT = [0, 0.12, 0.42, 0.62, 1]
    const KA = [0, 0, 118, 118, 0]
    const KB = [8, 8, 13, 13, 8]
    const eases = [
      (x: number) => x,
      (x: number) => 1 - (1 - x) * (1 - x),
      (x: number) => x,
      (x: number) => x * x,
    ]

    let seg = KT.length - 2
    for (let i = 0; i < KT.length - 1; i++) { if (p < KT[i + 1]) { seg = i; break } }
    const sp = (p - KT[seg]) / (KT[seg + 1] - KT[seg])
    const e = eases[seg](sp)
    const angle = KA[seg] + e * (KA[seg + 1] - KA[seg])
    const ry = KB[seg] + e * (KB[seg + 1] - KB[seg])

    forearmRef.current?.setAttribute('transform', `rotate(${angle.toFixed(2)},${EX},${EY})`)
    if (bicepRef.current) {
      bicepRef.current.setAttribute('ry', ry.toFixed(2))
      bicepRef.current.setAttribute('cy', ((EY - 13) - (ry - 8) * 0.4).toFixed(2))
    }
  })

  return (
    <svg ref={svgRef} width="180" height="60" viewBox="0 0 180 60" className="opacity-80">
      {/* Shoulder */}
      <circle cx={EX} cy={5} r="5" fill="currentColor" />
      {/* Upper arm */}
      <rect x={EX - 5} y="5" width="10" height={EY - 5} rx="5" fill="currentColor" opacity="0.75" />
      {/* Bicep muscle — bulges during curl */}
      <ellipse ref={bicepRef} cx={EX} cy={EY - 13} rx="7" ry="8" fill="currentColor" />
      {/* Elbow */}
      <circle cx={EX} cy={EY} r="5" fill="currentColor" />
      {/* Forearm + dumbbell — rotates around elbow (EX, EY) */}
      <g ref={forearmRef}>
        <rect x={EX - 4} y={EY} width="8" height={FL} rx="4" fill="currentColor" opacity="0.85" />
        {/* Dumbbell handle */}
        <rect x={EX - 3} y={EY + FL} width="6" height="7" rx="2" fill="currentColor" />
        {/* Left plates */}
        <rect x={EX - 10} y={EY + FL + 1} width="7" height="5" rx="1.5" fill="currentColor" opacity="0.85" />
        <rect x={EX - 14} y={EY + FL + 2} width="4" height="3" rx="1" fill="currentColor" opacity="0.65" />
        {/* Right plates */}
        <rect x={EX + 3} y={EY + FL + 1} width="7" height="5" rx="1.5" fill="currentColor" opacity="0.85" />
        <rect x={EX + 10} y={EY + FL + 2} width="4" height="3" rx="1" fill="currentColor" opacity="0.65" />
      </g>
    </svg>
  )
}

const FRONT_WHEEL = { cx: 585, cy: 521, r: 118 } as const
const REAR_WHEEL = { cx: 143, cy: 521, r: 116 } as const
const BIKER_SPOKES = 8
const BIKER_WHEEL_SPEED = 0.5
const ROAD_DASH_SPEED = 1.03  // viewBox px per ms — matches wheel surface speed
const ROAD_DASH_PERIOD = 85    // strokeDasharray 50 + 35

function BikerWithWheels() {
  const containerRef = useRef<HTMLDivElement>(null)
  const frontRef = useRef<SVGGElement>(null)
  const rearRef = useRef<SVGGElement>(null)
  const dashLineRef = useRef<SVGLineElement>(null)
  const rotRef = useRef(0)
  const dashRef = useRef(0)
  const inView = useInView(containerRef)
  const wasInView = useRef(false)

  useAnimationFrame((_t, delta) => {
    if (!inView) {
      if (wasInView.current) {
        wasInView.current = false
        rotRef.current = 0
        dashRef.current = 0
        frontRef.current?.setAttribute('transform', `rotate(0, ${FRONT_WHEEL.cx}, ${FRONT_WHEEL.cy})`)
        rearRef.current?.setAttribute('transform', `rotate(0, ${REAR_WHEEL.cx}, ${REAR_WHEEL.cy})`)
        dashLineRef.current?.setAttribute('stroke-dashoffset', '0')
      }
      return
    }
    wasInView.current = true
    rotRef.current = (rotRef.current + BIKER_WHEEL_SPEED * delta) % 360
    dashRef.current = (dashRef.current + ROAD_DASH_SPEED * delta) % ROAD_DASH_PERIOD
    const r = rotRef.current.toFixed(2)
    frontRef.current?.setAttribute('transform', `rotate(${r}, ${FRONT_WHEEL.cx}, ${FRONT_WHEEL.cy})`)
    rearRef.current?.setAttribute('transform', `rotate(${r}, ${REAR_WHEEL.cx}, ${REAR_WHEEL.cy})`)
    dashLineRef.current?.setAttribute('stroke-dashoffset', dashRef.current.toFixed(2))
  })

  const renderSpokes = (cx: number, cy: number, r: number) =>
    Array.from({ length: BIKER_SPOKES }, (_, i) => {
      const a = (i * 360 / BIKER_SPOKES) * Math.PI / 180
      return <line key={i} x1={cx} y1={cy} x2={cx + (r - 6) * Math.cos(a)} y2={cy + (r - 6) * Math.sin(a)} stroke="currentColor" strokeWidth="3" />
    })

  return (
    <div ref={containerRef} className="w-[82%] mx-auto opacity-80">
      <svg width="100%" viewBox="-434 0 1601 760" style={{ display: 'block' }}>
        <g transform="rotate(15, 364, 521)">
        <path fill="currentColor" fillRule="evenodd" d="M572 16L554 6L526 0L501 1L466 10L455 15L450 22L457 31L478 48L479 59L474 71L446 61L415 56L387 56L356 61L313 75L286 88L259 106L238 127L218 154L211 169L208 181L208 206L211 219L181 219L175 221L172 228L176 235L187 243L223 258L230 269L251 340L250 351L220 395L198 384L160 375L123 376L87 386L59 402L37 422L21 444L9 469L3 489L0 510L1 540L5 559L14 583L23 599L51 632L75 649L99 660L131 667L162 667L199 658L234 638L258 615L273 593L281 576L308 595L339 599L350 613L356 616L409 608L412 604L411 594L407 590L382 579L373 572L377 559L377 544L372 523L473 404L501 375L507 383L509 395L488 411L468 433L450 465L441 497L440 535L443 554L451 579L469 610L494 636L515 650L547 663L574 668L611 666L643 656L668 642L694 619L710 597L721 575L728 552L731 532L731 512L726 482L711 446L697 426L679 408L659 394L638 384L598 375L573 375L539 381L530 364L516 319L504 292L512 288L545 283L570 285L580 292L582 305L575 319L564 327L538 335L540 346L547 349L568 345L580 339L592 329L601 313L604 289L613 282L618 284L620 303L625 319L628 323L635 325L631 290L632 270L634 266L653 251L659 240L659 232L649 222L630 214L622 214L592 222L565 222L512 214L508 211L494 169L486 124L493 131L511 128L520 131L532 140L538 140L571 113L574 90L592 80L595 65L590 39L583 27Z M581 400L603 401L620 405L642 415L658 426L677 445L688 461L699 487L703 507L703 534L698 557L689 578L677 596L665 609L644 625L625 634L597 641L573 641L556 638L531 628L508 612L492 595L478 572L472 556L467 529L469 497L479 468L495 444L518 422L579 531L589 534L596 529L596 519L570 472L546 409L558 404Z M125 401L158 400L185 407L203 417L158 488L149 495L133 498L125 505L121 514L121 527L125 536L137 545L148 546L168 536L177 534L259 552L254 569L245 586L219 615L188 633L161 640L139 641L115 637L101 632L75 617L58 601L43 580L36 565L29 539L28 510L30 496L37 473L50 450L68 430L85 417L100 409Z M486 337L487 342L468 367L356 492L382 369L377 370L338 398L328 410L326 419L327 436L333 455L341 468L341 477L324 456L317 440L315 418L317 408L321 402L352 373L398 341L409 339L428 340L463 335Z M339 187L349 182L408 172L435 163L454 212L473 248L484 256L516 259L523 262L514 267L483 272L478 275L477 284L483 298L483 306L481 308L463 313L434 315L431 313L440 300L447 283L446 271L441 261L424 244L400 225L347 194Z M220 430L239 447L256 476L263 503L264 526L262 528L188 518L175 513L170 508L174 497Z M256 270L283 312L294 325L293 328L283 332L273 329L261 296L255 273Z M310 350L311 352L304 361L288 375L282 364L281 353L294 350Z M260 374L264 385L262 393L249 406L241 408L239 403L243 395Z M373 287L349 304L332 320L330 319L333 313L349 297L351 283L364 283Z M279 455L285 460L290 472L297 500L295 509Z M560 262L573 256L586 256L596 260L587 266L572 266Z" />
        <g ref={rearRef}>
          {renderSpokes(REAR_WHEEL.cx, REAR_WHEEL.cy, REAR_WHEEL.r)}
          <circle cx={REAR_WHEEL.cx} cy={REAR_WHEEL.cy} r="12" fill="currentColor" />
        </g>
        <g ref={frontRef}>
          {renderSpokes(FRONT_WHEEL.cx, FRONT_WHEEL.cy, FRONT_WHEEL.r)}
          <circle cx={FRONT_WHEEL.cx} cy={FRONT_WHEEL.cy} r="12" fill="currentColor" />
        </g>
        {/* Road */}
        <line x1="-434" y1="648" x2="1167" y2="648" stroke="currentColor" strokeWidth="6" opacity="0.55" />
        <line x1="-434" y1="722" x2="1167" y2="722" stroke="currentColor" strokeWidth="6" opacity="0.55" />
        <line ref={dashLineRef} x1="-434" y1="685" x2="1167" y2="685" stroke="currentColor" strokeWidth="4" strokeDasharray="50 35" strokeDashoffset="0" opacity="0.9" />
        </g>
      </svg>
    </div>
  )
}

function ColorPalette({ onColorHover }: { onColorHover: (color: string | null) => void }) {
  const colors = ['#f59e0b', '#ef4444', '#3b82f6', '#10b981', '#8b5cf6', '#ec4899']
  return (
    <div className="flex gap-2">
      {colors.map((c, i) => (
        <motion.div
          key={c}
          className="w-7 h-7 rounded-full cursor-pointer"
          style={{ backgroundColor: c }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08, type: 'spring', stiffness: 300 }}
          whileHover={{ scale: 1.3, y: -4 }}
          onHoverStart={() => onColorHover(c)}
          onHoverEnd={() => onColorHover(null)}
        />
      ))}
    </div>
  )
}

const ANIMATIONS: Record<string, React.ReactNode> = {}

export function HobbyCard({ hobby, t, index }: Props) {
  void ANIMATIONS
  const [activeColor, setActiveColor] = useState<string | null>(null)

  const getTitle = () => {
    const k = hobby.id as 'guitar' | 'weightlifting' | 'cycling' | 'design'
    return t.hobbies[k]?.title ?? hobby.titleKey
  }
  const getDescription = () => {
    const k = hobby.id as 'guitar' | 'weightlifting' | 'cycling' | 'design'
    return t.hobbies[k]?.description ?? hobby.descriptionKey
  }

  const renderVisual = () => {
    switch (hobby.id) {
      case 'guitar': return <GuitarWave />
      case 'weightlifting': return <BicepCurl />
      case 'cycling': return <BikerWithWheels />
      case 'design': return <ColorPalette onColorHover={setActiveColor} />
      default: return null
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`relative rounded-2xl p-6 bg-gradient-to-br ${hobby.gradient} text-white overflow-hidden cursor-default`}
      style={activeColor ? { background: activeColor, transition: 'background 0.4s ease' } : { transition: 'background 0.4s ease' }}
    >
      {/* Background circle */}
      <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-white/10" />
      <div className="absolute -right-4 -bottom-8 w-24 h-24 rounded-full bg-white/5" />

      <div className="relative z-10">
        <div className="text-3xl mb-4">{hobby.icon}</div>
        <h3 className="text-xl font-bold mb-2">{getTitle()}</h3>
        <p className="text-sm text-white/80 leading-relaxed mb-5">{getDescription()}</p>

        {/* Visual animation */}
        <div className="mb-5 min-h-[60px] flex items-center">
          {renderVisual()}
        </div>

        {/* Trait tags */}
        <div className="flex flex-wrap gap-1.5">
          {hobby.traits.map(trait => (
            <span key={trait} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/20 text-white">
              {trait}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
