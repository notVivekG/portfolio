import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import AnimatedName from '../AnimatedName'
import { sectionVariants, itemVariants } from '../../utils/motion'

export default function HomeSection() {
  return (
    <motion.section
      id="home"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.03] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-10 lg:p-12"
    >
      <div className="hero-dot-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative">
          <motion.div
            className="glass-card pointer-events-none absolute -left-8 top-6 -z-10 h-56 w-[92%] rounded-[2rem]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />

          <motion.p
            variants={itemVariants}
            className="mb-6 inline-flex rounded-full border border-violet-400/40 bg-violet-500/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-violet-200"
          >
            Fresher Full Stack Developer & AI Enthusiast
          </motion.p>

          <motion.div variants={itemVariants}>
            <AnimatedName text="Vivek Kushwaha" />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-5 text-base font-medium text-cyan-300 sm:text-lg"
          >
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                1600,
                'AI Enthusiast',
                1600,
                'DSA Practitioner',
                1600,
              ]}
              wrapper="span"
              speed={42}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Building intelligent, beautiful web experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center rounded-xl border border-cyan-300/80 px-6 py-3 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/12 hover:shadow-[0_0_30px_rgba(0,245,255,0.35)]"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/70 hover:bg-white/8"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="glass-card rounded-3xl p-6 sm:p-7">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
            Snapshot
          </p>
          <div className="mt-6 space-y-5">
            <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Degree
              </p>
              <p className="mt-1 text-lg font-semibold text-white">B.Tech CSE</p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Academic Session
              </p>
              <p className="mt-1 text-lg font-semibold text-white">2023 – 2027</p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Institution
              </p>
              <p className="mt-1 text-lg font-semibold text-white">MJPRU Bareilly</p>
            </div>
            <div className="rounded-2xl border border-white/12 bg-gradient-to-r from-cyan-500/18 to-violet-500/20 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-100">
                Focus
              </p>
              <p className="mt-1 text-lg font-semibold text-white">
                Full Stack + AI Product Building
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
