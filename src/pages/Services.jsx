import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { services } from '../data/services'
import { whatsappLink } from '../data/siteConfig'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2023/1/HE/QM/MD/146866780/industrial-scrap-bins-500x500.jpeg"
            alt="Metal scrap"
            className="w-full h-full object-cover opacity-25"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg)]/85 to-[var(--color-bg)]" /> */}
        </div>
        <div className="container-px max-w-3xl">
          <p className="text-[var(--color-primary)] font-semibold text-sm tracking-widest uppercase mb-4">
            Services
          </p>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6">
            Every Grade of Scrap, One Fair Rate Card
          </h1>
          <p className="text-[var(--color-text)] text-lg max-w-xl">
            From a single kilo of copper wire to a full tonne of structural steel — we grade,
            weigh, and pay fairly across six core categories of scrap metal.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 md:py-24">
        <div className="container-px">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((s) => (
              <motion.div key={s.slug} variants={item} whileHover={{ y: -6 }}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group flex flex-col md:flex-row gap-0 rounded-2xl overflow-hidden bg-[var(--color-surface)] border border-white/5 h-full"
                >
                  <div className="md:w-2/5 h-52 md:h-auto overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">
                        {s.tag}
                      </span>
                      <h3 className="font-display font-bold text-2xl mt-2 mb-3">{s.title}</h3>
                      <p className="text-[var(--color-muted)] text-sm leading-relaxed">{s.short}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] mt-5">
                      View Details <ArrowUpRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://res.akamaized.net/domain/image/upload/t_web/v1572499139/industrialfeature-land-Truganina_pka4up.jpg"
            alt="Industrial yard"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[var(--color-bg)]/60" />
        </div>
        <div className="container-px text-center max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-5">
            Not sure which category your scrap falls under?
          </h2>
          <p className="text-[var(--color-text)] mb-8">
            Send us a photo on WhatsApp and we'll tell you the grade and today's rate in minutes.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-[var(--color-bg)] font-semibold px-8 py-4 rounded-full hover:brightness-110 transition-all"
          >
            Ask on WhatsApp <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  )
}

export default Services
