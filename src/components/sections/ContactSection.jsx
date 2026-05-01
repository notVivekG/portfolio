import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { sectionVariants, itemVariants } from '../../utils/motion'

export default function ContactSection() {
  const handleContactSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim() ?? ''
    const email = formData.get('email')?.toString().trim() ?? ''
    const message = formData.get('message')?.toString().trim() ?? ''

    const subject = encodeURIComponent(
      `Portfolio Contact from ${name || 'Website Visitor'}`,
    )
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )

    window.location.href = `mailto:notvivekkushwaha@gmail.com?subject=${subject}&body=${body}`
    event.currentTarget.reset()
  }

  return (
    <motion.section
      id="contact"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="glass-card mx-auto max-w-4xl rounded-[2rem] p-7 sm:p-9 lg:p-10">
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.36em] text-cyan-300">
            Contact
          </p>
          <h2 className="font-heading mt-3 text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s build something exceptional.
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-8 grid gap-3 text-sm sm:grid-cols-3"
        >
          <a
            href="mailto:notvivekkushwaha@gmail.com"
            className="rounded-2xl border border-white/12 bg-white/[0.03] p-4 transition-colors hover:border-cyan-300/60"
          >
            <div className="mb-2 flex items-center gap-2 text-cyan-300">
              <FaEnvelope />
              Email
            </div>
            <p className="break-all text-slate-200">
              notvivekkushwaha@gmail.com
            </p>
          </a>
          <a
            href="https://linkedin.com/in/vivek-kushwaha"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/12 bg-white/[0.03] p-4 transition-colors hover:border-cyan-300/60"
          >
            <div className="mb-2 flex items-center gap-2 text-cyan-300">
              <FaLinkedinIn />
              LinkedIn
            </div>
            <p className="text-slate-200">linkedin.com/in/vivek-kushwaha</p>
          </a>
          <a
            href="https://github.com/notVivekG"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/12 bg-white/[0.03] p-4 transition-colors hover:border-cyan-300/60"
          >
            <div className="mb-2 flex items-center gap-2 text-cyan-300">
              <FaGithub />
              GitHub
            </div>
            <p className="text-slate-200">github.com/notVivekG</p>
          </a>
        </motion.div>

        <motion.form
          variants={itemVariants}
          onSubmit={handleContactSubmit}
          className="mt-8 space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/50"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-500 focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/50"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Message"
            className="w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-slate-100 outline-none transition-all placeholder:text-slate-500 focus:border-violet-300/70 focus:ring-2 focus:ring-violet-300/50"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-xl border border-cyan-300/75 px-6 py-3 text-sm font-semibold text-cyan-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300/12 hover:shadow-[0_0_26px_rgba(0,245,255,0.35)]"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </motion.section>
  )
}
