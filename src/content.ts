// ============================================================
// AC GORANO — Site Content
// Edit this file to update all text and contact details.
// ============================================================

export const hero = {
  headline: 'Jedina radionica posvećena Mercedes A i B klasi',
  subheadline:
    'Prodaja polovnih i novih delova, ugradnja i servis — sve na jednom mestu u Novom Sadu. Od stručnjaka koji poznaju ove modele iznutra i izvana.',
  ctaLabel: 'Kontaktirajte nas',
  ctaHref: '#kontakt',
  backgroundImage: '/images/hero-car.jpg',
  backgroundAlt: 'Mercedes-Benz A klasa',
}

export const trustStats = [
  { id: 's1', value: '10+', label: 'godina iskustva' },
  { id: 's2', value: '500+', label: 'zadovoljnih kupaca' },
  { id: 's3', value: '2', label: 'modela u fokusu' },
  { id: 's4', value: '1', label: 'mesto za sve usluge' },
]

export const modelTags = [
  { id: 't1', label: 'Mercedes A klasa', generations: 'W168 · W169 · W176 · W177' },
  { id: 't2', label: 'Mercedes B klasa', generations: 'W245 · W246 · W247' },
]

export const servicesHeader = {
  label: 'Usluge',
  headline: 'Šta nudimo',
  description:
    'Sve što vaš Mercedes A ili B klase može da zatreba — na jednom mestu, u rukama stručnjaka koji ga poznaju iznutra i izvana.',
}

export const services = [
  {
    id: 'srv1',
    icon: 'Archive',
    title: 'Polovni delovi',
    description:
      'Provereni i ispravni polovni delovi za Mercedes A i B klasu — dostupni odmah, po pristupačnoj ceni.',
  },
  {
    id: 'srv2',
    icon: 'PackageOpen',
    title: 'Novi delovi',
    description:
      'Originalni i aftermarket novi delovi za sve generacije MB A i B klase, uz stručni savet pri odabiru.',
  },
  {
    id: 'srv3',
    icon: 'Wrench',
    title: 'Ugradnja delova',
    description:
      'Profesionalna ugradnja svakog kupljenog dela — da odmah vidite da sve radi kako treba.',
  },
  {
    id: 'srv4',
    icon: 'Gauge',
    title: 'Servis i popravke',
    description:
      'Kompletna dijagnostika, redovni servis i popravke — za dugi i siguran vek vašeg Mercedesa.',
  },
]

export const whyHeader = {
  label: 'Zašto mi',
  headline: 'Stručnost koja se vidi',
  description:
    'Nismo opšta radionica. Sve što radimo, radimo isključivo za Mercedes A i B klasu — i to se oseti na svakom vijku.',
}

export const trustPoints = [
  {
    id: 'tp1',
    icon: 'Target',
    title: 'Isključivo A i B klasa',
    description:
      'Fokus na dva modela znači da svaki tehničar poznaje svaki detalj — bez nagađanja, bez gubitka vremena.',
  },
  {
    id: 'tp2',
    icon: 'ShieldCheck',
    title: 'Provereni delovi',
    description:
      'Svaki polovni deo prolazi proveru ispravnosti pre nego što stigne do vas — tako da kupujete s poverenjem.',
  },
  {
    id: 'tp3',
    icon: 'Layers',
    title: 'Sve na jednom mestu',
    description:
      'Pronađite deo, ugradite ga i servisite vozilo — bez skakanja između radionica i dobavljača.',
  },
  {
    id: 'tp4',
    icon: 'Clock',
    title: 'Dugogodišnje iskustvo',
    description:
      'Više od decenije rada isključivo sa MB A i B klasom donosi znanje koje se ne uči iz knjige.',
  },
]

export const testimonials = [
  {
    id: 'tm1',
    quote:
      'Tražio sam bočno ogledalo za W176 mesecima. Ovde su ga imali odmah, proverili su ga pred mnom i ugradili za sat vremena. Odlična usluga.',
    author: 'Marko P.',
    carModel: 'Mercedes A klasa W176',
  },
  {
    id: 'tm2',
    quote:
      'Konačno radionica koja zna šta radi. Dijagnostika je bila precizna, cena fer, i sve je završeno brzo. Preporučujem svakome ko ima A ili B klasu.',
    author: 'Jelena S.',
    carModel: 'Mercedes B klasa W246',
  },
  {
    id: 'tm3',
    quote:
      'Kupio sam motor za moj W169 po pola cene novog, i radi savršeno. Svi delovi su provereni — nema loterije kao na pijaci.',
    author: 'Stefan M.',
    carModel: 'Mercedes A klasa W169',
  },
]

export const contactHeader = {
  label: 'Kontakt',
  headline: 'Pronađite nas',
}

// ⚠️  REPLACE THESE WITH REAL DETAILS BEFORE GOING LIVE
export const contactDetails = {
  phone: '+381 XX XXX XXXX',
  email: 'acgorano@email.com',
  address: {
    street: 'Ulica i broj XX',
    city: 'Novi Sad',
    country: 'Srbija',
  },
  workingHours: [
    { id: 'wh1', days: 'Ponedeljak – Petak', hours: '08:00 – 17:00' },
    { id: 'wh2', days: 'Subota', hours: '08:00 – 13:00' },
    { id: 'wh3', days: 'Nedelja', hours: 'Zatvoreno' },
  ],
}

// ⚠️  GET YOUR EMBED URL FROM: Google Maps → Share → Embed a map → copy the src value
export const mapConfig = {
  embedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90588.42522671154!2d19.7904!3d45.2671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b10613de93455%3A0xb6f9b09e6b8b5c5!2sNovi%20Sad!5e0!3m2!1sen!2srs!4v1234567890',
  linkUrl: 'https://maps.google.com/?q=Novi+Sad,+Srbija',
}
