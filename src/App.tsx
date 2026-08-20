import { TopNav } from './shell/TopNav'
import { SiteFooter } from './shell/SiteFooter'
import { HeroSection } from './sections/HeroSection'
import { ServicesSection } from './sections/ServicesSection'
import { WhyAcGorano } from './sections/WhyAcGorano'
import { ContactAndLocation } from './sections/ContactAndLocation'
import {
  hero,
  trustStats,
  modelTags,
  servicesHeader,
  services,
  whyHeader,
  trustPoints,
  testimonials,
  contactHeader,
  contactDetails,
  mapConfig,
} from './content'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <TopNav />
      <main className="pt-16">
        <HeroSection hero={hero} trustStats={trustStats} modelTags={modelTags} />
        <ServicesSection sectionHeader={servicesHeader} services={services} />
        <WhyAcGorano sectionHeader={whyHeader} trustPoints={trustPoints} testimonials={testimonials} />
        <ContactAndLocation
          sectionHeader={contactHeader}
          contactDetails={contactDetails}
          mapConfig={mapConfig}
        />
      </main>
      <SiteFooter />
    </div>
  )
}
