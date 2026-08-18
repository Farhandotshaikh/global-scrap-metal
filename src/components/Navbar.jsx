import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, MessageCircle, Sun, Moon, ChevronDown, MessageSquare, Phone } from 'lucide-react'
import { siteConfig, whatsappLink } from '../data/siteConfig'
import { services } from '../data/services'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = ({ theme, toggleTheme }) => {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isServicesPath = pathname === '/services' || pathname.startsWith('/services/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[var(--color-bg)]/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
    >
      <div className="container-px flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight">
          <img
            src={theme === 'dark' ? '/gsms-logo.png' : '/gsm-logo.png'}
            alt={siteConfig.brand}
            className="md:w-20 w-12 h-auto object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--color-text)] relative">
          {links.map(({ label, to }) => (
            label === 'Services' ? (
              <div key={to} className="relative group">
                <button
                  type="button"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className={`inline-flex text-lg items-center gap-1 hover:text-[var(--color-primary)] transition-colors ${isServicesPath ? 'text-[var(--color-primary)]' : ''}`}
                >
                  Services
                  <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                      className="absolute left-0 mt-3 w-60 rounded-3xl border border-white/5 bg-[var(--color-surface)] shadow-2xl p-4"
                    >
                      <div className="space-y-2">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="block rounded-2xl px-4 py-3 text-sm text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={to}
                to={to}
                className={`hover:text-[var(--color-primary)] transition-colors text-lg ${pathname === to ? 'text-[var(--color-primary)]' : ''}`}
              >
                {label}
              </Link>
            )
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-surface)] text-[var(--color-text)] shadow-sm transition hover:scale-105"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="hidden md:block">
            <a
              href={whatsappLink()}
              // target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-[var(--color-bg)] font-semibold text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition-all"
            >
              <MessageCircle size={16} />
              Get Quote
            </a>
            <a
              href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, '')}`}
              className="inline-flex items-center justify-center border border-white ml-2 px-4 py-2 rounded-full font-semibold hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] transition-all gap-2"
            >
              <Phone size={16} />
              {siteConfig.phoneDisplay}
            </a>
          </div>

          <button className="md:hidden text-[var(--color-text)]" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[var(--color-bg)] border-t border-white/5"
          >
            <div className="container-px py-6 flex flex-col gap-5 text-[var(--color-muted)]">
              <Link key="home" to="/" onClick={() => setOpen(false)} className="hover:text-[var(--color-primary)]">
                Home
              </Link>
              <Link key="about" to="/about" onClick={() => setOpen(false)} className="hover:text-[var(--color-primary)]">
                About
              </Link>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setServicesOpen((current) => !current)}
                  className="inline-flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition"
                >
                  <span>Services</span>
                  <ChevronDown size={18} className={`${servicesOpen ? 'rotate-180' : 'rotate-0'} transition-transform`} />
                </button>
                {servicesOpen && (
                  <div className="space-y-1 rounded-3xl border border-white/5 bg-[var(--color-surface)] p-3">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        onClick={() => {
                          setOpen(false)
                          setServicesOpen(false)
                        }}
                        className="block rounded-2xl px-4 py-3 text-sm text-[var(--color-text)] hover:bg-[var(--color-primary)]/10 hover:text-[var(--color-primary)] transition"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link key="contact" to="/contact" onClick={() => setOpen(false)} className="hover:text-[var(--color-primary)]">
                Contact
              </Link>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-surface)] px-4 py-3 text-sm font-medium text-[var(--color-text)]"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-[var(--color-bg)] font-semibold text-sm px-5 py-3 rounded-full"
              >
                <MessageCircle size={16} />
                Get Quote on WhatsApp
              </a>
              <a
                href={`tel:${siteConfig.phoneDisplay.replace(/\s/g, '')}`}
                className="inline-flex items-center justify-center border border-white ml-2 px-4 py-2 rounded-full font-semibold hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] transition-all gap-2"
              >
                <Phone size={16} />
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
