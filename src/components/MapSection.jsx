import { motion } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'

const MapSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl overflow-hidden border border-white/5 bg-[var(--color-surface)]"
    >
      <iframe
        title="Yard Location"
        src={siteConfig.mapEmbedSrc}
        width="100%"
        height="400"
        style={{ border: 0, display: 'block' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-5 text-sm">
        <div className="flex items-start gap-2">
          <MapPin size={16} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
          <span className="text-[var(--color-muted)]">{siteConfig.address}</span>
        </div>
        <div className="flex items-start gap-2">
          <Clock size={16} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
          <span className="text-[var(--color-muted)]">{siteConfig.hours}</span>
        </div>
        <div className="flex items-start gap-2">
          <Phone size={16} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
          <span className="text-[var(--color-muted)]">{siteConfig.phoneDisplay}</span>
        </div>
      </div>
    </motion.div>
  )
}

export default MapSection
