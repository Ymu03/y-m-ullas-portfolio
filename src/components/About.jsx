import { motion } from 'framer-motion'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo } from '../data/portfolioData'

/**
 * About component
 * Vibrant red section featuring a bouncy spring lanyard ID badge,
 * personal bio, decorative stars, and an organic torn-paper bottom divider.
 */
function About() {
  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative 4-point star (top-right) */}
      <div className="absolute top-12 right-12 text-black opacity-30 animate-pulse pointer-events-none">
        <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      {/* Decorative 4-point star (bottom-left) */}
      <div
        className="absolute bottom-44 left-10 text-black opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-20">
        {/* Left: Spring Animated Lanyard ID Badge */}
        <motion.div
          initial={{ y: -300, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            type: 'spring',
            stiffness: 110,
            damping: 9,
            mass: 1.1,
          }}
          className="md:w-[350px] shrink-0 relative w-full flex justify-center"
        >
          {/* Black Lanyard String */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black pointer-events-none" />

          {/* Lanyard Clip and ID Card */}
          <div className="relative pt-6">
            {/* Grey Metal Clip */}
            <div className="w-8 h-4 bg-neutral-400 rounded-sm mx-auto mb-1 relative z-10 shadow" />

            {/* Dark Card */}
            <div className="bg-gray-900 max-w-[280px] rounded-2xl p-3 shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Slot */}
              <div className="w-12 h-2 bg-black rounded-full mx-auto mb-3" />

              {/* Photo inside */}
              <img
                src={stackImage}
                alt={personalInfo.name}
                className="w-full aspect-[3/4] rounded-xl object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* Right: Bio Content */}
        <div data-aos="fade-left" className="flex-1">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* White Torn Paper SVG Divider along bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 md:h-24 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  )
}

export default About
