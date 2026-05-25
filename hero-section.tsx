"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, Flame, MapPin } from 'lucide-react'

export default function HeroSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <section 
      id="beranda" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ scale }}
      >
        {/* Dark Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-b from-betawi-charcoal via-betawi-charcoal to-betawi-charcoal" />
        
        {/* Fire Glow Effect */}
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-betawi-fire/30 blur-[150px]"
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Green Accent */}
        <motion.div 
          className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full bg-betawi-green/20 blur-[100px]"
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Gold Accent */}
        <motion.div 
          className="absolute top-40 left-20 w-[200px] h-[200px] rounded-full bg-betawi-gold/20 blur-[80px]"
          animate={{ 
            opacity: [0.2, 0.3, 0.2],
            y: [0, -20, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-betawi-gold/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${60 + Math.random() * 40}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
                scale: [0, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Smoke Effects */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px]">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-20 h-32 bg-gradient-to-t from-betawi-cream/5 to-transparent rounded-full blur-xl"
              style={{
                left: `${20 + i * 10}%`,
              }}
              animate={{
                y: [0, -150, -300],
                x: [0, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 150],
                opacity: [0.3, 0.5, 0],
                scale: [1, 1.5, 2],
              }}
              transition={{
                duration: 6 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Betawi Ornament Decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Left Ondel-Ondel */}
        <motion.div 
          className="absolute -left-20 top-1/4 w-64 h-80 opacity-20"
          style={{ y }}
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <OndelOndel />
        </motion.div>

        {/* Right Ondel-Ondel */}
        <motion.div 
          className="absolute -right-20 top-1/3 w-64 h-80 opacity-20 scale-x-[-1]"
          style={{ y }}
          animate={{ rotate: [3, -3, 3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <OndelOndel />
        </motion.div>

        {/* Batik Pattern Left */}
        <motion.div 
          className="absolute left-0 bottom-0 w-96 h-96 opacity-5"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <BatikPattern />
        </motion.div>

        {/* Batik Pattern Right */}
        <motion.div 
          className="absolute right-0 top-40 w-64 h-64 opacity-5"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <BatikPattern />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ opacity }}
      >
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6"
        >
          <Flame size={16} className="text-betawi-fire animate-fire-flicker" />
          <span className="text-betawi-cream text-sm">Buka Setiap Malam</span>
          <span className="text-betawi-gold text-sm font-semibold">18:00 - 02:00 WIB</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <span className="text-betawi-cream">Nasi Uduk Betawi &</span>
          <br />
          <span className="text-gradient-gold">Sate Taichan</span>
          <br />
          <span className="text-betawi-cream text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Favorit Warga Malam
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-betawi-cream/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Cita rasa khas <span className="text-betawi-gold font-semibold">Betawi</span> dipadu sate taichan 
          <span className="text-betawi-fire font-semibold"> pedas gurih</span> yang bikin nagih.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.a
            href="https://wa.me/628568768124?text=Halo!%20Saya%20mau%20pesan%20Nasi%20Uduk%20Betawi%20%26%20Sate%20Taichan%20D.R.A"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-betawi-gold to-betawi-fire text-betawi-charcoal font-bold text-lg rounded-full animate-pulse-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Flame size={20} className="group-hover:animate-fire-flicker" />
              Siap Temenin Lapar Kamu
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-betawi-fire to-betawi-gold"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#menu"
            className="px-8 py-4 glass text-betawi-cream font-semibold rounded-full hover:bg-betawi-charcoal-light/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lihat Menu Lengkap
          </motion.a>
        </motion.div>

        {/* Location Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="inline-flex items-center gap-2 text-betawi-cream/60 text-sm"
        >
          <MapPin size={16} className="text-betawi-fire" />
          Ciledug, Tangerang
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-betawi-cream/50 text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} className="text-betawi-gold" />
        </motion.div>
      </motion.div>

      {/* Food Images - Floating with Real Images */}
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-2xl shadow-betawi-fire/20 hidden lg:block"
        initial={{ opacity: 0, x: -100, rotate: -10 }}
        animate={{ opacity: 1, x: 0, rotate: -5 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ y }}
        whileHover={{ scale: 1.05, rotate: 0 }}
      >
        <img 
          src="/images/nasi-uduk-hero.jpg" 
          alt="Nasi Uduk Betawi"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-betawi-charcoal/60 to-transparent" />
        <span className="absolute bottom-2 left-2 text-xs text-betawi-cream font-semibold bg-betawi-charcoal/80 px-2 py-1 rounded-full">
          Nasi Uduk
        </span>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-10 w-28 h-28 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-2xl shadow-betawi-fire/20 hidden lg:block"
        initial={{ opacity: 0, x: 100, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 5 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{ y }}
        whileHover={{ scale: 1.05, rotate: 0 }}
      >
        <img 
          src="/images/sate-taichan-hero.jpg" 
          alt="Sate Taichan D.R.A"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-betawi-charcoal/60 to-transparent" />
        <span className="absolute bottom-2 left-2 text-xs text-betawi-cream font-semibold bg-betawi-charcoal/80 px-2 py-1 rounded-full">
          Sate Taichan
        </span>
      </motion.div>

      {/* Additional floating food image - top right */}
      <motion.div
        className="absolute top-32 right-20 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl shadow-betawi-gold/20 hidden xl:block"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.9, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.8, type: "spring" }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-betawi-gold/40 to-betawi-fire/40 flex items-center justify-center">
          <motion.span 
            className="text-4xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🍳
          </motion.span>
        </div>
      </motion.div>
    </section>
  )
}

// Ondel-Ondel Component
function OndelOndel() {
  return (
    <svg viewBox="0 0 100 150" className="w-full h-full">
      {/* Head Circle */}
      <circle cx="50" cy="35" r="30" fill="#D97706" opacity="0.3" />
      {/* Face Details */}
      <circle cx="40" cy="30" r="5" fill="#1a1a1a" opacity="0.3" />
      <circle cx="60" cy="30" r="5" fill="#1a1a1a" opacity="0.3" />
      <ellipse cx="50" cy="45" rx="8" ry="5" fill="#DC2626" opacity="0.3" />
      {/* Crown/Headdress */}
      <path d="M20 25 L50 5 L80 25 L75 35 L50 25 L25 35 Z" fill="#D97706" opacity="0.4" />
      {/* Body */}
      <ellipse cx="50" cy="100" rx="35" ry="45" fill="#22572E" opacity="0.3" />
      {/* Decorative Pattern on Body */}
      <ellipse cx="50" cy="100" rx="25" ry="35" fill="none" stroke="#D97706" strokeWidth="2" opacity="0.3" />
      <circle cx="50" cy="80" r="8" fill="#D97706" opacity="0.3" />
      <circle cx="35" cy="100" r="5" fill="#D97706" opacity="0.3" />
      <circle cx="65" cy="100" r="5" fill="#D97706" opacity="0.3" />
    </svg>
  )
}

// Batik Pattern Component
function BatikPattern() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <pattern id="batik" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="10" cy="10" r="8" fill="none" stroke="#D97706" strokeWidth="0.5" />
        <circle cx="10" cy="10" r="4" fill="#D97706" opacity="0.3" />
        <path d="M0 10 L10 0 M10 20 L20 10" stroke="#22572E" strokeWidth="0.5" />
      </pattern>
      <rect width="100" height="100" fill="url(#batik)" />
    </svg>
  )
}
