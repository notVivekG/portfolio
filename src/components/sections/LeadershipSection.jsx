import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaImages } from 'react-icons/fa'
import SectionHeading from '../SectionHeading'
import GalleryModal from '../GalleryModal'
import { sectionVariants, itemVariants } from '../../utils/motion'
import { leadershipEvents } from '../../constants/data'

export default function LeadershipSection() {
  const [activeId, setActiveId] = useState(null)

  // Derive the active event from data — no hardcoded content in this component
  const activeEvent = leadershipEvents.find((e) => e.id === activeId) ?? null

  return (
    <>
      <motion.section
        id="leadership"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="space-y-9 sm:space-y-10"
      >
        <SectionHeading
          label="Leadership & Events"
          title="Leading teams and creating memorable experiences."
          description="Taking ownership of college events — from planning and logistics to live stage anchoring."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {leadershipEvents.map((event) => (
            <motion.article
              key={event.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="group glass-card flex flex-col rounded-3xl p-5 sm:p-6"
            >
              {/* Icon */}
              <span className="text-4xl" role="img" aria-label={event.title}>
                {event.icon}
              </span>

              <h3 className="font-heading mt-4 text-[1.55rem] font-semibold leading-tight text-white">
                {event.title}
              </h3>

              <p className="mt-3.5 flex-1 text-sm leading-7 text-slate-300">
                {event.description}
              </p>

              <div className="mt-6">
                <button
                  onClick={() => setActiveId(event.id)}
                  aria-label={`View ${event.title} gallery`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300/70 hover:bg-white/8"
                >
                  <FaImages className="text-sm text-violet-300" aria-hidden="true" />
                  View Gallery
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Gallery modal — rendered outside the section to avoid stacking-context issues */}
      <GalleryModal
        isOpen={activeId !== null}
        onClose={() => setActiveId(null)}
        images={activeEvent?.images ?? []}
        eventTitle={activeEvent?.title ?? ''}
      />
    </>
  )
}
