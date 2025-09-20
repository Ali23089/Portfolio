"use client"

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const handleScrollDown = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const size = Math.floor(Math.random() * 100) + 50;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full shadow-lg"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: 'radial-gradient(circle, rgba(156,163,175,0.4) 0%, rgba(107,114,128,0.4) 100%)',
                filter: 'blur(1px)',
                opacity: 0.7,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 flex items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-600 to-blue-800 blur-2xl" />
            <img
              src="/assets/images/dp.jpg"
              alt="Ali Umair"
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
            />
          </motion.div>

          {/* Main heading */}
          <div className="space-y-3 sm:space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Ali Umair
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-base sm:text-xl md:text-2xl text-muted-foreground font-medium"
            >
              Flutter Developer & Mobile App Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Computer Science graduate with specialization in Flutter app development. Passionate about creating user-friendly and efficient mobile applications that make a difference in people's lives.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={handleContactClick}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="px-4 py-4 sm:px-6 sm:py-6 border-2 hover:bg-accent transition-all duration-300"
                asChild
              >
                <a
                  href="https://github.com/Ali23089"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-4 py-4 sm:px-6 sm:py-6 border-2 hover:bg-accent transition-all duration-300"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/ali-umair-18a67b218/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={handleScrollDown}
              className="rounded-full hover:bg-accent/50 transition-all duration-300"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown className="h-6 w-6" />
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}