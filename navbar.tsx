"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X, MapPin, Clock } from 'lucide-react'

const navLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Menu', href: '#menu' },
  { name: 'Best Seller', href: '#bestseller' },
  { name: 'Tentang', href: '#tentang' },
  { name: 'Lokasi', href: '#lokasi' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('beranda')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Info Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 bg-betawi-green text-betawi-cream py-2 text-xs"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              18:00 - 02:00 WIB
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <MapPin size={12} />
              Ciledug, Tangerang
            </span>
          </div>
          <motion.span 
            className="text-betawi-gold font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Temenin Lapar Malam Kamu
          </motion.span>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'py-2' : 'py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between rounded-2xl transition-all duration-500 ${
            isScrolled ? 'glass px-6 py-3' : 'px-4 py-2'
          }`}>
            {/* Logo */}
            <Link href="#beranda" className="flex items-center gap-3 group">
              <motion.div 
                className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-betawi-gold to-betawi-fire flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-betawi-charcoal font-serif font-bold text-lg">NU</span>
                <div className="absolute inset-0 bg-gradient-to-t from-betawi-charcoal/20 to-transparent" />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="font-serif font-bold text-betawi-cream text-sm leading-tight">
                  Nasi Uduk Betawi
                </h1>
                <p className="text-betawi-gold text-xs">PO Subur X Sate Taichan</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 group"
                >
                  <span className={`relative z-10 text-sm font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-betawi-gold'
                      : 'text-betawi-cream/80 group-hover:text-betawi-cream'
                  }`}>
                    {link.name}
                  </span>
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-lg bg-betawi-charcoal-light"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <motion.a
                href="#menu"
                className="relative overflow-hidden px-6 py-2.5 bg-gradient-to-r from-betawi-gold to-betawi-fire text-betawi-charcoal font-semibold text-sm rounded-full group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Lihat Menu</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-betawi-fire to-betawi-gold"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden w-10 h-10 rounded-xl bg-betawi-charcoal-light flex items-center justify-center text-betawi-cream"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-betawi-charcoal/95 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="relative h-full flex flex-col items-center justify-center gap-6 p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
            >
              {/* Decorative Pattern */}
              <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
                <BetawiOrnament />
              </div>
              <div className="absolute bottom-20 right-10 w-32 h-32 opacity-10 rotate-180">
                <BetawiOrnament />
              </div>

              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-serif font-bold text-betawi-cream hover:text-betawi-gold transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.a
                href="https://wa.me/628568768124"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 px-8 py-4 bg-gradient-to-r from-betawi-gold to-betawi-fire text-betawi-charcoal font-bold text-lg rounded-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.5 }}
                whileTap={{ scale: 0.95 }}
              >
                Pesan Sekarang
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// Betawi Ornament SVG
function BetawiOrnament() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full fill-betawi-gold">
      <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
      <circle cx="50" cy="50" r="15" />
    </svg>
  )
}
