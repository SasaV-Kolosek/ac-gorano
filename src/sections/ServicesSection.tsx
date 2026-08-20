import { Archive, PackageOpen, Wrench, Gauge, type LucideIcon } from 'lucide-react'

interface SectionHeader { label: string; headline: string; description: string }
interface Service { id: string; icon: string; title: string; description: string }
interface ServicesProps { sectionHeader: SectionHeader; services: Service[]; onServiceFocus?: (id: string) => void }

const ICON_MAP: Record<string, LucideIcon> = {
  Archive,
  PackageOpen,
  Wrench,
  Gauge,
}

interface ServiceCardProps {
  service: Service
  index: number
  onFocus?: () => void
}

function ServiceCard({ service, index, onFocus }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? Wrench
  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      className="group relative bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/25 transition-all duration-300 cursor-default overflow-hidden"
      onMouseEnter={onFocus}
    >
      <span
        className="absolute top-5 right-5 text-xs text-zinc-700 select-none"
        style={{ fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}
      >
        {num}
      </span>

      <div className="w-11 h-11 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:bg-blue-600/18 group-hover:border-blue-500/35 transition-all duration-300">
        <Icon className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
      </div>

      <h3 className="text-white font-bold text-base mb-2.5 tracking-tight leading-snug pr-8">
        {service.title}
      </h3>

      <p className="text-zinc-500 text-sm leading-relaxed">
        {service.description}
      </p>

      <div className="absolute bottom-0 left-6 right-6 h-px bg-blue-500 opacity-0 group-hover:opacity-25 transition-opacity duration-300 rounded-full" />
    </div>
  )
}

export function ServicesSection({ sectionHeader, services, onServiceFocus }: ServicesProps) {
  return (
    <section
      id="usluge"
      className="relative bg-zinc-900 py-24 overflow-hidden"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              onFocus={() => onServiceFocus?.(service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
