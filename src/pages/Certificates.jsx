import { motion } from 'framer-motion'
import { Award, Calendar } from 'lucide-react'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import pythonCert from '@/assets/files/certificates_pdf/python.pdf'
import pythonImg from '@/assets/experience/oasisInfobyte_page.jpg'

const certificates = [
  {
    title: 'Python Full-Stack Development',
    issuer: 'Fortune Cloud Technologies Pvt Ltd',
    date: 'February 2026',
    image: pythonImg,
    pdfUrl: pythonCert,
    description: 'Professional training in Python Full-Stack Development covering Django, Flask, REST APIs, and database optimization.',
    tags: ['Python', 'Django', 'Flask', 'REST APIs', 'MySQL'],
  },
]

const Certificates = () => (
  <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
    <ScrollAnimation>
      <motion.div
        className="flex items-center gap-3 mb-12"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Award className="w-7 h-7 text-white/60" />
        <h2 className="section-heading">Certificates</h2>
      </motion.div>
    </ScrollAnimation>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {certificates.map((cert, i) => (
        <ScrollAnimation key={cert.title}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="glass-card overflow-hidden flex flex-col"
          >
            <div className="relative h-44 overflow-hidden">
              <img src={cert.image} alt={cert.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-base font-semibold mb-1" style={{ letterSpacing: '-0.02em' }}>{cert.title}</h3>
              <p className="text-gray-400 text-xs mb-2 font-medium">{cert.issuer}</p>
              <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
                <Calendar className="w-3.5 h-3.5" />
                {cert.date}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">{cert.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {cert.tags.map((tag) => <span key={tag} className="tag-pill">{tag}</span>)}
              </div>
              <a
                href={cert.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center text-xs"
              >
                View Certificate
              </a>
            </div>
          </motion.div>
        </ScrollAnimation>
      ))}
    </div>
  </div>
)

export default Certificates
