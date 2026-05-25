"use client"

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import BestSellerSection from '@/components/best-seller-section'
import MenuSection from '@/components/menu-section'
import AboutSection from '@/components/about-section'
import DeliverySection from '@/components/delivery-section'
import LocationSection from '@/components/location-section'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import AudioPlayer from '@/components/audio-player'
import LoadingScreen from '@/components/loading-screen'

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <main className="relative min-h-screen bg-betawi-charcoal overflow-hidden">
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
      >
        {/* Hero */}
        <HeroSection />

        {/* Best Sellers */}
        <BestSellerSection />

        {/* Menu */}
        <MenuSection />

        {/* About */}
        <AboutSection />

        {/* Delivery */}
        <DeliverySection />

        {/* Location */}
        <LocationSection />

        {/* Footer */}
        <Footer />
      </motion.div>

      {/* Floating Elements */}
      <WhatsAppButton />
      <AudioPlayer />

      {/* Global Ambient Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-betawi-charcoal to-transparent" />
        
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-betawi-charcoal to-transparent" />
        
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,10,0.3)_100%)]" />
      </div>
    </main>
  )
}
