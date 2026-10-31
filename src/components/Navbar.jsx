import { useState } from 'react'
import { personalInfo } from '../data/portfolioData'

/**
 * Navbar component
 * Sticky top navigation bar with smooth anchor links and mobile drawer.
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Process', href: '#process' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a
            href="#home"
            className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-[#ff2a2a] transition-colors"
          >
            {personalInfo.brandName}
            <span className="text-[#ff2a2a]">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-300 hover:text-[#ff2a2a] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download
              className="px-4 py-2 text-sm font-semibold text-white bg-[#ff2a2a] hover:bg-[#e02020] rounded-full transition-all shadow-md shadow-[#ff2a2a]/20"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-neutral-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-[#ff2a2a] hover:bg-neutral-900 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            download
            onClick={closeMenu}
            className="block w-full text-center mt-3 px-4 py-2 text-sm font-semibold text-white bg-[#ff2a2a] hover:bg-[#e02020] rounded-full transition-all shadow-md shadow-[#ff2a2a]/20"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
