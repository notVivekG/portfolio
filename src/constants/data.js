import { FaCss3Alt } from 'react-icons/fa'
import { FiCode, FiCpu, FiPenTool, FiZap } from 'react-icons/fi'
import {
  SiCplusplus, SiDaisyui, SiFlask, SiGit, SiHtml5, SiJavascript,
  SiMongodb, SiMysql, SiReact, SiRedux, SiShadcnui, SiTailwindcss,
} from 'react-icons/si'
import { TbSql } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const aboutSkillProgress = [
  { name: 'C/C++', level: 94 },
  { name: 'JavaScript', level: 88 },
  { name: 'React.js', level: 92 },
  { name: 'Tailwind', level: 98 },
  { name: 'Redux Toolkit', level: 90 },
  { name: 'Flask', level: 76 },
  { name: 'MongoDB', level: 68 },
  { name: 'MySQL', level: 86 },
  { name: 'Git', level: 96 },
]

export const projects = [
  {
    title: 'Portfolio Website',
    stack: ['React.js', 'Tailwind CSS'],
    description: 'A premium personal showcase with motion-driven UI, responsive layouts, and modern glassmorphism.',
    github: 'https://github.com/notVivekG/portfolio',
    live: 'https://vivek-kushwaha-portfolio.netlify.app',
  },
  {
    title: 'Product Review Platform',
    stack: ['React', 'Redux Toolkit', 'Appwrite', 'Tailwind', 'Vite'],
    description: 'A modern review platform featuring state-managed workflows, filtering, and scalable backend integration.',
    github: 'https://github.com/notVivekG/tech-review-project',
    live: 'https://tech-review-project.vercel.app/',
  },
  {
    title: 'Yoga Playlist Generator',
    stack: ['HTML', 'Tailwind', 'JavaScript', 'Flask', 'Pandas'],
    description: 'A wellness utility that recommends curated yoga playlists based on mood and session intensity.',
    github: 'https://github.com/notVivekG/yoga-playlist-generator',
    live: 'https://yoga-playlist-backend.onrender.com',
  },
  {
    title: 'NutraFit — AI Diet E-Commerce',
    stack: ['React', 'Next.js', 'Express', 'MongoDB'],
    status: 'Ongoing',
    description: 'An AI-driven nutrition commerce concept blending personalized diet intelligence with product discovery.',
    github: 'https://github.com/notVivekG/nutrafit-ai-diet-ecommerce',
    live: 'https://nutrafit-ai-diet-ecommerce.vercel.app/',
  },
  {
    title: 'Mini Projects Collection',
    stack: ['JavaScript', 'React', 'OSS'],
    description: 'A curated set of mini builds focused on practical UI, algorithmic thinking, and rapid experimentation.',
    github: 'https://github.com/notVivekG',
    live: 'https://github-profile-finder-dwae.onrender.com',
  },
]

export const skillsByGroup = [
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
