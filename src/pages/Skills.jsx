import { Code2, Layout, Server, Database, Wrench, Brain, MessageSquare, Users, BookOpen } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { PythonLogo, JavaScriptLogo, GitLogo, VSCodeLogo, PostmanLogo } from "@/components/TechLogos";

const skills = [
  {
    category: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    items: [
      { name: "Python", icon: <PythonLogo /> },
      { name: "JavaScript", icon: <JavaScriptLogo /> },
      { name: "C / C++", icon: <Code2 className="w-4 h-4" /> },
      { name: "HTML5", icon: <Layout className="w-4 h-4" /> },
    ],
  },
  {
    category: "Frameworks",
    icon: <Server className="w-5 h-5" />,
    items: [
      { name: "Django", icon: <PythonLogo /> },
      { name: "Flask", icon: <PythonLogo /> },
      { name: "Django REST", icon: <Server className="w-4 h-4" /> },
    ],
  },
  {
    category: "Databases",
    icon: <Database className="w-5 h-5" />,
    items: [
      { name: "MySQL", icon: <Database className="w-4 h-4" /> },
      { name: "MongoDB", icon: <Database className="w-4 h-4" /> },
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
    ],
  },
  {
    category: "Tools",
    icon: <Wrench className="w-5 h-5" />,
    items: [
      { name: "VS Code", icon: <VSCodeLogo /> },
      { name: "Git", icon: <GitLogo /> },
      { name: "GitHub", icon: <GitLogo /> },
      { name: "Postman", icon: <PostmanLogo /> },
    ],
  },
  {
    category: "Concepts",
    icon: <BookOpen className="w-5 h-5" />,
    items: [
      { name: "OOP", icon: <Code2 className="w-4 h-4" /> },
      { name: "Multithreading", icon: <Server className="w-4 h-4" /> },
      { name: "Exception Handling", icon: <Wrench className="w-4 h-4" /> },
      { name: "MVC Architecture", icon: <Layout className="w-4 h-4" /> },
    ],
  },
  {
    category: "Soft Skills",
    icon: <Brain className="w-5 h-5" />,
    items: [
      { name: "Teamwork", icon: <Users className="w-4 h-4" /> },
      { name: "Communication", icon: <MessageSquare className="w-4 h-4" /> },
      { name: "Problem Solving", icon: <Wrench className="w-4 h-4" /> },
      { name: "Quick Learner", icon: <Brain className="w-4 h-4" /> },
    ],
  },
];

const Skills = () => (
  <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
    <ScrollAnimation>
      <h2 className="section-heading mb-3">Technical Skills</h2>
    </ScrollAnimation>
    <ScrollAnimation>
      <p className="text-gray-500 mb-12 max-w-xl text-sm" style={{ letterSpacing: '-0.01em' }}>
        A comprehensive overview of my technical expertise and tools I work with
      </p>
    </ScrollAnimation>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {skills.map((group) => (
        <ScrollAnimation key={group.category}>
          <div className="glass-card p-5 h-full">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="p-2 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {group.icon}
              </div>
              <h3 className="text-sm font-semibold text-white/90" style={{ letterSpacing: '-0.01em' }}>
                {group.category}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="px-3 py-2.5 rounded-xl flex items-center gap-2 group transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.04)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                  }}
                >
                  <span className="text-gray-500">{skill.icon}</span>
                  <span className="text-gray-400 text-xs font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      ))}
    </div>
  </div>
);

export default Skills;
