"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Flame, Star, TrendingUp } from 'lucide-react'

const bestSellers = [
  {
    id: 1,
    name: "Sate Taichan + Nasi Uduk",
    description: "Perpaduan sempurna sate taichan pedas gurih dengan nasi uduk Betawi yang pulen",
    price: "Rp27.000",
    badge: "FAVORIT",
    rating: 4.9,
    orders: "500+ terjual minggu ini",
    icon: "🍢🍚",
    image: "/images/paket-kombo.jpg",
  },
  {
    id: 2,
    name: "Nasi Uduk PSBR",
    description: "Paket lengkap dengan orek, bihun, semur tahu tempe, kerupuk, dan sambal merah",
    price: "Rp15.000",
    badge: "HEMAT",
    rating: 4.8,
    orders: "350+ terjual minggu ini",
    icon: "🍚",
    image: "/images/nasi-uduk-hero.jpg",
  },
  {
    id: 3,
    name: "Sate Taichan D.R.A",
    description: "10 tusuk sate taichan dengan bumbu rahasia D.R.A yang bikin ketagihan",
    price: "Rp20.000",
    badge: "PEDAS",
    rating: 4.9,
    orders: "400+ terjual minggu ini",
    icon: "🍢",
    image: "/images/sate-taichan-hero.jpg",
  },
]

export default function BestSellerSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="bestseller" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-betawi-charcoal via-betawi-charcoal-light/50 to-betawi-charcoal" />
      
      {/* Fire Glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-betawi-fire/10 blur-[150px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <TrendingUp size={16} className="text-betawi-gold" />
            <span className="text-betawi-gold text-sm font-semibold">Paling Laris</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-betawi-cream mb-4">
            Menu <span className="text-gradient-gold">Best Seller</span>
          </h2>
          <p className="text-betawi-cream/70 text-lg max-w-2xl mx-auto">
            Pilihan favorit warga malam yang selalu habis sebelum subuh
          </p>
        </motion.div>

        {/* Best Seller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {bestSellers.map((item, index) => (
            <motion.div
              key={item.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
            >
              {/* Glow Effect */}
              <motion.div 
                className="absolute inset-0 rounded-3xl bg-gradient-to-br from-betawi-gold/20 to-betawi-fire/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Card */}
              <div className="relative glass-gold rounded-3xl overflow-hidden h-full transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-betawi-gold/20">
                {/* Image */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-betawi-charcoal via-betawi-charcoal/50 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <motion.span 
                      className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-betawi-fire to-betawi-gold text-betawi-charcoal text-xs font-bold rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Flame size={12} className="animate-fire-flicker" />
                      {item.badge}
                    </motion.span>
                  </div>
                </div>

                <div className="p-6 lg:p-8">

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-serif font-bold text-betawi-cream mb-2 group-hover:text-betawi-gold transition-colors">
                  {item.name}
                </h3>
                <p className="text-betawi-cream/60 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-betawi-gold fill-betawi-gold" />
                    <span className="text-betawi-gold font-semibold text-sm">{item.rating}</span>
                  </div>
                  <span className="text-betawi-cream/40 text-xs">|</span>
                  <span className="text-betawi-cream/50 text-xs">{item.orders}</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl lg:text-3xl font-bold text-gradient-gold">
                    {item.price}
                  </span>
                  <motion.a
                    href="https://wa.me/628568768124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-betawi-gold/20 text-betawi-gold font-semibold text-sm rounded-full hover:bg-betawi-gold hover:text-betawi-charcoal transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Pesan
                  </motion.a>
                </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-betawi-gold">
                    <path d="M100 100 L100 0 Q50 50 0 100 Z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#menu"
            className="inline-flex items-center gap-2 text-betawi-gold hover:text-betawi-gold-bright transition-colors group"
            whileHover={{ x: 5 }}
          >
            Lihat menu lengkap lainnya
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
