import { motion } from 'framer-motion'
import SectionHeading from '../SectionHeading'
import { sectionVariants, itemVariants } from '../../utils/motion'
import { skillsByGroup } from '../../constants/data'

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.24 }}
      className="space-y-9 sm:space-y-10"
    >
      <SectionHeading
        label="Skills"
        title="Technologies I use to ship modern digital products."
        description="A full-stack toolkit spanning frontend systems, backend integration, databases, and engineering workflows."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {skillsByGroup.map((group) => (
          <motion.div
            key={group.group}
            variants={itemVariants}
            className="glass-card rounded-3xl p-5 sm:p-6"
          >
            <h3 className="font-heading text-2xl font-semibold text-white">
              {group.group}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.items.map((item) => {
                const Icon = item.icon

                return (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200"
                  >
                    <Icon className="text-base text-cyan-300" />
                    {item.name}
                  </span>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
