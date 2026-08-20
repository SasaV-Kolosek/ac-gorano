import { Target, ShieldCheck, Layers, Clock, type LucideIcon } from 'lucide-react'

interface SectionHeader { label: string; headline: string; description: string }
interface TrustPoint { id: string; icon: string; title: string; description: string }
interface Testimonial { id: string; quote: string; author: string; carModel: string }
interface WhyAcGoranoProps { sectionHeader: SectionHeader; trustPoints: TrustPoint[]; testimonials: Testimonial[] }

const ICON_MAP: Record<string, LucideIcon> = {
  Target,
  ShieldCheck,
  Layers,
  Clock,
}

function TrustPointCard({ point }: { point: TrustPoint }) {
  const Icon = ICON_MAP[point.icon] ?? ShieldCheck
  return (
    <div className="group flex items-start gap-4 p-5 rounded-xl border border-zinc-800/60 bg-zinc-900/40 hover:border-zinc-700/70 hover:bg-zinc-900/70 transition-all duration-300">
      <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600/15 group-hover:border-blue-500/30 transition-all duration-300">
        <Icon className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
      </div>
      <div className="min-w-0">
        <h3 className="text-white font-bold text-sm mb-1.5 leading-snug">{point.title}</h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{point.description}</p>
      </div>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl p-6 overflow-hidden">
      <span
        className="absolute top-3 right-4 text-7xl leading-none text-zinc-800 font-black select-none pointer-events-none"
        aria-hidden="true"
      >
        "
      </span>
      <p className="relative z-10 text-zinc-300 text-sm leading-relaxed flex-1 mb-5">
        {testimonial.quote}
      </p>
      <div className="border-t border-zinc-800/80 pt-4">
        <div className="text-white text-sm font-semibold">{testimonial.author}</div>
        <div
          className="text-zinc-500 text-[11px] mt-0.5 tracking-wide"
          style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}
        >
          {testimonial.carModel}
        </div>
      </div>
    </div>
  )
}

export function WhyAcGorano({ sectionHeader, trustPoints, testimonials }: WhyAcGoranoProps) {
  return (
    <section
      id="zasto-mi"
      className="relative bg-zinc-950 py-24 overflow-hidden"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div
        className="absolute top-0 left-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 0%, rgba(37,99,235,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-5">
              <div className="w-6 h-px bg-blue-500" />
              <span className="text-blue-400 text-[11px] font-semibold uppercase tracking-[0.22em]">
                {sectionHeader.label}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none">
              {sectionHeader.headline}
            </h2>
          </div>
          <p className="text-zinc-400 text-base leading-relaxed max-w-xs lg:text-right">
            {sectionHeader.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {trustPoints.map((point) => (
            <TrustPointCard key={point.id} point={point} />
          ))}
        </div>

        <div className="flex items-center gap-4 mb-10">
          <div className="h-px bg-zinc-800 flex-1" />
          <span className="text-zinc-600 text-xs uppercase tracking-[0.2em] font-medium shrink-0">
            Kupci o nama
          </span>
          <div className="h-px bg-zinc-800 flex-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
