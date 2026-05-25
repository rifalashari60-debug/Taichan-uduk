"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Volume2, VolumeX, Pause, Play } from 'lucide-react'

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    // Create audio element with Gambang Kromong style ambient sound
    if (audioRef.current) {
      audioRef.current.volume = 0.3
      audioRef.current.loop = true
    }
  }, [])

  const togglePlay = () => {
    if (!hasInteracted) setHasInteracted(true)
    
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          // Handle autoplay restriction
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      {/* Audio element - using a royalty-free traditional Indonesian music URL */}
      <audio 
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
        preload="auto"
      />
      
      <motion.div 
        className="fixed bottom-24 left-4 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <motion.div
          className="glass-gold rounded-full overflow-hidden"
          animate={{ width: isExpanded ? 'auto' : 48 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center gap-2 p-2">
            {/* Play/Pause Button */}
            <motion.button
              onClick={togglePlay}
              className="w-8 h-8 rounded-full bg-gradient-to-br from-betawi-gold to-betawi-fire flex items-center justify-center text-betawi-charcoal hover:scale-110 transition-transform"
              whileTap={{ scale: 0.95 }}
              aria-label={isPlaying ? 'Pause music' : 'Play music'}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
            </motion.button>

            {/* Expanded Controls */}
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  className="flex items-center gap-3 pr-2 overflow-hidden"
                >
                  {/* Sound Visualizer */}
                  <div className="flex items-end gap-0.5 h-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-betawi-gold rounded-full"
                        animate={{
                          height: isPlaying && !isMuted ? [4, 16, 8, 12, 4] : 4,
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>

                  {/* Track Info */}
                  <span className="text-xs text-betawi-cream whitespace-nowrap">
                    Gambang Kromong
                  </span>

                  {/* Mute Button */}
                  <motion.button
                    onClick={toggleMute}
                    className="w-6 h-6 rounded-full bg-betawi-charcoal-light flex items-center justify-center text-betawi-gold hover:text-betawi-gold-bright transition-colors"
                    whileTap={{ scale: 0.95 }}
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Hint for first-time users */}
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="absolute -top-12 left-0 bg-betawi-charcoal-light text-betawi-cream text-xs px-3 py-1.5 rounded-lg whitespace-nowrap"
          >
            <div className="absolute -bottom-1 left-4 w-2 h-2 bg-betawi-charcoal-light rotate-45" />
            Putar musik tradisional Betawi
          </motion.div>
        )}
      </motion.div>
    </>
  )
}
