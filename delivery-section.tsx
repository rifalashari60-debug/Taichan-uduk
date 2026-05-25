"use client"

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Truck, ExternalLink } from 'lucide-react'

const deliveryApps = [
  {
    name: "GoFood",
    color: "from-green-600 to-green-500",
    icon: "🛵",
    url: "#",
  },
  {
    name: "GrabFood",
    color: "from-green-500 to-green-400",
    icon: "🏍️",
    url: "#",
  },
  {
    name: "ShopeeFood",
    color: "from-orange-600 to-orange-500",
    icon: "🛒",
    url: "#",
  },
]

export default function DeliverySection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-betawi-green/20 via-betawi-charcoal to-betawi-fire/20" />

      <div className="container mx-auto px-4 relative z-10" ref={containerRef}>
        <motion.div 
          className="glass-gold rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-betawi-charcoal/50 mb-4">
                <Truck size={16} className="text-betawi-gold" />
                <span className="text-betawi-cream text-sm font-semibold">Pesan Online</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-betawi-cream mb-2">
                Pesan Lewat <span className="text-gradient-gold">Aplikasi Favorit</span>
              </h3>
              <p className="text-betawi-cream/60 max-w-md">
                Gak perlu keluar rumah, tinggal pesan dan tunggu makanannya sampai
              </p>
            </motion.div>

            {/* Right - Delivery Buttons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              {deliveryApps.map((app, index) => (
                <motion.a
                  key={app.name}
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden px-6 py-4 bg-gradient-to-r ${app.color} rounded-2xl min-w-[140px] text-center transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl block mb-1">{app.icon}</span>
                  <span className="text-white font-bold text-sm flex items-center justify-center gap-1">
                    {app.name}
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
