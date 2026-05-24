import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import SearchDialog from './SearchDialog'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/education', label: 'Education' },
    { path: '/experience', label: 'Experience' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/certificates', label: 'Certificates' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      className="fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="relative">
        {/* Glass backdrop */}
        <div
          className="absolute inset-0"
          style={{
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[52px] items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
                <span className="text-black text-xs font-bold tracking-tight">JP</span>
              </div>
              <span
                className="text-[15px] font-semibold text-white/90 group-hover:text-white transition-colors"
                style={{ letterSpacing: '-0.02em' }}
              >
                Jagdish Patil
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              <SearchDialog />
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link text-[13px] font-medium ${
                    location.pathname === link.path
                      ? 'text-white bg-white/[0.08]'
                      : 'text-gray-400'
                  }`}
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile */}
            <div className="flex md:hidden items-center gap-1">
              <SearchDialog />
              <button
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/[0.06]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0"
            style={{
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(24px) saturate(180%)',
              WebkitBackdropFilter: 'blur(24px) saturate(180%)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="px-4 pt-2 pb-4 space-y-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'bg-white/[0.08] text-white font-medium'
                      : 'text-gray-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
