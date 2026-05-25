"use client"

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = "628568768124"
  const message = encodeURIComponent("Halo! Saya mau pesan Nasi Uduk Betawi & Sate Taichan D.R.A")
  
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Order via WhatsApp"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      
      {/* Main Button */}
      <div className="relative flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-3 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 group-hover:shadow-green-500/50 group-hover:shadow-xl">
        <div className="relative">
          <MessageCircle size={24} fill="white" />
          {/* Notification Dot */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-betawi-fire rounded-full border-2 border-green-500 animate-pulse" />
        </div>
        
        <motion.span 
          className="font-semibold text-sm hidden sm:block overflow-hidden whitespace-nowrap"
          initial={{ width: 0 }}
          animate={{ width: "auto" }}
          transition={{ delay: 1.5, duration: 0.3 }}
        >
          Pesan Sekarang
        </motion.span>
      </div>
      
      {/* Tooltip */}
      <motion.div
        className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-betawi-charcoal-light text-betawi-cream text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none"
        initial={{ y: 10 }}
        whileHover={{ y: 0 }}
      >
        <div className="absolute -bottom-1 right-4 w-2 h-2 bg-betawi-charcoal-light rotate-45" />
        Order via WhatsApp
      </motion.div>
    </motion.a>
  )
}
