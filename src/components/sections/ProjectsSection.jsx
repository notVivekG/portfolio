import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import SectionHeading from '../SectionHeading'
import { sectionVariants, itemVariants } from '../../utils/motion'
import { projects } from '../../constants/data'

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      className="space-y-9 sm:space-y-10"
    >
      <SectionHeading
        label="Projects"
        title="Selected work engineered for impact and usability."
        description="Each build reflects a product-first mindset with modern frontend architecture, maintainable code, and purposeful UX."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={itemVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className="group glass-card flex h-full flex-col rounded-3xl p-5 sm:p-6"
          >
            {project.status && (
              <motion.span
                className="mb-3 inline-flex w-fit items-center rounded-full border border-violet-300/45 bg-violet-500/15 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-violet-100"
                animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.03, 1] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                {project.status}
              </motion.span>
            )}
            <h3 className="font-heading text-[1.55rem] font-semibold leading-tight text-white">
              {project.title}
            </h3>
            <p className="mt-3.5 text-sm leading-7 text-slate-300">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub`}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-slate-100 transition-all duration-300 hover:border-cyan-300 hover:text-cyan-300"
              >
                <FaGithub />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-slate-100 transition-all duration-300 hover:border-violet-300 hover:text-violet-300"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
