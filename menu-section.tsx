"use client"

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronRight, Flame, Plus, Minus, ShoppingBag } from 'lucide-react'

interface MenuItem {
  name: string
  description?: string
  price: string
  isBestSeller?: boolean
  isNew?: boolean
  isSpicy?: boolean
  options?: { name: string; price: string }[]
}

interface MenuCategory {
  id: string
  name: string
  icon: string
  description: string
  items: MenuItem[]
}

const menuData: MenuCategory[] = [
  {
    id: "nasi-uduk",
    name: "Nasi Uduk Betawi",
    icon: "🍚",
    description: "Hidangan khas Betawi dengan cita rasa autentik",
    items: [
      {
        name: "Nasi Uduk PSBR",
        description: "Nasi uduk, orek, bihun, semur tahu tempe, kerupuk, sambal merah",
        price: "Rp15.000",
        isBestSeller: true,
      },
      {
        name: "Nasi Uduk Polos",
        description: "Nasi uduk, taburan bawang goreng, kerupuk",
        price: "Rp6.000",
      },
      {
        name: "Nasi Uduk Semur",
        description: "Semur tahu/tempe, sambal, kerupuk, taburan bawang goreng",
        price: "Rp8.000",
      },
      {
        name: "Nasi Uduk Komplit",
        description: "Semur tahu/tempe, orek, bihun, sambal merah, taburan bawang goreng, kerupuk",
        price: "Rp13.000",
      },
      {
        name: "Ketupat / Lontong Sayur",
        price: "Rp8.000",
        options: [
          { name: "Semur Tahu", price: "+Rp3.000" },
          { name: "Semur Tempe", price: "+Rp3.000" },
          { name: "Semur Telor", price: "+Rp5.000" },
          { name: "Semur Kentang", price: "+Rp3.000" },
          { name: "Semur Jengkol", price: "+Rp5.000" },
        ],
      },
    ],
  },
  {
    id: "sate-taichan",
    name: "Sate Taichan D.R.A",
    icon: "🍢",
    description: "Sate ayam pedas dengan bumbu rahasia D.R.A",
    items: [
      {
        name: "Sate Taichan D.R.A",
        description: "10 tusuk sate taichan dengan bumbu khas",
        price: "Rp20.000",
        isSpicy: true,
      },
      {
        name: "Sate Taichan Prime D.R.A",
        description: "10 tusuk dengan daging ayam pilihan berkualitas",
        price: "Rp25.000",
        isSpicy: true,
        isNew: true,
      },
      {
        name: "Sate Taichan Kulit",
        description: "Sate kulit ayam yang gurih dan crispy",
        price: "Rp23.000",
        isSpicy: true,
      },
    ],
  },
  {
    id: "paket-hemat",
    name: "Paket Hemat",
    icon: "💰",
    description: "Kombinasi hemat yang bikin kenyang dan puas",
    items: [
      {
        name: "Sate Taichan D.R.A + Lontong",
        description: "Sate taichan dengan lontong hangat",
        price: "Rp23.000",
      },
      {
        name: "Sate Taichan + Indomie",
        description: "Perpaduan sate taichan dengan Indomie favorit",
        price: "Rp30.000",
      },
      {
        name: "Sate Taichan + Nasi Uduk",
        description: "Kombinasi favorit warga malam",
        price: "Rp27.000",
        isBestSeller: true,
      },
      {
        name: "Nasi Uduk + Ayam Goreng",
        description: "Nasi uduk lengkap dengan ayam goreng",
        price: "Rp22.000",
      },
    ],
  },
  {
    id: "lauk",
    name: "Pilihan Lauk",
    icon: "🍳",
    description: "Lauk pelengkap untuk nasi uduk kamu",
    items: [
      { name: "Telor Balado", price: "Rp5.000" },
      { name: "Semur Telor", price: "Rp5.000" },
      { name: "Kentang Balado", price: "Rp5.000" },
      { name: "Orek Tempe", price: "Rp3.500" },
      { name: "Bihun Goreng", price: "Rp3.500" },
      { name: "Semur Tahu", price: "Rp2.500" },
      { name: "Semur Tempe", price: "Rp2.500" },
      { name: "Semur Kentang", price: "Rp3.000" },
      { name: "Terong Balado", price: "Rp5.000" },
      { name: "Ayam Goreng", price: "Rp15.000", isBestSeller: true },
    ],
  },
  {
    id: "gorengan",
    name: "Gorengan",
    icon: "🥟",
    description: "Gorengan panas untuk teman makan",
    items: [
      { name: "Tahu Isi", price: "Rp2.000/pcs" },
      { name: "Tempe Goreng", price: "Rp2.000/pcs" },
      { name: "Bakwan", price: "Rp2.000/pcs" },
    ],
  },
  {
    id: "minuman",
    name: "Minuman",
    icon: "🥤",
    description: "Minuman segar pelepas dahaga",
    items: [
      { name: "Es Teh Manis", price: "Rp5.000" },
      { name: "All Nutrisari", price: "Rp5.000" },
      { name: "Es Telang Lemonade", price: "Rp6.000", isNew: true },
      { name: "All Varian Kopi", price: "Rp5.000" },
    ],
  },
]

