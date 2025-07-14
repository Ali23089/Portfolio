"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="relative py-20 bg-gradient-to-tr from-purple-900/50 via-background to-blue-900/50 border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-8"
        >
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 animate-glow">Ali Umair</h3>
          <p className="text-lg text-muted-foreground max-w-2xl text-center">
            Passionate about building beautiful, high-performance mobile applications that solve real-world problems.
          </p>

          <div className="flex items-center gap-6">
            <a href="https://github.com/Ali23089" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-white hover:scale-110 transition-all duration-300">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/ali-umair-18a67b218/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-white hover:scale-110 transition-all duration-300">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="mailto:uali57362@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-white hover:scale-110 transition-all duration-300">
              <Mail className="h-8 w-8" />
            </a>
          </div>

          <Button
            onClick={scrollToTop}
            variant="outline"
            className="rounded-full bg-background/20 backdrop-blur-sm border-white/20 hover:bg-white/10 text-white"
          >
            <ArrowUp className="h-4 w-4 mr-2" /> Back to Top
          </Button>
        </motion.div>
        
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ali Umair. All Rights Reserved.</p>
          <p className="mt-1">
            Designed & Developed with Passion.
          </p>
        </div>
      </div>
    </footer>
  )
}