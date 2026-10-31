import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { personalInfo } from '../data/portfolioData'

/**
 * Preloader component
 * Fullscreen brand preloader featuring a vertical water-fill text reveal
 * followed by an upward sliding shutter exit transition.
 */
function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center select-none"
        >
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
            className="relative text-5xl md:text-7xl font-black tracking-tighter"
          >
            {/* Background Base Text (Faint Red) */}
            <span className="text-red-900/30">
              {personalInfo.brandName}
              <span>.</span>
            </span>

            {/* Foreground Animated Water-Fill Layer */}
            <motion.span
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.2 }}
              className="absolute inset-0 text-white"
            >
              {personalInfo.brandName}
              <span className="text-black">.</span>
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader
