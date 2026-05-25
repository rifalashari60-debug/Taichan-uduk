"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react'

const footerLinks = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Menu', href: '#menu' },
  { name: 'Best Seller', href: '#bestseller' },
  { name: 'Tentang', href: '#tentang' },
  { name: 'Lokasi', href: '#lokasi' },
]

export default function Footer() {
  return (
    <footer className="relative bg-betawi-charcoal border-t border-betawi-charcoal-light overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <pattern id="footerPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="20" fill="none" stroke="#D97706" strokeWidth="0.5" />
            <circle cx="30" cy="30" r="10" fill="#D97706" opacity="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footerPattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#beranda" className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-betawi-gold to-betawi-fire flex items-center justify-center">
                <span className="text-betawi-charcoal font-serif font-bold text-lg">NU</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-betawi-cream text-sm">Nasi Uduk Betawi</h3>
                <p className="text-betawi-gold text-xs">PO Subur X Sate Taichan D.R.A</p>
              </div>
            </Link>
            <p className="text-betawi-cream/50 text-sm leading-relaxed mb-4">
              Temenin Lapar Malam Kamu dengan cita rasa autentik Betawi
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <motion.a
                href="#"
                className="w-10 h-10 rounded-xl bg-betawi-charcoal-light flex items-center justify-center text-betawi-cream/50 hover:text-betawi-gold hover:bg-betawi-charcoal transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 rounded-xl bg-betawi-charcoal-light flex items-center justify-center text-betawi-cream/50 hover:text-betawi-gold hover:bg-betawi-charcoal transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-betawi-cream mb-4">Menu</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-betawi-cream/50 hover:text-betawi-gold text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-betawi-cream mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-betawi-fire mt-1 flex-shrink-0" />
                <span className="text-betawi-cream/50 text-sm">
                  Jl Lembang 2 Dalem RT01/08, Sudimara Barat, Ciledug, Tangerang
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-betawi-gold flex-shrink-0" />
                <span className="text-betawi-cream/50 text-sm">18:00 - 02:00 WIB</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-green-500 flex-shrink-0" />
                <span className="text-betawi-cream/50 text-sm">0856-8768-124</span>
              </li>
            </ul>
          </div>

          {/* Order */}
          <div>
            <h4 className="font-semibold text-betawi-cream mb-4">Pesan Sekarang</h4>
            <p className="text-betawi-cream/50 text-sm mb-4">
              Lapar tengah malam? Langsung hubungi kami!
            </p>
            <motion.a
              href="https://wa.me/628568768124"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold text-sm rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={16} />
              WhatsApp
            </motion.a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-betawi-charcoal-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-betawi-cream/40 text-sm text-center sm:text-left">
            © 2024 Nasi Uduk Betawi PO Subur X Sate Taichan D.R.A. All rights reserved.
          </p>
          <p className="text-betawi-cream/40 text-sm flex items-center gap-1">
            Dibuat dengan <Heart size={14} className="text-betawi-fire" fill="currentColor" /> di Jakarta
          </p>
        </div>
      </div>
    </footer>
  )
}
