"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] bg-betawi-charcoal flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo Animation */}
          <motion.div
            className="relative mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Glow Effect */}
            <motion.div 
              className="absolute inset-0 w-24 h-24 rounded-2xl bg-betawi-fire/30 blur-xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            
            {/* Logo */}
            <motion.div 
              className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-betawi-gold to-betawi-fire flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-betawi-charcoal font-serif font-bold text-4xl">NU</span>
            </motion.div>
          </motion.div>

          {/* Brand Name */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-xl font-serif font-bold text-betawi-cream mb-1">
              Nasi Uduk Betawi
            </h1>
            <p className="text-betawi-gold text-sm">PO Subur X Sate Taichan D.R.A</p>
          </motion.div>

          {/* Loading Bar */}
          <motion.div 
            className="w-48 h-1 bg-betawi-charcoal-light rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div 
              className="h-full bg-gradient-to-r from-betawi-gold to-betawi-fire rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Loading Text */}
          <motion.p 
            className="mt-4 text-betawi-cream/50 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Menyiapkan hidangan...
          </motion.p>

          {/* Floating Food Icons */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {['🍚', '🍢', '🥟', '🍳', '🥤'].map((emoji, i) => (
              <motion.span
                key={i}
                className="absolute text-3xl opacity-20"
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${30 + (i % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [-10, 10, -10],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
