"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, Code, GraduationCap, Briefcase } from 'lucide-react'

const skills = [
  'Flutter', 'Dart', 'Python', 'Java', 'C/C++', 'Firebase',
  'Google Cloud', 'Database', 'Git', 'Material Design', 'UI/UX', 'Mobile Development'
]

const timeline = [
  {
    year: '2025 – Present',
    title: 'Senior Software Engineer',
    company: 'The Bank of Punjab',
    description: 'Working on Government Projects in apps and web development, focusing on creating secure and efficient banking solutions.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2024',
    title: 'Flutter Developer',
    company: 'M/S DEVEOLUTIONS',
    description: 'Developing and implementing mobile applications using Flutter framework, collaborating with cross-functional teams, and optimizing app performance.',
    icon: Briefcase,
    type: 'work'
  },
  {
    year: '2023',
    title: 'Software Development Intern',
    company: 'The WebCloud',
    description: 'Worked as an intern in the Software Development Department, gaining hands-on experience and collaborating with senior developers.',
    icon: Code,
    type: 'work'
  }
]

const education = [
  {
    year: '2020-2024',
    title: 'Bachelor in Computer Science',
    institution: 'Riphah International University',
    location: 'Lahore, Pakistan',
    description: 'Specialized in Flutter app development and mobile technologies.',
    icon: GraduationCap,
    type: 'education'
  },
  {
    year: '2018-2020',
    title: 'FSC Pre-Engineering',
    institution: 'Punjab Group of Colleges',
    location: 'Lahore, Pakistan',
    description: 'Completed intermediate education with focus on engineering subjects.',
    icon: GraduationCap,
    type: 'education'
  }
]

export function AboutSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Computer Science graduate with specialization in Flutter app development, complemented by practical experience. 
            Demonstrated ability to create user-friendly and efficient mobile applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left Column: My Journey and Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 lg:col-span-1"
          >
            {/* My Journey */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group text-left">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-2xl font-semibold group-hover:text-blue-600 transition-colors duration-300">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a Flutter developer, I specialize in creating cross-platform mobile applications that deliver exceptional user experiences. 
                  My journey in software development began during my university years, where I discovered my passion for mobile app development.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and creating intuitive user interfaces. My experience at M/S DEVEOLUTIONS and 
                  The Bank of Punjab has helped me develop strong problem-solving skills and a deep understanding of mobile development best practices.
                </p>
              </CardContent>
            </Card>
            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-left">Education</h3>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 animate-pulse" />
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="relative flex items-start mb-8 last:mb-0 group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-4 shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-purple-100/20">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">
                            <Calendar className="h-3 w-3 mr-1" />
                            {item.year}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                          {item.institution}
                        </p>
                        <p className="text-muted-foreground text-sm mb-2">
                          {item.location}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bio & Skills Section - Center */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:col-span-1"
          >
            {/* Skills */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <Badge variant="secondary" className="px-3 py-1 text-sm hover:bg-blue-600 hover:text-white transition-all duration-300">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Timeline - Work Experience - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 lg:col-span-1"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 animate-pulse" />
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="relative flex items-start mb-8 last:mb-0 group"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-4 shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <Card className="flex-1 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-100/20">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant={item.type === 'work' ? 'default' : 'secondary'}>
                            <Calendar className="h-3 w-3 mr-1" />
                            {item.year}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                          {item.company}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}