import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

const NAV_LINKS = [
  { label: 'Usluge', href: '#usluge' },
  { label: 'Zašto mi', href: '#zasto-mi' },
  { label: 'Kontakt', href: '#kontakt' },
]

export function TopNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-zinc-950 border-b border-white/10 shadow-lg'
          : 'bg-zinc-950/70 backdrop-blur-md'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
            <span className="text-white text-xs font-bold tracking-tight">AC</span>
          </div>
          <span className="text-white font-semibold text-base tracking-tight group-hover:text-zinc-200 transition-colors">
            AC Gorano
          </span>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Kontaktirajte nas
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-white/10">
          <nav className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors mt-1"
            >
              Kontaktirajte nas
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
