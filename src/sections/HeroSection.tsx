import { ChevronDown } from 'lucide-react'

interface HeroContent { headline: string; subheadline: string; ctaLabel: string; ctaHref: string; backgroundImage: string; backgroundAlt: string }
interface TrustStat { id: string; value: string; label: string }
interface ModelTag { id: string; label: string; generations: string }
interface HeroProps { hero: HeroContent; trustStats: TrustStat[]; modelTags: ModelTag[]; onCtaClick?: (href: string) => void }

export function HeroSection({ hero, trustStats, modelTags, onCtaClick }: HeroProps) {
  const handleCta = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onCtaClick?.(hero.ctaHref)
    const target = document.querySelector(hero.ctaHref)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-zinc-950">
      {/* Background image — place Mercedes A/B photo at /public/images/hero-car.jpg */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero.backgroundImage})` }}
        aria-label={hero.backgroundAlt}
        role="img"
      />

      {/* Multi-stop dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-zinc-950/60 to-zinc-950" />

      {/* Atmospheric blue radial glow */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(37,99,235,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px',
        }}
      />

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-12 text-center">
        {/* Niche badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
          <span className="text-blue-300 text-[11px] font-semibold tracking-[0.18em] uppercase">
            Mercedes-Benz Specijalist · Novi Sad
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-[clamp(2.75rem,8vw,6rem)] font-black tracking-tighter text-white leading-[0.95] mb-7 max-w-4xl"
          style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        >
          {hero.headline}
        </h1>

        {/* Blue accent line */}
        <div className="flex items-center gap-3 mb-7">
          <div className="w-8 h-px bg-zinc-700" />
          <div className="w-12 h-px bg-blue-500" />
          <div className="w-8 h-px bg-zinc-700" />
        </div>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed mb-9">
          {hero.subheadline}
        </p>

        {/* Model tags */}
        <div className="flex flex-wrap items-stretch justify-center gap-3 mb-10">
          {modelTags.map((tag) => (
            <div
              key={tag.id}
              className="flex flex-col items-center px-5 py-3 rounded-lg border border-zinc-700/50 bg-zinc-900/60 backdrop-blur-sm min-w-[160px]"
            >
              <span className="text-sm font-semibold text-zinc-100 tracking-wide">{tag.label}</span>
              <span
                className="text-[10px] text-zinc-500 mt-1 tracking-wider"
                style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}
              >
                {tag.generations}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href={hero.ctaHref}
          onClick={handleCta}
          className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm rounded-lg transition-all duration-200 group shadow-lg shadow-blue-900/30"
        >
          {hero.ctaLabel}
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-3 animate-bounce">
        <ChevronDown className="w-5 h-5 text-zinc-600" strokeWidth={1.5} />
      </div>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-white/5 bg-zinc-950/85 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/5">
            {trustStats.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center py-5 px-4 text-center">
                <span className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-[10px] text-zinc-500 mt-1.5 uppercase tracking-[0.12em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
