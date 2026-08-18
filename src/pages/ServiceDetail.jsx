import { motion } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { services, getServiceBySlug } from '../data/services'
import { whatsappLink } from '../data/siteConfig'
import EnquiryForm from '../components/EnquiryForm'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

const ServiceDetail = () => {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/services" replace />

  const related = services.filter((s) => s.slug !== slug).slice(0, 2)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-45" />
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg)]/85 to-[var(--color-bg)]" /> */}
        </div>
        <div className="container-px max-w-3xl">
          <p className="text-[var(--color-primary)] font-semibold text-md tracking-widest uppercase mb-4">{service.tag}</p>
          <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight mb-6">{service.title}</h1>
          <p className="text-[var(--color-text)] text-lg max-w-xl mb-8">{service.short}</p>
          <a
            href={whatsappLink(`Hi, I have ${service.title.toLowerCase()} to sell. Can you share today's rate?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-[var(--color-bg)] font-semibold px-7 py-3.5 rounded-full hover:brightness-110 transition-all"
          >
            Get Today's Rate <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Overview + What's covered */}
      <section className="py-16 md:py-24">
        <div className="container-px md:max-w-[95%]">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-5">Overview</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-14">{service.overview}</p>

          <h2 className="font-display font-bold text-2xl md:text-3xl mb-3">What We Accept</h2>
          <p className="text-[var(--color-muted)] leading-relaxed mb-10 max-w-2xl">
            Every load is sorted into the right grade before weighing, so you're paid fairly for
            what you actually bring in.
          </p>

          <motion.div
            variants={container}
            
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {service.covered.map((c, i) => (
              <motion.div
                key={c.title}
                variants={item}
                className="relative overflow-hidden p-6 rounded-2xl bg-[var(--color-surface)] border border-white/5"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center scale-110 blur-lg opacity-20"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-[var(--color-bg)]/70" />
                <div className="relative z-10">
                  <span className="font-display font-bold text-[var(--color-primary)] text-sm">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display font-semibold text-lg mt-2 mb-2">{c.title}</h3>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]/40">
        <div className="container-px max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-14">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-5">Why It Matters</h2>
            <p className="text-[var(--color-muted)] leading-relaxed">{service.why}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-5">Benefits of Selling With Us</h2>
            <div className="flex flex-col gap-4">
              {service.benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
                  <span className="text-[var(--color-muted)] text-sm leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rate card + Enquiry form */}
      <section className="py-16 md:py-24">
        <div className="container-px grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden bg-[var(--color-surface)] border border-white/5"
          >
            <div className="h-48 overflow-hidden">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <h3 className="font-display font-bold text-xl mb-6">{service.title} — Today's Snapshot</h3>
              <div className="flex flex-col divide-y divide-white/5 text-sm">
                {[
                  ['Grade checked', 'On-site, in front of you'],
                  ['Weighing method', 'Calibrated digital scale'],
                  ['Payment', 'Cash / Bank transfer'],
                  ['Bulk pickup', 'Available, free of charge'],
                  ['Rate updates', 'Daily, market-linked'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-3">
                    <span className="text-[var(--color-muted)]">{k}</span>
                    <span className="font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <EnquiryForm />
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 md:py-24 bg-[var(--color-surface)]/40">
        <div className="container-px">
          <h2 className="font-display font-bold text-2xl md:text-3xl mb-10">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to={`/services/${r.slug}`}
                className="group flex items-center gap-5 p-5 rounded-2xl bg-[var(--color-bg)] border border-white/5 hover:border-[var(--color-primary)]/40 transition-colors"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wider">{r.tag}</span>
                  <h3 className="font-display font-semibold text-lg group-hover:text-[var(--color-primary)] transition-colors">
                    {r.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceDetail
