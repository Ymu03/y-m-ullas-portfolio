import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

/**
 * Contact component
 * High-impact contact section featuring parallax background typography,
 * responsive form handling with EmailJS and mailto fallbacks, and dynamic submission feedback.
 */
function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const form = formRef.current
    const firstName = form.firstName.value.trim()
    const lastName = form.lastName.value.trim()
    const email = form.email.value.trim()
    const message = form.message.value.trim()

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured = Boolean(
      serviceId &&
        templateId &&
        publicKey &&
        serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
        templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
        publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY',
    )

    if (!isConfigured) {
      const subject = encodeURIComponent(
        `Portfolio Contact from ${firstName} ${lastName}`.trim(),
      )
      const body = encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
      )
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=${subject}&body=${body}`,
        '_blank',
      )
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Parallax Giant Background Typography */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/[0.04]"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Front Red Contact Card */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto rounded-tl-3xl shadow-2xl relative z-10"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between pb-8 border-b border-white/20 mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-white/90">
            Reach Me
          </span>
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-white text-xs font-semibold hover:bg-white hover:text-[#ff2a2a] transition-all duration-200"
            >
              DM on Instagram
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12"
        >
          {/* Form Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Inputs */}
            <div className="flex flex-col gap-8">
              <input
                id="firstName"
                name="first_name"
                type="text"
                required
                placeholder="First Name *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
              />
              <input
                id="lastName"
                name="last_name"
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
              />
              <input
                id="email"
                name="user_email"
                type="email"
                required
                placeholder="Email Address *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>

            {/* Right Textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your Message *"
                className="bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors resize-none min-h-[140px] h-full"
              />
            </div>
          </div>

          {/* Bottom Controls & Notes */}
          <div className="space-y-6 pt-4 border-t border-white/20">
            {/* Permission Checkbox */}
            <label className="flex items-center gap-3 text-sm text-white/90 cursor-pointer select-none">
              <input
                type="checkbox"
                required
                className="w-4 h-4 accent-black rounded cursor-pointer"
              />
              <span>
                I agree that my submitted information will be used to respond to
                my inquiry.
              </span>
            </label>

            {/* Response Time Note */}
            <p className="text-xs text-white/70 leading-relaxed">
              Your message will be sent directly to my inbox. I typically
              respond within 24-48 hours.
            </p>

            {/* Urgent Email Fallback */}
            <p className="text-xs text-white/80">
              Urgent inquiry? Email me directly at{' '}
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="underline font-bold hover:text-white"
              >
                {personalInfo.emails.primary}
              </a>
            </p>

            {/* Dynamic Status Submit Button */}
            <div>
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-white/20 border-2 border-white/30 text-white/80 font-bold text-base cursor-not-allowed inline-flex items-center gap-3"
                >
                  <svg
                    className="animate-spin w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="px-8 py-4 rounded-full bg-emerald-600 border-2 border-emerald-500 text-white font-bold text-base inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-8 py-4 rounded-full bg-red-950 border-2 border-red-800 text-red-200 font-bold text-base inline-flex items-center gap-2 shadow-lg"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group px-8 py-4 rounded-full border-2 border-white text-white font-bold text-base hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 inline-flex items-center gap-3 cursor-pointer"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
