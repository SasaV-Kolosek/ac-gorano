import { Phone, Mail, MapPin, Clock } from 'lucide-react'

interface SectionHeader { label: string; headline: string }
interface Address { street: string; city: string; country: string }
interface WorkingHoursEntry { id: string; days: string; hours: string }
interface ContactDetails { phone: string; email: string; address: Address; workingHours: WorkingHoursEntry[] }
interface MapConfig { embedUrl: string; linkUrl: string }
interface ContactAndLocationProps { sectionHeader: SectionHeader; contactDetails: ContactDetails; mapConfig: MapConfig; onPhoneClick?: () => void; onEmailClick?: () => void; onMapClick?: () => void }

export function ContactAndLocation({
  sectionHeader,
  contactDetails,
  mapConfig,
  onPhoneClick,
  onEmailClick,
  onMapClick,
}: ContactAndLocationProps) {
  const { address, workingHours } = contactDetails

  return (
    <section
      id="kontakt"
      className="relative bg-zinc-900 py-24 overflow-hidden"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact details */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-zinc-500 text-[10px] uppercase tracking-[0.18em] font-semibold mb-1">Telefon</div>
                <a
                  href={`tel:${contactDetails.phone.replace(/\s/g, '')}`}
                  onClick={onPhoneClick}
                  className="text-white font-semibold text-base hover:text-blue-400 transition-colors"
                >
                  {contactDetails.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Mail className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-zinc-500 text-[10px] uppercase tracking-[0.18em] font-semibold mb-1">Email</div>
                <a
                  href={`mailto:${contactDetails.email}`}
                  onClick={onEmailClick}
                  className="text-white font-semibold text-base hover:text-blue-400 transition-colors"
                >
                  {contactDetails.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-zinc-500 text-[10px] uppercase tracking-[0.18em] font-semibold mb-1">Adresa</div>
                <div className="text-white font-semibold text-base leading-snug">{address.street}</div>
                <div className="text-zinc-400 text-sm mt-0.5">{address.city}, {address.country}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-5 h-5 text-blue-400" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-zinc-500 text-[10px] uppercase tracking-[0.18em] font-semibold mb-3">Radno vreme</div>
                <div className="border border-zinc-800 rounded-lg overflow-hidden">
                  {workingHours.map((entry, i) => (
                    <div
                      key={entry.id}
                      className={`flex items-center justify-between px-4 py-2.5 ${i < workingHours.length - 1 ? 'border-b border-zinc-800' : ''}`}
                    >
                      <span className="text-zinc-400 text-sm">{entry.days}</span>
                      <span
                        className={`text-sm font-medium tabular-nums ${entry.hours === 'Zatvoreno' ? 'text-zinc-600' : 'text-white'}`}
                        style={entry.hours !== 'Zatvoreno' ? { fontFamily: "'JetBrains Mono', 'Courier New', monospace" } : undefined}
                      >
                        {entry.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[420px] lg:h-auto min-h-[420px]">
            <iframe
              src={mapConfig.embedUrl}
              className="absolute inset-0 w-full h-full rounded-xl border border-zinc-800"
              style={{ filter: 'grayscale(25%) brightness(0.72)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AC Gorano lokacija"
              allowFullScreen
            />
            <a
              href={mapConfig.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onMapClick}
              className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950/90 backdrop-blur-sm border border-zinc-700 rounded-lg text-xs text-zinc-300 hover:text-white hover:border-zinc-500 transition-all duration-200"
            >
              Otvori u Google Maps
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
