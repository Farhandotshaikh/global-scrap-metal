import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Scale, ShieldCheck, Truck, Zap, Star, TrendingUp, Award, MessageSquare, Phone, Ban, CalendarDays, Clock, Handshake } from 'lucide-react'
import { services } from '../data/services'
import { siteConfig, whatsappLink } from '../data/siteConfig'
import EnquiryForm from '../components/EnquiryForm'
import MapSection from '../components/MapSection'

const statIcons = [TrendingUp, ShieldCheck, Award]

const marqueeVariants = {
  animate: {
    x: ['0%', '-50%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 28,
        ease: 'linear',
      },
    },
  },
}

const statVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const badgesRowOne = [
  { Icon: Ban, label: "We Don't Buy Cars" },
  { Icon: CalendarDays, label: 'Open 7 Days' },
  { Icon: Clock, label: "We're Open 365 Days" },
  { Icon: Handshake, label: 'No Middleman' },
]

const badgesRowTwo = [
  { Icon: Clock, label: "We're Open 365 Days" },
  { Icon: Handshake, label: 'No Middleman' },
  { Icon: Ban, label: "We Don't Buy Cars" },
  { Icon: CalendarDays, label: 'Open 7 Days' },
]

const TickerRow = ({ items, reverse }) => (
  <div className="overflow-hidden">
    <div
      className={`flex w-max gap-0 ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
    >
      {[...items, ...items].map(({ Icon, label }, i) => (
        <div
          key={`${label}-${i}`}
          className="flex items-center gap-2.5 px-8 py-4 shrink-0 border-r border-white/10"
        >
          <Icon size={16} className="text-[var(--color-primary)] shrink-0" />
          <span className="font-display font-semibold text-sm whitespace-nowrap">
            {label}
          </span>
        </div>
      ))}
    </div>
  </div>
)

const lineVariants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.9, ease: 'easeOut', delay: 0.3 },
  },
}
const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const trustedBy = [
  'Nexora Constructions',
  'Buildora Fabricators',
  'Steellix Industries',
  'Metrovex Demolition',
  'Voltaris Electricals'
];

const stats = [
  { value: '24/7', label: 'Get in touch whenever you need a scrap price or enquiry.' },
  { value: '98%', label: 'Customer satisfaction on rate fairness, tracked every quarter.' },
  { value: '1.8x', label: 'More payout on average versus unlicensed roadside buyers.' },
]

const whyUs = [
  { Icon: Scale, title: 'Certified Weighing', desc: 'Every load is weighed on calibrated scales in full view — no guesswork, no shortchanging.' },
  { Icon: Zap, title: 'Live Market Rates', desc: 'Our rate board updates daily with copper, brass, and steel commodity pricing.' },
  { Icon: Truck, title: 'Free Bulk Pickup', desc: 'Industrial and contractor loads collected directly from your site, no extra charge.' },
  { Icon: ShieldCheck, title: 'Licensed & Compliant', desc: 'Fully licensed scrap dealer following all environmental and safety norms.' },
]

const testimonials = [
  {
    quote: "We cleared an entire decommissioned workshop and Global Scrap Metal handled the pickup, sorting, and payment the same afternoon. No back-and-forth on pricing.",
    name: 'Oliver',
    role: 'Site Manager, BuildRight Constructions',
  },
  {
    quote: "Their copper rate board is genuinely the most transparent I've dealt with. I check it before every big wiring job cleanup.",
    name: 'Matilda',
    role: 'Electrical Contractor',
  },
  {
    quote: "Sold a mixed load of aluminium and steel offcuts — they sorted it properly instead of paying one flat rate. Fair and fast.",
    name: 'Jaxon',
    role: 'Fabrication Workshop Owner',
  },
]

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1722695694560-f452b0919d3a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Scrap metal yard"
            className="w-full h-full object-cover opacity-25"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff]/80 via-[var(--color-bg)]/80 to-[var(--color-bg)]/80" /> */}
        </div>
        <div className="container-px max-w-4xl">
          {/* <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--color-primary)] font-semibold text-sm tracking-widest uppercase mb-5"
          >
            {siteConfig.tagline}
          </motion.p> */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display font-bold text-5xl md:text-7xl leading-[1.05] mb-6"
          >
            Fair Rates for <span className="gradient-text">Every Kilo</span> of Scrap
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-[var(--color-text)] text-lg max-w-xl mb-9"
          >
            We buy copper, brass, aluminium, steel, and mixed industrial scrap at transparent,
            daily-updated market rates — with instant payment and free pickup for bulk loads.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              // target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-[var(--color-bg)] font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition-all"
            >
              Get Your Free Quote <ArrowRight size={18} />
            </a>
            <a
              href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center border border-white ml-2 px-4 py-2 rounded-full font-semibold hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] transition-all gap-2"
            >
              <Phone size={16} />
              {siteConfig.phoneDisplay}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="relative py-12 border-y border-white/5 overflow-hidden bg-[var(--color-surface)]/20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container-px"
        >
          <p className="text-center text-xs uppercase tracking-[0.2em] text-[var(--color-text)] mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-white/10" />
            Trusted by contractors &amp; industrial units
            <span className="h-px w-8 bg-white/10" />
          </p>
        </motion.div>

        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10" />

        <div className="group overflow-hidden">
          <motion.div
            variants={marqueeVariants}
            animate="animate"
            className="flex w-max gap-x-14 group-hover:[animation-play-state:paused]"
            style={{ willChange: 'transform' }}
            whileHover={{ transitionDuration: '0s' }}
          >
            {/* Render the list twice for a seamless loop */}
            {[...trustedBy, ...trustedBy].map((n, i) => (
              <div key={`${n}-${i}`} className="flex items-center gap-14 shrink-0">
                <span className="font-display  bg-[var(--color-primary-2)] p-3 rounded-full font-medium text-sm md:text-base opacity-70 hover:opacity-100 hover:text-[var(--color-primary-2)] transition-all duration-300 whitespace-nowrap text-lighteres">
                  {n}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/30 shrink-0" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-24 md:py-32">
        <div className="container-px grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest mb-3">About Us</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 leading-tight">
              A scrap yard built on honest weighing and real market rates.
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-8">
              For over a decade, contractors, electricians, and factories across the region have
              brought their copper, brass, steel, and mixed scrap to us — not because we're the
              only buyer around, but because our scale never lies and our rates track the real
              commodity market, every single day.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-semibold text-[var(--color-primary)] hover:gap-3 transition-all"
            >
              Read Our Story <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden"
          >
            <img
              src="https://plus.unsplash.com/premium_photo-1682146773000-474a2592d2b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Scrap metal sorting yard"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="relative border-y border-white/5 overflow-hidden">
        {/* Row 1 — surface tone, scrolling left */}
        <div className="bg-[var(--color-surface)] text-[var(--color-text)] relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-[var(--color-surface)] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-[var(--color-surface)] to-transparent z-10" />
          <TickerRow items={badgesRowOne} />
        </div>

        {/* Row 2 — primary tone, scrolling right */}
        <div className="bg-[var(--color-primary)] text-[var(--color-bg)] relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 bg-gradient-to-r from-[var(--color-primary)] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 bg-gradient-to-l from-[var(--color-primary)] to-transparent z-10" />
          <TickerRow items={badgesRowTwo} reverse />
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 md:py-32 bg-[var(--color-surface)]/40">
        <div className="container-px">
          <div className="max-w-2xl mb-14">
            <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest mb-3">Services</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Scrap metal we buy, sorted by grade.</h2>
            <p className="text-[var(--color-muted)]">
              One yard, one advisor, one fair rate card — for every category of metal you need to sell.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <motion.div key={s.slug} variants={item} whileHover={{ y: -6 }}>
                <Link
                  to={`/services/${s.slug}`}
                  className="block rounded-2xl overflow-hidden bg-[var(--color-bg)] border border-white/5 group h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">{s.tag}</span>
                    <h3 className="font-display font-bold text-xl mt-2 mb-2">{s.title}</h3>
                    <p className="text-[var(--color-muted)] text-sm leading-relaxed">{s.short}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 md:py-32">
        <div className="container-px">
          <div className="max-w-2xl mb-14">
            <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest mb-3">Why Us</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Built around fair weighing and honest rates.
            </h2>
            <p className="text-[var(--color-muted)]">
              No lowball quotes, no rigged scales — just clear grading and market-tracked pricing every time you visit.
            </p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyUs.map(({ Icon, title, desc }) => (
              <motion.div key={title} variants={item} whileHover={{ y: -6 }} className="p-7 rounded-2xl bg-[var(--color-surface)] border border-white/5">
                <Icon className="text-[var(--color-primary)] mb-5" size={28} />
                <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-28 md:py-36 bg-[var(--color-surface)]/40 overflow-hidden">
        {/* Decorative glow orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-[120px] -z-10" />

        {/* Faint grid texture */}
        <div
          className="absolute inset-0 -z-10 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-xl mx-auto mb-16"
          >
            <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest mb-3">
              By The Numbers
            </p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">
              Results that back up every rate we quote.
            </h2>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 text-center"
          >
            {stats.map((s, i) => {
              const Icon = statIcons[i % statIcons.length]
              return (
                <motion.div
                  key={s.value}
                  variants={statVariants}
                  whileHover={{ y: -8 }}
                  className="group relative px-4"
                >
                  {/* Vertical divider (desktop only, skip first item) */}
                  {i > 0 && (
                    <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-20 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                  )}

                  {/* Icon badge */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center group-hover:bg-[var(--color-primary)]/20 group-hover:border-[var(--color-primary)]/40 transition-colors duration-300"
                  >
                    <Icon className="text-[var(--color-primary)]" size={24} />
                  </motion.div>

                  {/* Number with glow-pulse on hover */}
                  <motion.p
                    className="font-display font-bold text-5xl md:text-6xl gradient-text mb-1 relative inline-block"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 250, damping: 12 }}
                  >
                    {s.value}
                    <span className="absolute -inset-4 bg-[var(--color-primary)]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  </motion.p>

                  {/* Animated underline that draws in */}
                  <motion.span
                    variants={lineVariants}
                    className="block h-[2px] w-12 mx-auto mt-4 bg-[var(--color-primary)] mb-4 origin-center"
                  />

                  <p className="text-[var(--color-muted)] text-sm max-w-xs mx-auto leading-relaxed">
                    {s.label}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="container-px">
          <div className="max-w-2xl mb-14">
            <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">What sellers say after weighing in.</h2>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={item} className="p-7 rounded-2xl bg-[var(--color-surface)] border border-white/5">
                <div className="flex gap-1 mb-4 text-[var(--color-primary)]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm text-[var(--color-text)]/90 leading-relaxed mb-6">"{t.quote}"</p>
                <p className="font-display font-semibold text-sm">{t.name}</p>
                <p className="text-[var(--color-muted)] text-xs">{t.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact: Map + Enquiry Form */}
      <section id="contact" className="py-24 md:py-32 bg-[var(--color-surface)]/40 scroll-mt-24">
        <div className="container-px">
          <div className="max-w-2xl mb-14">
            <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Visit the yard or send an enquiry.</h2>
            <p className="text-[var(--color-muted)]">
              Drop by during working hours, call us directly, or fill in the form and we'll respond over WhatsApp.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <MapSection />
            <EnquiryForm id="e-form" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://cdn.prod.website-files.com/67434bc3f8cab15f2f07e714/688aeba94186718428297ae8_Industrila%20parks.png"
            alt="Industrial yard"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-[var(--color-bg)]/60" />
        </div>
        <div className="container-px text-center max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-5">
            Got scrap sitting around? Turn it into cash today.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-[var(--color-bg)] font-semibold px-8 py-4 rounded-full hover:brightness-110 transition-all"
            >
              Get Your Free Quote <ArrowRight size={18} />
            </a>
            <a
              href={`sms:${siteConfig.phoneDisplay.replace(/\s/g, '')}?body=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
              className="inline-flex items-center justify-center border border-white px-8 py-4 rounded-full font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all gap-2"
            >
              <MessageSquare size={16} />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
