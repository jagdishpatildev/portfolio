import { Github, ExternalLink } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import project1 from "@/assets/projects_img/project-1.png";
import project2 from "@/assets/projects_img/project-2.png";
import project3 from "@/assets/projects_img/project-3.png";

const projects = [
  {
    title: "Job Portal",
    description: "Full-stack job portal with secure authentication and role-based access for job seekers and employers. Features job posting, search with filters, application management, and user dashboards.",
    image: project1,
    github: "https://github.com/jagdishpatildev",
    live: "https://jobportalhost.onrender.com",
    tags: ["Django", "Python", "HTML", "CSS", "JavaScript", "MySQL"],
  },
  {
    title: "Om Netralaya & Dental Clinic",
    description: "Responsive clinic website displaying real-time services, doctor profiles, and appointment booking. Integrated Google Reviews API for live patient ratings and Google Maps for location display.",
    image: project2,
    github: "https://github.com/jagdishpatildev",
    live: "https://om-netralaya.vercel.app/",
    tags: ["React", "Flask", "Python", "Material-UI", "JavaScript", "CSS"],
  },
  {
    title: "OneInbox — Email Management",
    description: "Full-stack email management app connecting multiple Gmail accounts with AI-powered summaries, smart quick replies, and real-time inbox sync every 15 seconds.",
    image: project3,
    github: "https://github.com/jagdishpatildev",
    live: "",
    tags: ["Java 17", "Spring Boot", "React 18", "PostgreSQL", "Gmail API", "Docker"],
  },
];

const Projects = () => (
  <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
    <ScrollAnimation>
      <h2 className="section-heading mb-12">Featured Projects</h2>
    </ScrollAnimation>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project) => (
        <ScrollAnimation key={project.title}>
          <div className="glass-card overflow-hidden h-full flex flex-col">
            <div className="relative overflow-hidden h-44">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-5 flex flex-col flex-grow">
              <h3
                className="text-base font-semibold mb-2 text-white"
                style={{ letterSpacing: '-0.02em' }}
              >
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-pill">{tag}</span>
                ))}
              </div>
              <div className="flex gap-4 pt-1" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-500 hover:text-white transition-colors text-sm pt-3"
                >
                  <Github className="w-3.5 h-3.5" />
                  Code
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-500 hover:text-white transition-colors text-sm pt-3"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  </div>
);

export default Projects;
