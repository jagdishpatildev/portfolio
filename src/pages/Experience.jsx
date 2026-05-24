import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import oasisImg from '@/assets/experience/oasisInfobyte_page.jpg'

const experienceData = [
  {
    company: 'Fortune Cloud Technologies Pvt Ltd',
    location: 'Pune, India',
    duration: 'August 2025 – February 2026',
    role: 'Python Full-Stack Developer Trainee',
    image: oasisImg,
    type: 'Professional Training',
    responsibilities: [
      'Designed and implemented end-to-end applications using Django and Flask frameworks.',
      'Developed secure, scalable RESTful APIs using Django REST Framework.',
      'Optimized database performance using MySQL and PostgreSQL for production-grade applications.',
      'Built responsive user interfaces following clean MVC architecture principles.',
      'Implemented secure user authentication, role-based access control, and session management.',
    ],
    tags: ['Django', 'Flask', 'Python', 'DRF', 'MySQL', 'PostgreSQL', 'REST APIs'],
  },
]

const Experience = () => (
  <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
    <ScrollAnimation>
      <motion.div
        className="flex items-center gap-3 mb-12"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Briefcase className="w-7 h-7 text-white/60" />
        <h2 className="section-heading">Experience</h2>
      </motion.div>
    </ScrollAnimation>

    <div className="space-y-8">
      {experienceData.map((exp, i) => (
        <ScrollAnimation key={exp.company}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="glass-card overflow-hidden"
          >
            <div className="grid md:grid-cols-[260px,1fr]">
              <div className="relative h-52 md:h-full">
                <img src={exp.image} alt={exp.company} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                  <span
                    className="text-xs text-gray-300 px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-0.5" style={{ letterSpacing: '-0.02em' }}>{exp.role}</h3>
                <p className="text-gray-300 text-sm font-medium mb-3">{exp.company}</p>
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="flex items-center gap-1 text-gray-500 text-xs">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                  <span className="flex items-center gap-1 text-gray-500 text-xs">
                    <Calendar className="w-3 h-3" /> {exp.duration}
                  </span>
                </div>
                <div className="space-y-2.5 mb-5">
                  {exp.responsibilities.map((r, j) => (
                    <div key={j} className="flex items-start gap-2.5">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500/80 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-400 text-sm leading-relaxed">{r}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => <span key={tag} className="tag-pill">{tag}</span>)}
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimation>
      ))}
    </div>
  </div>
)

export default Experience
