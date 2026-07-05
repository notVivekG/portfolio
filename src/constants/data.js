import { FaCss3Alt, FaGithub, FaRobot } from 'react-icons/fa'
import { FiCode, FiCpu, FiLayout, FiPenTool, FiStar, FiZap } from 'react-icons/fi'
import { RiBearSmileFill } from 'react-icons/ri'
import {
  SiAppwrite,
  SiCplusplus,
  SiDaisyui,
  SiFlask,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiVite,
  SiWarp,
} from 'react-icons/si'
import { TbSql } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'

// ─── Navigation ────────────────────────────────────────────────────────────────
// Order matches the page section render order in App.jsx
export const navItems = [
  { label: 'About',       href: '#about'       },
  { label: 'Skills',      href: '#skills'      },
  { label: 'Projects',    href: '#projects'    },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Leadership',  href: '#leadership'  },
  { label: 'Contact',     href: '#contact'     },
]

// ─── About — skill progress bars ───────────────────────────────────────────────
export const aboutSkillProgress = [
  { name: 'C/C++',        level: 94 },
  { name: 'JavaScript',   level: 88 },
  { name: 'React.js',     level: 92 },
  { name: 'Tailwind',     level: 98 },
  { name: 'Redux Toolkit', level: 90 },
  { name: 'Flask',        level: 76 },
  { name: 'MongoDB',      level: 88 },
  { name: 'MySQL',        level: 86 },
  { name: 'Git',          level: 96 },
]

// ─── Projects ──────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: 'Emergency Response Platform',
    stack: ['React', 'Node.js', 'Express', 'Socket.io', 'MongoDB', 'Leaflet'],
    description:
      'Real-time incident reporting platform with an interactive Leaflet map dashboard, admin broadcast alerts via Socket.io, and Firebase Cloud Messaging for instant volunteer coordination.',
    github: 'https://github.com/notVivekG/tech-review-project',
    live: 'https://safeguard-emergency-response.vercel.app/',
  },
  {
    title: 'Product Review Platform',
    stack: ['React', 'Redux Toolkit', 'Appwrite', 'Tailwind', 'Vite'],
    description:
      'Full-stack review platform with user authentication, CRUD operations, star ratings, category filtering, nested comments, rich-text editing, and protected routing.',
    github: 'https://github.com/notVivekG/tech-review-project',
    live: 'https://tech-review-project.vercel.app/',
  },
  {
    title: 'Yoga AI Playlist Generator',
    stack: ['Flask', 'Pandas', 'JavaScript', 'Tailwind CSS'],
    description:
      'AI-driven recommendation system that maps user health concerns to personalised yoga video content through a Pandas-based filtering pipeline with a Flask REST API.',
    github: 'https://github.com/notVivekG/yoga-playlist-generator',
    live: 'https://yoga-playlist-backend.onrender.com',
  },
  {
    title: 'NutraFit — AI Diet E-Commerce',
    stack: ['React', 'Next.js', 'Express', 'MongoDB'],
    status: 'Ongoing',
    description:
      'An AI-driven nutrition commerce concept blending personalised diet intelligence with product discovery.',
    github: 'https://github.com/notVivekG/nutrafit-ai-diet-ecommerce',
    live: 'https://nutrafit-ai-diet-ecommerce.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    stack: ['React.js', 'Tailwind CSS'],
    description:
      'A premium personal showcase with motion-driven UI, responsive layouts, glassmorphism, and dynamic GitHub project data fetching via the GitHub API.',
    github: 'https://github.com/notVivekG/portfolio',
    live: 'https://vivek-kushwaha-portfolio.netlify.app',
  },
  {
    title: 'Mini Projects Collection',
    stack: ['JavaScript', 'React', 'Open Source'],
    description:
      'A curated collection of open-source mini-applications focused on UI design, REST API integration, and rapid prototyping across diverse web technologies.',
    github: 'https://github.com/notVivekG',
    live: 'https://github-profile-finder-dwae.onrender.com',
  },
]

