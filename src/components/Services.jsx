import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import { useRef, useState } from 'react'
import { skillsContent } from '../data/portfolioData'

/**
 * TagCard component
 * Hanging-tag process card with punch hole, dynamic active state responding to scroll path,
 * and responsive tilt styling.
 */
function TagCard({
  number,
  title,
  text,
  className,
  aosDelay,
  aosType,
  pathLength,
  containerRef,
}) {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!cardRef.current || !containerRef.current) return
    const containerRect = containerRef.current.getBoundingClientRect()
    const cardRect = cardRef.current.getBoundingClientRect()
    const cardTopRelativeToContainer = cardRect.top - containerRect.top
    const containerHeight = containerRect.height
    const progressPixels = latest * containerHeight
    setIsActive(progressPixels >= cardTopRelativeToContainer + 50)
  })

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 relative transition-all duration-700 ${
        isActive
          ? 'bg-[#ff2a2a] shadow-[0_15px_35px_rgba(255,42,42,0.35)] text-white'
          : 'bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-gray-200 text-gray-900'
      } ${className}`}
    >
      {/* Small punched hole circle at the top */}
      <div className="w-4 h-4 rounded-full bg-white border border-gray-300 mx-auto mt-2 shadow-inner" />

      {/* Inner panel */}
      <div
        className={`mt-8 p-8 min-h-[220px] rounded-[1.5rem] flex flex-col justify-between transition-colors duration-700 ${
          isActive ? 'bg-red-700/50 text-white' : 'bg-[#f4f4f4] text-gray-600'
        }`}
      >
        <div>
          <span
            className={`text-4xl font-serif italic mb-2 block select-none ${
              isActive ? 'text-white/40' : 'text-black/20'
            }`}
          >
            {number}
          </span>
          <h3
            className={`text-2xl font-black mb-3 ${
              isActive ? 'text-white' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
        </div>
        <p
          className={`text-sm leading-relaxed ${
            isActive ? 'text-red-50' : 'text-gray-600'
          }`}
        >
          {text}
        </p>
      </div>
    </div>
  )
}

/**
 * Services (Process) component
 * Interactive, scroll-linked engineering process timeline with SVG drawing line,
 * positioned hanging tags, and hand-drawn accents.
 */
function Services() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  const cardConfigs = [
    {
      className:
        'md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className:
        'md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className:
        'md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className:
        'md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  const desktopDPath =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-100 border border-red-200 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest mb-4">
            {skillsContent.badge}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1] mb-4">
            {skillsContent.heading}
            <svg
              className="w-8 h-8 inline-block ml-3 stroke-black fill-none stroke-[2] -rotate-12 translate-y-1"
              viewBox="0 0 20 20"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-2">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop Three-Layer SVG Path */}
        <svg
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
        >
          {/* Layer 1: Faint Guide Path */}
          <path
            d={desktopDPath}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="8 10"
          />

          {/* Layer 2: Mask with Animated Motion Path */}
          <mask id="path-mask">
            <motion.path
              d={desktopDPath}
              fill="none"
              stroke="white"
              strokeWidth={20}
              style={{ pathLength }}
            />
          </mask>

          {/* Layer 3: Real Dashed Path revealed by mask */}
          <path
            d={desktopDPath}
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile Three-Layer Straight Vertical SVG */}
        <svg
          viewBox="0 0 4 100"
          className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
        >
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="4 6"
            vectorEffect="non-scaling-stroke"
          />
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              fill="none"
              stroke="white"
              strokeWidth={10}
              style={{ pathLength }}
              vectorEffect="non-scaling-stroke"
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, idx) => (
            <TagCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              className={cardConfigs[idx]?.className || ''}
              aosType={cardConfigs[idx]?.aosType || 'fade-up'}
              aosDelay={cardConfigs[idx]?.aosDelay || 100}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}
        </div>

        {/* Hand-written End Note (Desktop) */}
        {skillsContent.endText && (
          <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none z-10">
            {skillsContent.endText}
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
