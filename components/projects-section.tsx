"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'StyleMe',
    description: 'A salon management app for Pakistan, built with Flutter for cross-platform support, Firebase for real-time data management, and GeoLocator for location services.',
    image: 'https://images.pexels.com/photos/3993447/pexels-photo-3993447.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Firebase', 'GeoLocator', 'Material Design', 'Google Maps'],
    githubUrl: 'https://github.com/Ali23089',
    liveUrl: '#',
    featured: true
  },
  {
    title: 'Car-Rental',
    description: 'Car Rental Management System developed using Java and NetBeans IDE, featuring a graphical user interface for managing rental operations, booking, tracking, and billing.',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Java', 'NetBeans', 'GUI', 'Database', 'OOP'],
    githubUrl: 'https://github.com/Ali23089',
    liveUrl: '#',
    featured: true
  },
  {
    title: 'Game Hub',
    description: 'A comprehensive game launcher developed in Python that serves as a central platform for accessing multiple games seamlessly, integrated with custom-built games using Pygame.',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Pygame', 'Game Development', 'GUI', 'OOP'],
    githubUrl: 'https://github.com/Ali23089',
    liveUrl: '#',
    featured: true
  },
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with Next.js, featuring user authentication, payment processing, and admin dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration, and project tracking.',
    image: 'https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that provides detailed weather information with beautiful visualizations and forecasts.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Chart.js', 'Weather API', 'CSS3'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false
  },
  {
    title: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js, featuring smooth animations, dark mode, and responsive design.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false
  },
  {
    title: 'Social Media App',
    description: 'A social media platform with user profiles, post creation, likes, comments, and real-time messaging.',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true
  },
  {
    title: 'Analytics Dashboard',
    description: 'A comprehensive analytics dashboard with data visualization, reporting, and business intelligence features.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false
  },
  {
    title: 'Fine Learning',
    description: 'Fine Learning is a modern tuition-based website designed to connect students with expert tutors for personalized learning experiences. The platform features interactive class scheduling, secure payment integration, and a responsive interface for both students and educators. Built with a focus on accessibility and engagement, Fine Learning empowers learners to achieve their academic goals with ease.',
    image: 'https://images.pexels.com/photos/1708988/pexels-photo-1708988.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'React', 'Stripe', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/Ali23089',
    liveUrl: '#',
    featured: true
  },
  {
    title: 'Aligner House',
    description: 'Aligner House is a comprehensive web application tailored for dental professionals and patients, streamlining the process of aligner treatment management. The app offers appointment scheduling, patient progress tracking, and secure document sharing, all within a user-friendly dashboard. Its modern design and robust backend ensure a seamless experience for clinics and clients alike.',
    image: 'https://images.pexels.com/photos/5355694/pexels-photo-5355694.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Material UI'],
    githubUrl: 'https://github.com/Ali23089',
    liveUrl: '#',
    featured: true
  }
]

export function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
            in mobile app development, software engineering, and game development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white text-black"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/90 hover:bg-white text-black"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="group h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-card/30 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}