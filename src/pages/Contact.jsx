import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Scale, ShieldCheck, Truck, Zap, Star } from 'lucide-react'
import { services } from '../data/services'
import { siteConfig, whatsappLink } from '../data/siteConfig'
import EnquiryForm from '../components/EnquiryForm'
import MapSection from '../components/MapSection'

export default function Contact() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <img
                        src="https://cdn.prod.website-files.com/67434bc3f8cab15f2f07e714/688aeba94186718428297ae8_Industrila%20parks.png"
                        alt="Scrap metal warehouse"
                        className="w-full h-full object-cover opacity-45"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg)] via-[var(--color-bg)]/85 to-[var(--color-bg)]" /> */}
                </div>
                <div className="container-px max-w-3xl">
                    <p className="text-[var(--color-primary)] font-semibold text-md tracking-widest uppercase mb-4">
                        Get In Touch
                    </p>
                    <h1 className="font-display font-bold text-4xl md:text-6xl leading-tight">
                        Your Trusted Partner in Metal Recycling & Scrap Solutions
                    </h1>
                </div>
            </section>

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
                        <EnquiryForm />
                    </div>
                </div>
            </section>
        </>
    )
}