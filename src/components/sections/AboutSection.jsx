import { motion } from 'framer-motion'
import { SiFlask } from 'react-icons/si'
import SectionHeading from '../SectionHeading'
import { sectionVariants, itemVariants } from '../../utils/motion'
import { aboutSkillProgress } from '../../constants/data'

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      className="space-y-9 sm:space-y-10"
    >
      <SectionHeading
        label="About"
        title="Building where engineering precision meets product taste."
        description="I’m focused on creating performant, maintainable interfaces and backend flows that feel effortless to users."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div variants={itemVariants} className="glass-card rounded-3xl p-7 sm:p-8">
          <h3 className="font-heading text-2xl font-semibold text-white">
            Profile
          </h3>
          <div className="mt-6 space-y-4 text-sm">
            {[
              ['Name', 'Vivek Kushwaha'],
              ['Role', 'Fresher Full Stack Developer & AI Enthusiast'],
              ['Degree', 'B.Tech CSE'],
              ['Duration', '2023 – 2027'],
              ['University', 'MJPRU Bareilly'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex flex-col gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  {label}
                </span>
                <span className="font-medium text-slate-100">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="glass-card flex items-center rounded-3xl p-7 sm:p-8"
        >
          <p className="text-base leading-8 text-slate-200 sm:text-lg">
            I&apos;m a third-year CS student passionate about bridging AI and
            full stack development. I love building products that are fast,
            functional, and beautiful.
          </p>
        </motion.div>
      </div>
      <motion.div variants={itemVariants} className="glass-card rounded-3xl p-7 sm:p-8">
        <div className="mb-6 flex items-center justify-between gap-3">
          <h3 className="font-heading text-2xl font-semibold text-white">
            Core Technical Stack
          </h3>
          <SiFlask className="text-xl text-cyan-300" />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {aboutSkillProgress.map((skill, index) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-slate-200">{skill.name}</span>
                <span className="text-xs text-slate-400">{skill.level}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-violet-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{
                    duration: 0.95,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
