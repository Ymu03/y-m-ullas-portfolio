import { projects, socialLinks } from '../data/portfolioData'

/**
 * GitHub Icon component
 */
function GitHubIcon() {
  return (
    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

/**
 * External Link Icon component
 */
function ExternalLinkIcon() {
  return (
    <svg
      className="w-4 h-4 fill-none stroke-current shrink-0"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  )
}

/**
 * ProjectCard component
 * Individual project showcase card with subtle gradient borders, tags, and action buttons.
 */
function ProjectCard({ project, aosDelay }) {
  const isDemoAvailable = Boolean(project.links?.demo && project.links.demo.trim() !== '')

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl transition-all duration-300 ${
        project.isFlagship
          ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:via-white/20 hover:to-red-500/60'
          : 'bg-white/10 hover:bg-white/20'
      }`}
    >
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 h-full flex flex-col justify-between">
        <div>
          {/* Optional Badge */}
          {project.badge && (
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest">
                {project.badge}
              </span>
            </div>
          )}

          {/* Number and Title */}
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-4xl md:text-5xl font-black text-white/10 font-serif italic select-none">
              {project.number}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-white/60 text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Tag Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-bold hover:bg-[#ff2a2a]/20 hover:border-[#ff2a2a]/40 hover:text-white transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          {/* GitHub Action */}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-white font-semibold text-sm hover:bg-white/20 transition-all duration-200"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          )}

          {/* Demo Action */}
          {isDemoAvailable ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white font-semibold text-sm hover:bg-[#e02020] shadow-md shadow-[#ff2a2a]/20 transition-all duration-200"
            >
              <ExternalLinkIcon />
              <span>Live Demo</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-800/60 border border-neutral-700/50 text-neutral-500 font-semibold text-sm cursor-not-allowed select-none">
              <ExternalLinkIcon />
              <span>Demo Coming Soon</span>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * Projects Section component
 * Displays full-stack projects with flagship highlights and link to external repositories.
 */
function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Header */}
      <div
        data-aos="fade-up"
        className="text-center max-w-2xl mx-auto mb-16 relative z-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest mb-4">
          Featured Projects
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight mb-4">
          Work that speaks for itself
        </h2>
        <p className="text-white/50 text-sm md:text-base leading-relaxed">
          Production-grade applications and systems engineered with modern technologies and clean architecture.
        </p>
      </div>

      {/* Projects Cards List */}
      <div className="max-w-5xl mx-auto flex flex-col gap-6 md:gap-8 relative z-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            aosDelay={(index + 1) * 100}
          />
        ))}
      </div>

      {/* Explore All Repositories CTA */}
      {socialLinks.github && (
        <div className="text-center mt-14 relative z-10" data-aos="fade-up">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-white font-semibold text-sm backdrop-blur-md hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            <GitHubIcon />
            <span>Explore All My Repositories</span>
            <svg
              className="w-4 h-4"
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
          </a>
        </div>
      )}
    </section>
  )
}

export default Projects
