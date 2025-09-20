"use client"

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Palette,
  Server,
  GitBranch
} from 'lucide-react'

const techCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    technologies: [
      { name: 'React', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Framer Motion', level: 85 }
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Backend',
    icon: Server,
    technologies: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'FastAPI', level: 82 },
      { name: 'GraphQL', level: 78 }
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Database',
    icon: Database,
    technologies: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'Supabase', level: 86 },
      { name: 'Prisma', level: 82 }
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    technologies: [
      { name: 'React Native', level: 85 },
      { name: 'Expo', level: 82 },
      { name: 'Flutter', level: 75 },
      { name: 'PWA', level: 88 },
      { name: 'Ionic', level: 70 }
    ],
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    technologies: [
      { name: 'AWS', level: 85 },
      { name: 'Docker', level: 82 },
      { name: 'Vercel', level: 90 },
      { name: 'Netlify', level: 88 },
      { name: 'GitHub Actions', level: 80 }
    ],
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Design & Tools',
    icon: Palette,
    technologies: [
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 80 },
      { name: 'Photoshop', level: 75 },
      { name: 'Sketch', level: 70 },
      { name: 'Principle', level: 72 }
    ],
    color: 'from-pink-500 to-rose-500'
  }
]

export function TechStackSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="tech" className="py-14 sm:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Tech Stack</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.1 * categoryIndex }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${category.color} mr-3 sm:mr-4`}>
                      <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.1 * categoryIndex + 0.05 * techIndex 
                        }}
                        className="space-y-1 sm:space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm sm:text-base">{tech.name}</span>
                          <span className="text-xs sm:text-sm text-muted-foreground">{tech.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-1.5 sm:h-2">
                          <motion.div
                            className={`h-1.5 sm:h-2 rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${tech.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1, 
                              delay: 0.2 * categoryIndex + 0.1 * techIndex 
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-14 md:mt-16 text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Development Tools</h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {[
              { name: 'VS Code', img: 'https://img.icons8.com/color/48/000000/visual-studio-code-2019.png' },
              { name: 'Android Studio', img: 'https://img.icons8.com/color/48/000000/android-studio.png' },
              { name: 'Xcode', img: 'https://img.icons8.com/color/48/000000/xcode.png' },
              { name: 'Git', img: 'https://img.icons8.com/color/48/000000/git.png' },
              { name: 'GitHub', img: 'https://img.icons8.com/ios-filled/50/000000/github.png' },
              { name: 'Postman', img: 'https://img.icons8.com/dusk/64/000000/postman-api.png' },
              { name: 'Jira', img: 'https://img.icons8.com/color/48/000000/jira.png' },
              { name: 'Slack', img: 'https://img.icons8.com/color/48/000000/slack-new.png' },
              { name: 'Chrome DevTools', img: 'https://img.icons8.com/color/48/000000/chrome--v1.png' },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.05 * index }}
                className="flex flex-col items-center px-2 sm:px-4 py-2 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-md hover:shadow-blue-400/40 hover:scale-110 transition-all duration-300 cursor-pointer group"
              >
                <img src={tool.img} alt={tool.name} className="w-8 h-8 sm:w-10 sm:h-10 mb-2 group-hover:scale-125 transition-transform duration-300" />
                <span className="font-medium text-xs sm:text-sm text-blue-900 dark:text-blue-200 group-hover:text-blue-600 transition-colors duration-300">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}