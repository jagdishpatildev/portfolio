import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import collegeImg from '@/assets/education/college_img.jpg'
import collegeImg2 from '@/assets/education/college2.jpg'
import schoolImg from '@/assets/education/school.jpg'

const educationData = [
  {
    school: 'Dr. BV Hiray College, Malegaon',
    location: 'Malegaon, Maharashtra',
    duration: 'June 2025 – June 2027',
    degree: 'Master of Computer Applications (MCA)',
    grade: 'Currently Pursuing',
    image: collegeImg,
    tags: ["Software Engineering", "Advanced Algorithms", "Cloud Computing", "Web Technologies", "DBMS", "AI/ML"],
    description: 'Pursuing MCA to deepen expertise in computer applications, software development, and advanced computing. Focused on building scalable solutions and modern web technologies.',
  },
  {
    school: 'Smt. S.M. Agrawal Institute, Chalisgaon',
    location: 'Chalisgaon, Maharashtra',
    duration: 'August 2022 – July 2025',
    degree: 'Bachelor of Computer Applications (BCA)',
    grade: 'Completed 2025',
    image: collegeImg2,
    tags: ['Programming', 'Web Development', 'Database Management', 'OOP', 'Networking'],
    description: 'Built a strong foundation in computer applications, programming, and software development. Developed practical skills through hands-on projects and full-stack coursework.',
  },
  {
    school: 'Rashtriya Vidyalaya College, Chalisgaon',
    location: 'Chalisgaon, Maharashtra',
    duration: 'August 2020 – July 2022',
    degree: 'Higher Secondary Certificate (HSC)',
    grade: 'Completed 2022',
    image: schoolImg,
    tags: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    description: 'Completed HSC with focus on science and mathematics. This foundation sparked my interest in computer science and software development.',
  },
]

const Education = () => (
  <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
    <ScrollAnimation>
      <motion.div
        className="flex items-center gap-3 mb-12"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <GraduationCap className="w-7 h-7 text-white/60" />
        <h2 className="section-heading">Education</h2>
      </motion.div>
    </ScrollAnimation>

    <div className="space-y-6">
      {educationData.map((edu, i) => (
        <ScrollAnimation key={edu.school}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            className="glass-card overflow-hidden"
          >
            <div className="grid md:grid-cols-[300px,1fr]">
              <div className="relative h-56 md:h-full">
                <img src={edu.image} alt={edu.school} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-black/10 flex items-end p-5">
                  <div>
                    <h3 className="text-sm font-semibold mb-1.5" style={{ letterSpacing: '-0.01em' }}>{edu.school}</h3>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-1">
                      <MapPin className="w-3 h-3" />{edu.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Award className="w-3 h-3" />{edu.grade}
                    </div>
                  </div>
                </div>
                <div
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs text-gray-300"
                  style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
                >
                  <Calendar className="w-3 h-3" /> {edu.duration}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-gray-500" />
                  <h4 className="text-sm font-semibold" style={{ letterSpacing: '-0.01em' }}>{edu.degree}</h4>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{edu.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.tags.map((t) => <span key={t} className="tag-pill">{t}</span>)}
                </div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimation>
      ))}
    </div>
  </div>
)

export default Education
