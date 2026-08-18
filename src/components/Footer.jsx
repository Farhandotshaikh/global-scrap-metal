import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '../data/siteConfig'
import { services } from '../data/services'

const Footer = ({ theme }) => {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-white/5 pt-16">
      <div className="container-px grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-xl mb-4">
            <img
              src={theme === 'dark' ? '/gsms-logo-f.png' : '/gsm-logo-f.png'}
              alt={siteConfig.brand}
              className="w-[250px] h-[150px] object-cover"
            />
          </div>
          <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-5">
            Fair rates, honest weighing, and fast payment for every load of scrap metal —
            from a single copper coil to full industrial tonnage.
          </p>
          <div className="flex gap-4">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-primary)]">
              <Facebook size={18} />
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-primary)]">
              <Instagram size={18} />
            </a>
            {/* <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--color-muted)] hover:text-[var(--color-primary)]">
              <Linkedin size={18} />
            </a> */}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[var(--color-muted)] mb-4">
            Navigation
          </h4>
          <div className="flex flex-col gap-3 text-sm">
            <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <Link to="/about" className="hover:text-[var(--color-primary)] transition-colors">About</Link>
            <Link to="/services" className="hover:text-[var(--color-primary)] transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-[var(--color-primary)] transition-colors">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[var(--color-muted)] mb-4">
            Services
          </h4>
          <div className="flex gap-4">
            <div className="flex flex-col gap-3 text-sm">
              {services.slice(0, 5).map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="hover:text-[var(--color-primary)] transition-colors">
                  {s.title}
                </Link>
              ))}
            </div>
            {/* <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[var(--color-muted)] mb-4">
            Services
          </h4> */}
            <div className="flex flex-col gap-3 text-sm">
              {services.slice(5, 10).map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="hover:text-[var(--color-primary)] transition-colors">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

        </div>

        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-[var(--color-muted)] mb-4">
            Get In Touch
          </h4>
          <div className="flex flex-col gap-3 text-sm text-[var(--color-muted)]">
            <a href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
              <Phone size={15} /> {siteConfig.phoneDisplay}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 hover:text-[var(--color-primary)] transition-colors">
              <Mail size={15} /> {siteConfig.email}
            </a>
            <div className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0" /> {siteConfig.address}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="container-px flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} {siteConfig.brand}. All Rights Reserved. <span>Designed by <a href="https://recollectix.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary)] transition-colors">
            Recollectix Media Pvt Ltd
          </a></span></p>
          <p>Licensed scrap metal dealer &amp; recycler.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
