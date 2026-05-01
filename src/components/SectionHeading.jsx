import { motion } from 'framer-motion'
import { itemVariants } from '../utils/motion'

export default function SectionHeading({ label, title, description }) {
  return (
    <motion.div variants={itemVariants} className="max-w-3xl">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.32em] text-cyan-300">
        {label}
      </p>
      <h2 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300/90">
        {description}
      </p>
    </motion.div>
  )
}
