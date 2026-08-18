import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Scale, HandHeart, Recycle } from 'lucide-react'
import { whatsappLink } from '../data/siteConfig'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const stats = [
  { value: '12+', suffix: 'Yrs', label: 'In Operation' },
  { value: '40', suffix: '+', label: 'Regular Industrial Clients' },
  { value: '9.8', suffix: 'K', label: 'Tonnes Recycled Yearly' },
  { value: '4.9', suffix: '★', label: 'Average Seller Rating' },
]

const values = [
  { Icon: Scale, title: 'Radical Fairness', desc: 'Rates move with the real commodity market, and every load is weighed where you can see it.' },
  { Icon: HandHeart, title: 'No Pressure Tactics', desc: "We quote honestly whether you're bringing in 2kg or 2 tonnes — no haggling games." },
  { Icon: Recycle, title: 'Responsible Recycling', desc: 'Every tonne we buy is processed and channelled through licensed recycling partners.' },
]

const team = [
  { name: 'Suresh Patil', role: 'Founder & Yard Head', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80' },
  { name: 'Anita Deshmukh', role: 'Grading & Quality Lead', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80' },
  { name: 'Vikram Rao', role: 'Logistics & Pickup Manager', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80' },
  { name: 'Farida Khan', role: 'Client Relations', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80' },
]

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://geotop.com.ua/images/geodezicheskie-izmereniya-obyoma-metalloloma-na-sklade-podschet-massi/geodezicheskie-izmereniya-obyoma-metalloloma-na-sklade-podschet-massi-1.jpg"
            alt="Scrap metal warehouse"
            className="w-full h-full object-cover opacity-45"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg)]/85 to-[var(--color-bg)]" /> */}
        </div>
        <div className="container-px max-w-3xl">
          <p className="text-[var(--color-primary)] font-semibold text-sm tracking-widest uppercase mb-4">
            Our Story & Mission
          </p>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight">
            Built on an Honest Scale, Not a Sales Pitch
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-px grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 leading-tight">
              We started this yard because sellers kept getting shortchanged.
            </h2>
            <p className="text-[var(--color-muted)] leading-relaxed mb-4">
              Years ago, our founder watched electricians and contractors get quoted one rate over
              the phone and a lower one once their load was on the scale. That gap between
              promised and paid is what we built this business to close.
            </p>
            <p className="text-[var(--color-muted)] leading-relaxed">
              Today we run a full-service scrap yard — copper, brass, aluminium, steel, stainless,
              and e-waste — with published daily rates, calibrated weighing, and same-day payment,
              serving everyone from individual households to large industrial accounts.
            </p>
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
              alt="Scrap metal weighing"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission + stats */}
      <section className="py-20 md:py-28 bg-[var(--color-surface)]/40">
        <div className="container-px">
          <div className="max-w-2xl mb-16">
            <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest mb-3">Our Mission</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              To make scrap selling simple, transparent, and fair.
            </h2>
            <p className="text-[var(--color-muted)]">
              Every seller who walks or drives into our yard deserves to know exactly how their
              metal is graded, exactly what today's rate is, and exactly when they'll get paid.
            </p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((s) => (
              <motion.div key={s.label} variants={item} className="text-center">
                <p className="font-display font-bold text-4xl md:text-5xl gradient-text">
                  {s.value}<span className="text-2xl md:text-3xl">{s.suffix}</span>
                </p>
                <p className="text-[var(--color-muted)] text-sm mt-2">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container-px">
          <div className="max-w-2xl mb-14">
            <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest mb-3">Why We're Different</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">Three things we never compromise on.</h2>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {values.map(({ Icon, title, desc }) => (
              <motion.div key={title} variants={item} whileHover={{ y: -6 }} className="p-8 rounded-2xl bg-[var(--color-surface)] border border-white/5">
                <Icon className="text-[var(--color-primary)] mb-5" size={30} />
                <h3 className="font-display font-bold text-xl mb-3">{title}</h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-10">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-[var(--color-bg)] font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition-all"
            >
              Get Your Free Quote <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-20 md:py-28 bg-[var(--color-surface)]/40">
        <div className="container-px">
          <div className="max-w-2xl mb-14">
            <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest mb-3">Meet the Team</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">The people behind the scale.</h2>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {team.map((m) => (
              <motion.div key={m.name} variants={item} whileHover={{ y: -6 }} className="rounded-2xl overflow-hidden bg-[var(--color-bg)] border border-white/5">
                <div className="h-56 overflow-hidden">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <p className="font-display font-semibold text-sm">{m.name}</p>
                  <p className="text-[var(--color-muted)] text-xs">{m.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://media.istockphoto.com/id/466548585/photo/pile-of-aluminium-scrap.jpg?s=612x612&w=0&k=20&c=W1irvAfseW0yDHBgcH9d7KwtoDlyVL0Y3Too4z_5ajk="
            alt="Metal scrap pile"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[var(--color-bg)]/80" />
        </div>
        <div className="container-px text-center max-w-2xl mx-auto">
          <p className="text-[var(--color-primary)] text-sm font-semibold uppercase tracking-widest mb-4">
            Ready to Sell?
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-5">
            Let's weigh your scrap and settle a fair price.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-[var(--color-bg)] font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition-all"
            >
              Get Your Free Quote <ArrowRight size={18} />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border border-white/15 px-7 py-3.5 rounded-full font-semibold hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
