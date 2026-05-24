import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const pageLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="relative mt-24">
      <div
        className="absolute inset-0"
        style={{
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
          {/* Branding */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
                <span className="text-black text-xs font-bold">JP</span>
              </div>
              <span className="text-sm font-semibold text-white/90" style={{ letterSpacing: '-0.02em' }}>
                Jagdish Patil
              </span>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">
              Python Full Stack Developer Based in Pune, Maharashtra, India.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://github.com/jagdishpatildev", icon: <Github className="w-4 h-4" />, label: "GitHub" },
                { href: "https://linkedin.com/in/jagdishpatildev", icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
                { href: "mailto:jagdishpatildev@gmail.com", icon: <Mail className="w-4 h-4" />, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2 rounded-lg text-gray-500 hover:text-white transition-colors"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">Pages</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {pageLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-xs text-gray-500 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:jagdishpatildev@gmail.com" className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5" />
                jagdishpatildev@gmail.com
              </a>
              <a href="tel:+919307891362" className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
                +91 93078 91362
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="py-5">
          <p className="text-xs text-gray-600 text-center">
            © {currentYear} Jagdish Patil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
