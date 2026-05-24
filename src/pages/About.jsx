import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code2, Briefcase, GraduationCap, Globe } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import profileImg from "@/assets/profile/profile.jpg";

const About = () => {
  const achievements = [
    { icon: <Code2 className="w-5 h-5" />, title: "10+ Projects", description: "Full-stack web applications built" },
    { icon: <Briefcase className="w-5 h-5" />, title: "1 Training", description: "Python Full Stack at Fortune Cloud" },
    { icon: <GraduationCap className="w-5 h-5" />, title: "MCA Pursuing", description: "Master of Computer Applications" },
  ];

  const interests = [
    "Python Development", "Django & Flask", "Full Stack Web",
    "REST APIs", "Database Design", "Clean Architecture",
  ];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.h2 className="section-heading mb-10">About Me</motion.h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-8">
        <ScrollAnimation>
          <div className="aspect-square overflow-hidden rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
            <img
              src={profileImg}
              alt="Jagdish Patil"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-5">
          <div className="space-y-4">
            {[
              "Hi! I'm a motivated Full Stack Developer with strong expertise in Python (Django, Flask), PHP, and PL/SQL. My journey in tech has been driven by a passion for building secure, scalable web applications with clean architecture.",
              "I completed my Bachelor of Computer Applications from Smt. S.M. Agrawal Institute, Chalisgaon and am currently pursuing my MCA at Dr. BV Hiray College, Malegaon. I also completed professional training in Python Full-Stack Development at Fortune Cloud Technologies.",
              "I specialize in developing secure RESTful APIs using Django REST Framework, designing efficient database solutions, and building responsive user interfaces following clean MVC architecture principles.",
            ].map((text, i) => (
              <p key={i} className="text-gray-400 leading-relaxed text-sm" style={{ letterSpacing: '-0.01em' }}>{text}</p>
            ))}
          </div>

          <ScrollAnimation>
            <div className="pt-2">
              <h3 className="text-lg font-semibold mb-4 gradient-text" style={{ letterSpacing: '-0.02em' }}>Quick Facts</h3>
              <ul className="space-y-2.5">
                {[
                  "Based in Pune, Maharashtra, India",
                  "MCA — Dr. BV Hiray College (2025–2027)",
                  "BCA — Smt. S.M. Agrawal Institute (2022–2025)",
                ].map((fact) => (
                  <li key={fact} className="flex items-center gap-3 text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full flex-shrink-0" />
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="flex gap-3 pt-1">
              <a href="mailto:jagdishpatildev@gmail.com" className="btn-primary">Contact Me</a>
              <Link to="/skills" className="btn-secondary">My Skills</Link>
            </div>
          </ScrollAnimation>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 gradient-text" style={{ letterSpacing: '-0.02em' }}>Highlights</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {achievements.map((a) => (
              <ScrollAnimation key={a.title}>
                <div className="glass-card p-5">
                  <div className="text-white/60 mb-3">{a.icon}</div>
                  <h4 className="text-base font-semibold mb-1" style={{ letterSpacing: '-0.02em' }}>{a.title}</h4>
                  <p className="text-gray-500 text-sm">{a.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-14">
          <h3 className="text-xl font-semibold mb-6 gradient-text" style={{ letterSpacing: '-0.02em' }}>Areas of Interest</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {interests.map((interest) => (
              <ScrollAnimation key={interest}>
                <div className="glass-card px-4 py-3 flex items-center gap-3">
                  <Globe className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{interest}</span>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
