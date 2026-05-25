"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Clock, Phone, Navigation, MessageCircle } from 'lucide-react'

export default function LocationSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="lokasi" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-betawi-charcoal" />
      
      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-0 left-1/4 w-[500px] h-[300px] rounded-full bg-betawi-fire/10 blur-[150px]"
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <MapPin size={16} className="text-betawi-fire" />
            <span className="text-betawi-cream text-sm font-semibold">Temukan Kami</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-betawi-cream mb-4">
            Lokasi & <span className="text-gradient-gold">Kontak</span>
          </h2>
          <p className="text-betawi-cream/70 text-lg max-w-2xl mx-auto">
            Datang langsung atau hubungi kami untuk pesan antar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-square">
              {/* Map Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-betawi-charcoal-light to-betawi-charcoal">
                {/* Stylized Map Grid */}
                <div className="absolute inset-0 opacity-20">
                  <svg className="w-full h-full">
                    <pattern id="mapGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M40 0 L0 0 0 40" fill="none" stroke="#D97706" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#mapGrid)" />
                  </svg>
                </div>

                {/* Road Lines */}
                <motion.div 
                  className="absolute top-1/3 left-0 right-0 h-4 bg-betawi-charcoal-light opacity-50"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
                <motion.div 
                  className="absolute left-1/3 top-0 bottom-0 w-4 bg-betawi-charcoal-light opacity-50"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ delay: 0.6, duration: 0.8 }}
                />

                {/* Location Pin */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0, y: -50 }}
                  animate={isInView ? { scale: 1, y: 0 } : {}}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                >
                  <div className="relative">
                    {/* Pin Glow */}
                    <motion.div 
                      className="absolute inset-0 w-20 h-20 rounded-full bg-betawi-fire/30 blur-xl"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Pin */}
                    <div className="relative w-16 h-16 bg-gradient-to-br from-betawi-gold to-betawi-fire rounded-full flex items-center justify-center shadow-lg shadow-betawi-fire/50">
                      <MapPin size={32} className="text-betawi-charcoal" />
                    </div>
                    
                    {/* Pin Shadow */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-2 bg-black/30 rounded-full blur-sm" />
                  </div>
                </motion.div>

                {/* Area Label */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 }}
                >
                  <div className="glass-gold rounded-xl p-4">
                    <p className="text-betawi-cream font-semibold text-sm">📍 Ciledug, Tangerang</p>
                    <p className="text-betawi-cream/60 text-xs">Klik untuk buka Google Maps</p>
                  </div>
                </motion.div>
              </div>

              {/* Clickable Overlay */}
              <a 
                href="https://maps.google.com/?q=Jl+Lembang+2+Dalem+RT01/08+Sudimara+Barat+Ciledug+Tangerang"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 cursor-pointer group"
              >
                <div className="absolute inset-0 bg-betawi-gold/0 group-hover:bg-betawi-gold/10 transition-colors flex items-center justify-center">
                  <motion.div 
                    className="opacity-0 group-hover:opacity-100 transition-opacity glass rounded-full px-6 py-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-betawi-cream font-semibold flex items-center gap-2">
                      <Navigation size={16} />
                      Buka di Google Maps
                    </span>
                  </motion.div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            {/* Address */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-betawi-fire/20 to-betawi-gold/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={28} className="text-betawi-fire" />
                </div>
                <div>
                  <h4 className="font-semibold text-betawi-cream mb-2 text-lg">Alamat Lengkap</h4>
                  <p className="text-betawi-cream/70 leading-relaxed">
                    Jl Lembang 2 Dalem RT01/08<br />
                    Sudimara Barat, Ciledug<br />
                    Kota Tangerang
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-betawi-gold/20 to-betawi-fire/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={28} className="text-betawi-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-betawi-cream mb-2 text-lg">Jam Operasional</h4>
                  <p className="text-betawi-cream/70">
                    Setiap Hari
                  </p>
                  <p className="text-2xl font-bold text-gradient-gold mt-1">
                    18:00 — 02:00 WIB
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600/20 to-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={28} className="text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-betawi-cream mb-2 text-lg">WhatsApp</h4>
                  <p className="text-2xl font-bold text-betawi-cream">
                    0856-8768-124
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://wa.me/628568768124?text=Halo!%20Saya%20mau%20pesan%20Nasi%20Uduk%20Betawi%20%26%20Sate%20Taichan%20D.R.A"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white font-bold rounded-2xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={20} />
                Chat WhatsApp
              </motion.a>
              
              <motion.a
                href="https://maps.google.com/?q=Jl+Lembang+2+Dalem+RT01/08+Sudimara+Barat+Ciledug+Tangerang"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-4 glass text-betawi-cream font-semibold rounded-2xl hover:bg-betawi-charcoal-light/50 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Navigation size={20} />
                Google Maps
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
