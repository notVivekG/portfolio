import { motion } from 'framer-motion'
import { FaCodeBranch, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import SectionHeading from '../SectionHeading'
import { sectionVariants, itemVariants } from '../../utils/motion'
import { openSourceContributions } from '../../constants/data'

/**
 * Status badge colour mapping.
 * Add new statuses here — no component logic needs to change.
 */
const STATUS_STYLES = {
  'Under Review': 'border-amber-400/50 bg-amber-500/12 text-amber-200',
  'Merged':       'border-emerald-400/50 bg-emerald-500/12 text-emerald-200',
  'Closed':       'border-red-400/45 bg-red-500/12 text-red-300',
}

export default function OpenSourceSection() {
  return (
    <motion.section
      id="open-source"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      className="space-y-9 sm:space-y-10"
    >
      <SectionHeading
        label="Open Source"
        title="Contributing back to the developer community."
        description="Working on production-grade open-source projects to deepen real-world engineering skills and give back to the ecosystem."
      />

      <div className="flex flex-col gap-6">
        {openSourceContributions.map((contrib) => {
          const statusClass =
            STATUS_STYLES[contrib.status] ??
            'border-white/20 bg-white/5 text-slate-300'

          return (
            <motion.article
              key={contrib.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="group glass-card relative overflow-hidden rounded-3xl p-5 sm:p-8"
            >
              {/* Left accent bar — mirrors the design's cyan→violet gradient motif */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-gradient-to-b from-cyan-300 to-violet-500"
              />

              <div className="flex flex-col gap-7 pl-4 sm:pl-6 lg:flex-row lg:items-start lg:gap-10">
                {/* ── Content ─────────────────────────────────────────── */}
                <div className="min-w-0 flex-1">
                  {/* Title row */}
                  <div className="flex flex-wrap items-center gap-3">
                    <FaGithub className="shrink-0 text-2xl text-slate-200" />
                    <div className="min-w-0">
                      <h3 className="font-heading text-2xl font-semibold leading-tight text-white">
                        {contrib.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-slate-400">{contrib.subtitle}</p>
                    </div>

                    {/* Status badge — driven entirely from data.js */}
                    {contrib.status && (
                      <span
                        className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] ${statusClass}`}
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                        {contrib.status}
                      </span>
                    )}
                  </div>

                  {/* Highlight bullets */}
                  <ul className="mt-5 space-y-3" aria-label="Contribution highlights">
                    {contrib.highlights.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-2.5 text-sm leading-7 text-slate-300"
                      >
                        <FaCodeBranch
                          className="mt-[0.35rem] shrink-0 text-xs text-cyan-300"
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                    {contrib.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── Action buttons ───────────────────────────────────── */}
                <div className="flex shrink-0 flex-row gap-3 lg:flex-col">
                  <a
                    href={contrib.prUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${contrib.title} — view pull request`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-300/80 px-4 py-2.5 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/12 hover:shadow-[0_0_22px_rgba(0,245,255,0.3)]"
                  >
                    <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
                    Pull Request
                  </a>
                  <a
                    href={contrib.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${contrib.title} — view repository`}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/70 hover:bg-white/8"
                  >
                    <FaGithub className="text-sm" aria-hidden="true" />
                    Repository
                  </a>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </motion.section>
  )
}
