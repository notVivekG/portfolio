import { useEffect, useState } from 'react'
import AnimatedBackground from './components/AnimatedBackground'
import Header from './components/Header'
import HomeSection from './components/sections/HomeSection'
import AboutSection from './components/sections/AboutSection'
import ProjectsSection from './components/sections/ProjectsSection'
import SkillsSection from './components/sections/SkillsSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="relative min-h-screen text-slate-100">
      <AnimatedBackground />
      <Header isScrolled={isScrolled} />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-34 md:gap-28 md:px-10 md:pt-36 xl:gap-32">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