export default function MenuSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("nasi-uduk")
  const [expandedOptions, setExpandedOptions] = useState<string | null>(null)

  const activeData = menuData.find((cat) => cat.id === activeCategory)

  return (
    <section id="menu" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-betawi-charcoal betawi-pattern" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-betawi-charcoal to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-betawi-charcoal to-transparent z-10" />

      <motion.div 
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-betawi-green/10 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-20" ref={containerRef}>
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-green mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <ShoppingBag size={16} className="text-betawi-green-light" />
            <span className="text-betawi-cream text-sm font-semibold">Menu Lengkap</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-betawi-cream mb-4">
            Pilih <span className="text-gradient-gold">Menu</span> Favorit
          </h2>
          <p className="text-betawi-cream/70 text-lg max-w-2xl mx-auto">
            Dari nasi uduk Betawi hingga sate taichan pedas, semuanya siap temenin lapar malam kamu
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          {menuData.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-betawi-gold to-betawi-fire text-betawi-charcoal'
                  : 'glass text-betawi-cream hover:text-betawi-gold'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                <span className="hidden sm:inline">{category.name}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Content */}
        <AnimatePresence mode="wait">
          {activeData && (
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category Info */}
              <div className="text-center mb-8">
                <span className="text-5xl mb-4 block">{activeData.icon}</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-betawi-cream mb-2">
                  {activeData.name}
                </h3>
                <p className="text-betawi-cream/60">{activeData.description}</p>
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 max-w-6xl mx-auto">
                {activeData.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="group"
                  >
                    <div className="relative glass rounded-2xl p-5 h-full transition-all duration-300 hover:bg-betawi-charcoal-light/50 hover:border-betawi-gold/30">
                      {/* Badges */}
                      <div className="flex gap-2 mb-3 flex-wrap">
                        {item.isBestSeller && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-betawi-gold to-betawi-fire text-betawi-charcoal text-xs font-bold rounded-full">
                            <Flame size={10} />
                            BEST SELLER
                          </span>
                        )}
                        {item.isNew && (
                          <span className="px-2 py-1 bg-betawi-green text-betawi-cream text-xs font-bold rounded-full">
                            BARU
                          </span>
                        )}
                        {item.isSpicy && (
                          <span className="px-2 py-1 bg-betawi-fire/20 text-betawi-fire text-xs font-bold rounded-full">
                            🌶️ PEDAS
                          </span>
                        )}
                      </div>

                      {/* Name & Description */}
                      <h4 className="text-lg font-semibold text-betawi-cream mb-1 group-hover:text-betawi-gold transition-colors">
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="text-betawi-cream/50 text-sm mb-3 leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {/* Options */}
                      {item.options && (
                        <div className="mb-3">
                          <button
                            onClick={() => setExpandedOptions(expandedOptions === item.name ? null : item.name)}
                            className="flex items-center gap-2 text-betawi-gold text-sm font-medium"
                          >
                            {expandedOptions === item.name ? <Minus size={14} /> : <Plus size={14} />}
                            Pilihan Tambahan
                          </button>
                          <AnimatePresence>
                            {expandedOptions === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="mt-2 space-y-1 pl-4 border-l-2 border-betawi-gold/30">
                                  {item.options.map((opt) => (
                                    <div key={opt.name} className="flex justify-between text-sm">
                                      <span className="text-betawi-cream/60">{opt.name}</span>
                                      <span className="text-betawi-gold">{opt.price}</span>
                                    </div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}

                      {/* Price & Order */}
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-betawi-charcoal-light/50">
                        <span className="text-xl font-bold text-gradient-gold">{item.price}</span>
                        <motion.a
                          href="https://wa.me/628568768124"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-betawi-cream/60 hover:text-betawi-gold text-sm transition-colors"
                          whileHover={{ x: 3 }}
                        >
                          Pesan <ChevronRight size={14} />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Order CTA */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://wa.me/628568768124?text=Halo!%20Saya%20mau%20pesan%20menu%20dari%20Nasi%20Uduk%20Betawi%20%26%20Sate%20Taichan%20D.R.A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-betawi-gold to-betawi-fire text-betawi-charcoal font-bold rounded-full animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingBag size={20} />
            Pesan Sekarang via WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