// ─── Skills ────────────────────────────────────────────────────────────────────
export const skillsByGroup = [
  {
    group: 'Languages',
    items: [
      { name: 'C/C++',      icon: SiCplusplus   },
      { name: 'JavaScript', icon: SiJavascript   },
      { name: 'HTML',       icon: SiHtml5        },
      { name: 'CSS',        icon: FaCss3Alt      },
      { name: 'SQL',        icon: TbSql          },
    ],
  },
  {
    group: 'Frontend',
    items: [
      { name: 'React.js',      icon: SiReact        },
      { name: 'Tailwind CSS',  icon: SiTailwindcss  },
      { name: 'Redux Toolkit', icon: SiRedux        },
      { name: 'Zustand',       icon: RiBearSmileFill },
      { name: 'DaisyUI',       icon: SiDaisyui      },
      { name: 'shadcn/ui',     icon: SiShadcnui     },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'Node.js',  icon: SiNodedotjs },
      { name: 'Flask',    icon: SiFlask     },
      { name: 'Appwrite', icon: SiAppwrite  },
    ],
  },
  {
    group: 'Databases',
    items: [
      { name: 'MySQL',   icon: SiMysql   },
      { name: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    group: 'Developer Tools',
    items: [
      { name: 'Git',         icon: SiGit      },
      { name: 'GitHub',      icon: FaGithub   },
      { name: 'VS Code',     icon: VscVscode  },
      { name: 'Warp',        icon: SiWarp     },
      { name: 'Antigravity', icon: FaRobot    },
      { name: 'Vite',        icon: SiVite     },
    ],
  },
  {
    group: 'Concepts',
    items: [
      { name: 'Data Structures & Algorithms', icon: FiCode   },
      { name: 'REST APIs',                    icon: FiZap    },
      { name: 'System Design Basics',         icon: FiLayout },
      { name: 'Recommendation Systems',       icon: FiStar   },
    ],
  },
  {
    group: 'Interests',
    items: [
      { name: 'Full Stack Development', icon: FiCode    },
      { name: 'AI/ML Integration',      icon: FiCpu     },
      { name: 'Automation',             icon: FiZap     },
      { name: 'UI/UX Design',           icon: FiPenTool },
    ],
  },
]

// ─── Open Source Contributions ─────────────────────────────────────────────────
// Update `status` here when a PR is merged or closed — no component edit needed.
export const openSourceContributions = [
  {
    title: 'Prism Launcher',
    subtitle: 'Free & Open Source Minecraft Launcher',
    // Valid values: 'Under Review' | 'Merged' | 'Closed'
    status: 'Under Review',
    tech: ['C++', 'Qt6', 'Git', 'GitHub'],
    highlights: [
      'Contributed to Prism Launcher, a free and open-source Minecraft launcher and one of the primary community launchers for SteamOS/Linux.',
      'Designed and implemented persistent named mod profiles enabling profile-specific enabled/disabled mod states across Loader Mods, Core Mods, and Nil Mods.',
      'Diagnosed and resolved asynchronous state-management and Qt signal lifecycle issues in a production C++/Qt codebase.',
    ],
    // Update prUrl when the PR number changes — no component edit needed.
    prUrl:   'https://github.com/PrismLauncher/PrismLauncher/pull/5719',
    repoUrl: 'https://github.com/PrismLauncher/PrismLauncher',
  },
]

// ─── Leadership & Events ───────────────────────────────────────────────────────
// Add real photos by populating each `images` array:
//   { src: '/events/<folder>/image1.jpg', caption: 'Optional caption' }
// If `images` is empty the gallery shows a "Photos coming soon." empty state.
export const leadershipEvents = [
  {
    id: 'freshers',
    icon: '🎉',
    title: "Freshers' Party",
    description:
      "Led planning and execution of the college Freshers' Party including decoration, catering, stage coordination, and event hosting for 250+ participants.",
    // Drop real images into /public/events/freshers/ and list them here.
    images: [],
  },
  {
    id: 'teachers-day',
    icon: '🎓',
    title: "Teacher's Day Celebration",
    description:
      'Planned, coordinated, and anchored the college Teacher\'s Day celebration.',
    // Drop real images into /public/events/teachers-day/ and list them here.
    images: [],
  },
]
