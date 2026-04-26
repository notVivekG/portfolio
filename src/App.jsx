import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaBars,
  FaCss3Alt,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaLinkedinIn,
  FaTimes,
} from 'react-icons/fa'
import { FiCode, FiCpu, FiPenTool, FiZap } from 'react-icons/fi'
import {
  SiCplusplus,
  SiDaisyui,
  SiFlask,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
} from 'react-icons/si'
import { TbSql } from 'react-icons/tb'
import { TypeAnimation } from 'react-type-animation'
import { VscVscode } from 'react-icons/vsc'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const aboutSkillProgress = [
  { name: 'C/C++', level: 82 },
  { name: 'JavaScript', level: 88 },
  { name: 'React.js', level: 90 },
  { name: 'Tailwind', level: 91 },
  { name: 'Redux Toolkit', level: 84 },
  { name: 'Flask', level: 76 },
  { name: 'MongoDB', level: 83 },
  { name: 'MySQL', level: 80 },
  { name: 'Git', level: 86 },
]

const projects = [
  {
    title: 'Portfolio Website',
    stack: ['React.js', 'Tailwind CSS'],
    description:
      'A premium personal showcase with motion-driven UI, responsive layouts, and modern glassmorphism.',
    github: 'https://github.com/notVivekG/portfolio-website',
    live: 'https://notvivekg.github.io/portfolio-website/',
  },
  {
    title: 'Product Review Platform',
    stack: ['React', 'Redux Toolkit', 'Appwrite', 'Tailwind', 'Vite'],
    description:
      'A modern review platform featuring state-managed workflows, filtering, and scalable backend integration.',
    github: 'https://github.com/notVivekG/product-review-platform',
    live: 'https://notvivekg.github.io/product-review-platform/',
  },
  {
    title: 'Yoga Playlist Generator',
    stack: ['HTML', 'Tailwind', 'JavaScript', 'Flask', 'Pandas'],
    description:
      'A wellness utility that recommends curated yoga playlists based on mood and session intensity.',
    github: 'https://github.com/notVivekG/yoga-playlist-generator',
    live: 'https://notvivekg.github.io/yoga-playlist-generator/',
  },
  {
    title: 'NutraFit — AI Diet E-Commerce',
    stack: ['React', 'Next.js', 'Express', 'MongoDB'],
    description:
      'An AI-driven nutrition commerce concept blending personalized diet intelligence with product discovery.',
    github: 'https://github.com/notVivekG/nutrafit-ai-diet-ecommerce',
    live: 'https://nutrafit-ai-diet-ecommerce.vercel.app/',
  },
  {
    title: 'Mini Projects Collection',
    stack: ['JavaScript', 'React', 'OSS'],
    description:
      'A curated set of mini builds focused on practical UI, algorithmic thinking, and rapid experimentation.',
    github: 'https://github.com/notVivekG',
    live: 'https://github.com/notVivekG?tab=repositories',
  },
  {
    title: 'Open Source Contributions',
    stack: ['GitHub', 'Community', 'Web Dev'],
    description:
      'Hands-on contributions and experiments across open repositories to sharpen engineering collaboration.',
    github: 'https://github.com/notVivekG',
    live: 'https://github.com/notVivekG',
  },
]

const skillsByGroup = [
  {
    group: 'Languages',
    items: [
      { name: 'C/C++', icon: SiCplusplus },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: FaCss3Alt },
      { name: 'SQL', icon: TbSql },
    ],
  },
  {
    group: 'Frameworks',
    items: [
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    group: 'Libraries',
    items: [
      { name: 'Redux Toolkit', icon: SiRedux },
      { name: 'DaisyUI', icon: SiDaisyui },
      { name: 'shadcn', icon: SiShadcnui },
    ],
  },
  {
    group: 'Tools',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'VS Code', icon: VscVscode },
    ],
  },
  {
    group: 'Databases',
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    group: 'Interests',
    items: [
      { name: 'DSA', icon: FiCode },
      { name: 'AI', icon: FiCpu },
      { name: 'Automation', icon: FiZap },
      { name: 'UI/UX', icon: FiPenTool },
    ],
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="animated-mesh absolute inset-0" />
      <div className="dot-grid-bg absolute inset-0" />
    </div>
  )
}

function AnimatedName({ text }) {
  return (
    <h1 className="font-heading text-5xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          className="inline-block"
          initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.45, delay: 0.03 * index, ease: 'easeOut' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </h1>
  )
}

function SectionHeading({ label, title, description }) {
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

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  const handleContactSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="relative min-h-screen text-slate-100">
      <AnimatedBackground />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-white/15 bg-[#060916]/72 shadow-[0_10px_45px_rgba(0,0,0,0.45)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 md:px-10">
          <a
            href="#home"
            className="font-heading text-2xl font-bold tracking-[0.22em] text-cyan-300"
            onClick={closeMobileMenu}
          >
            VK
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-200/85 transition-colors duration-300 hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/5 text-lg text-slate-100 transition-colors hover:border-cyan-300 hover:text-cyan-300 md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-4 mb-4 rounded-2xl border border-white/15 bg-[#090e1f]/90 p-4 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/8 hover:text-cyan-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-34 md:gap-28 md:px-10 md:pt-36 xl:gap-32">
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
                I&apos;m a second-year CS student passionate about bridging AI and
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
      </main>
    </div>
  )
}

export default App
