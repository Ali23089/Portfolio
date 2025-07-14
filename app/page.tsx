"use client"

import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { TechStackSection } from '@/components/tech-stack-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { DeviceShowcaseSection } from '@/components/device-showcase-section'
import { CertificationsSection } from '@/components/certifications-section'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <DeviceShowcaseSection />
        <ProjectsSection />
        <CertificationsSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}