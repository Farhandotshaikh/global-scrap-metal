// ⚠️ EDIT THESE VALUES with your real business details before deploying.

export const siteConfig = {
  brand: 'Global Scrap Metal Sydney',
  brandShort: 'GSMS',
  tagline: 'Scrap Metal Recycling Sydney NSW - Global Scrap Metal',
  phoneDisplay: '+61 430 209 243',
  // Used for the WhatsApp "Get Quote" button — digits only, country code first, no + or spaces.
  whatsappNumber: '61430209243',
  whatsappDefaultMessage: "Hi Global Scrap Metal Sydney, I'd like a quote for my scrap.",
  email: 'globalscrapmetalsyd@gmail.com',
  address: 'Strathfield NSW 2135, Australia',
  // Replace with your exact location — go to Google Maps, search your address,
  // click Share > Embed a map, and paste the src URL below.
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26499.27268827296!2d151.06048596217758!3d-33.87911665684808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb179ba3a761%3A0x5017d681632cc60!2sStrathfield%20NSW%202135%2C%20Australia!5e0!3m2!1sen!2sin!4v1785909993993!5m2!1sen!2sin',
  hours: 'Mon – Sun: 9:00 AM – 7:00 PM',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://www.instagram.com/global.scrapmetal/',
    // linkedin: 'https://linkedin.com',
  },
}

export const whatsappLink = (message) =>
  `sms:${siteConfig.phoneDisplay.replace(/\s/g, '')}?body=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`
