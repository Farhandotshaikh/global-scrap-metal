import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { services } from '../data/services'
import { siteConfig } from '../data/siteConfig'

const EnquiryForm = () => {
  const [form, setForm] = useState({ name: '', phone: '', metal: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = `New scrap enquiry from ${siteConfig.brand} website:
Name: ${form.name}
Phone: ${form.phone}
Metal type: ${form.metal || 'Not specified'}
Message: ${form.message || 'None'}`
    const smsUrl = `sms:${siteConfig.phoneDisplay.replace(/\s/g, '')}?body=${encodeURIComponent(text)}`
    window.open(smsUrl, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="bg-[var(--color-surface)] rounded-3xl p-8 md:p-10 border border-white/5"
    >
      <h3 className="font-display font-bold text-2xl mb-1">Get your free scrap quote</h3>
      <p className="text-[var(--color-muted)] text-sm mb-8">
        Tell us what you're scrapping — we'll confirm today's rate on WhatsApp within minutes.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label className="block text-xs font-medium text-[var(--color-muted)] mb-2">Full Name *</label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-[var(--color-muted)]"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[var(--color-muted)] mb-2">Phone Number *</label>
          <input
            required
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+61 000 000 000"
            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-[var(--color-muted)]"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-xs font-medium text-[var(--color-muted)] mb-2">Metal Type *</label>
        <select
          required
          name="metal"
          value={form.metal}
          onChange={handleChange}
          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm text-[var(--color-text)]"
        >
          <option value="" className="bg-black text-[var(--color-primary)]">Select scrap type...</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title} className="bg-black text-[var(--color-primary)]">{s.title}</option>
          ))}
          <option value="Not sure / Mixed" className="bg-black text-[var(--color-primary)]">Not sure / Mixed load</option>
        </select>
      </div>

      <div className="mb-7">
        <label className="block text-xs font-medium text-[var(--color-muted)] mb-2">Message (Optional)</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="Approx. quantity, pickup location, etc."
          className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-[var(--color-muted)] resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-[var(--color-bg)] font-semibold text-sm px-6 py-3.5 rounded-xl hover:brightness-110 transition-all"
      >
        {submitted ? (
          <>
            <CheckCircle2 size={18} /> Opening SMS...
          </>
        ) : (
          <>
            <Send size={16} /> Send an Enquiry
          </>
        )}
      </button>
    </motion.form>
  )
}

export default EnquiryForm
