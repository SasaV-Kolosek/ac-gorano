const FOOTER_LINKS = [
  { label: 'Usluge', href: '#usluge' },
  { label: 'Zašto mi', href: '#zasto-mi' },
  { label: 'Kontakt', href: '#kontakt' },
]

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">AC</span>
              </div>
              <span className="text-white font-semibold text-base">AC Gorano</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
              Specijalizovana radionica za Mercedes-Benz A i B klasu u Novom Sadu.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-4">
              Navigacija
            </span>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-4">
              Kontakt
            </span>
            <div className="text-sm text-zinc-500 space-y-2">
              <p>Ilije Pantelića 10, Novi Sad</p>
              <p>+381 64 466 3366</p>
              <p>Pon – Sub: 08:00 – 17:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} AC Gorano. Sva prava zadržana.
        </div>
      </div>
    </footer>
  )
}
