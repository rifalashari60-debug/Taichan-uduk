"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Clock, MapPin, Utensils, Star, Users } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: "Sambal Merah Khas",
    description: "Resep turun-temurun dengan cita rasa autentik Betawi",
  },
  {
    icon: Utensils,
    title: "Cita Rasa Betawi Autentik",
    description: "Bumbu dan rempah pilihan untuk kenikmatan maksimal",
  },
  {
    icon: Clock,
    title: "Buka Sampai Malam",
    description: "Siap temenin lapar kamu dari sore hingga subuh",
  },
  {
    icon: Star,
    title: "Harga Bersahabat",
    description: "Porsi puas dengan harga yang ramah di kantong",
  },
  {
    icon: Users,
    title: "Porsi Puas",
    description: "Dijamin kenyang dan puas setiap porsinya",
  },
  {
    icon: MapPin,
    title: "Cocok Nongkrong",
    description: "Tempat nyaman buat makan malam bareng teman",
  },
]

export default function AboutSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="tentang" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-betawi-charcoal via-betawi-charcoal-light/30 to-betawi-charcoal" />
      
      {/* Decorative Glows */}
      <motion.div 
        className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-betawi-green/10 blur-[150px]"
        animate={{ x: [-50, 50, -50], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-0 w-[300px] h-[300px] rounded-full bg-betawi-gold/10 blur-[100px]"
        animate={{ x: [50, -50, 50], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Ondel-Ondel Decoration */}
      <div className="absolute right-0 top-20 w-48 h-64 opacity-10 pointer-events-none hidden xl:block">
        <motion.div
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <OndelOndel />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Heart size={16} className="text-betawi-fire" />
              <span className="text-betawi-cream text-sm font-semibold">Cerita Kami</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-betawi-cream mb-6 leading-tight">
              Dari Cinta untuk{' '}
              <span className="text-gradient-gold">Kuliner Betawi</span>
            </h2>

            <div className="space-y-4 text-betawi-cream/70 leading-relaxed">
              <p>
                Berawal dari kecintaan terhadap kuliner Betawi dan street food malam Jakarta, 
                saya mencoba mengembangkan cita rasa khas dengan versi dan ciri khas saya sendiri.
              </p>
              <p>
                <span className="text-betawi-gold font-semibold">Nasi uduk</span> sendiri memang 
                sudah menjadi bagian dari keluarga kami sejak dulu karena orang tua saya pernah 
                berjualan nasi uduk. Dari situ muncul keinginan untuk membangun kembali kuliner 
                ini dengan konsep yang lebih modern dan cocok di era sekarang.
              </p>
              <p>
                Dipadukan dengan <span className="text-betawi-fire font-semibold">sate taichan khas D.R.A</span>, 
                kami ingin menghadirkan pengalaman kuliner malam yang autentik, hangat, dan bikin nagih.
              </p>
            </div>

            {/* Signature */}
            <motion.div 
              className="mt-8 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-betawi-gold to-betawi-fire flex items-center justify-center">
                <span className="text-2xl font-serif font-bold text-betawi-charcoal">PS</span>
              </div>
              <div>
                <p className="font-serif font-bold text-betawi-cream">PO Subur & D.R.A</p>
                <p className="text-betawi-gold text-sm">Founder & Head Chef</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-bold text-betawi-cream mb-8 text-center lg:text-left">
              Kenapa Harus <span className="text-gradient-gold">Cobain?</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div className="glass rounded-2xl p-5 h-full transition-all duration-300 hover:bg-betawi-charcoal-light/50 hover:border-betawi-gold/30">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-betawi-gold/20 to-betawi-fire/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon size={24} className="text-betawi-gold" />
                    </div>
                    <h4 className="font-semibold text-betawi-cream mb-2 group-hover:text-betawi-gold transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-betawi-cream/50 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Banner */}
        <motion.div 
          className="mt-20 glass-gold rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "5+", label: "Tahun Pengalaman" },
              { value: "1000+", label: "Pelanggan Puas" },
              { value: "20+", label: "Menu Pilihan" },
              { value: "4.9", label: "Rating Pelanggan" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-betawi-cream/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Ondel-Ondel SVG Component
function OndelOndel() {
  return (
    <svg viewBox="0 0 100 150" className="w-full h-full">
      <circle cx="50" cy="35" r="30" fill="#D97706" opacity="0.4" />
      <circle cx="40" cy="30" r="5" fill="#1a1a1a" opacity="0.4" />
      <circle cx="60" cy="30" r="5" fill="#1a1a1a" opacity="0.4" />
      <ellipse cx="50" cy="45" rx="8" ry="5" fill="#DC2626" opacity="0.4" />
      <path d="M20 25 L50 5 L80 25 L75 35 L50 25 L25 35 Z" fill="#D97706" opacity="0.5" />
      <ellipse cx="50" cy="100" rx="35" ry="45" fill="#22572E" opacity="0.4" />
      <ellipse cx="50" cy="100" rx="25" ry="35" fill="none" stroke="#D97706" strokeWidth="2" opacity="0.4" />
      <circle cx="50" cy="80" r="8" fill="#D97706" opacity="0.4" />
    </svg>
  )
}
