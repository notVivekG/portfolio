import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navItems } from '../constants/data'

export default function Header({ isScrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
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
          className="inline-flex items-center"
          onClick={closeMobileMenu}
          aria-label="Go to home"
        >
          <img
            src="/favicon.svg"
            alt="Vivek Kushwaha logo"
            className="h-10 w-10 object-contain shadow-[0_0_22px_rgba(0,245,255,0.35)]"
          />
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
  )
}
