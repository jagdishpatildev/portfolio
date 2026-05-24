import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Education = lazy(() => import("./pages/Education"));
const Experience = lazy(() => import("./pages/Experience"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Per-page SEO metadata
const pageMeta = {
  "/": {
    title: "Jagdish Patil - Full Stack Developer | Python Developer",
    description:
      "Jagdish Patil — Full Stack Developer specializing in Django, Flask, Python and modern Web Technologies. Based in Pune, Maharashtra, India.",
  },
  "/about": {
    title: "About - Jagdish Patil | Full Stack Developer",
    description:
      "Learn about Jagdish Patil — Python Full Stack Developer with expertise in Django, Flask and REST APIs. Based in Pune, Maharashtra, India.",
  },
  "/projects": {
    title: "Projects - Jagdish Patil | Full Stack Developer Portfolio",
    description:
      "Explore full-stack web projects built by Jagdish Patil using Django, Flask, Python, MySQL, and REST APIs.",
  },
  "/skills": {
    title: "Skills - Jagdish Patil | React, Node.js, MERN Stack",
    description:
      "Technical skills of Jagdish Patil — Python, Django, Flask, MySQL, PostgreSQL, REST APIs and more.",
  },
  "/experience": {
    title: "Experience - Jagdish Patil | Full Stack Developer",
    description:
      "Professional experience of Jagdish Patil including Python full stack training at Fortune Cloud Technologies.",
  },
  "/education": {
    title: "Education - Jagdish Patil | B.Tech Computer Science",
    description:
      "Educational background of Jagdish Patil — MCA from Dr. BV Hiray College, BCA from Smt. S.M. Agrawal Institute.",
  },
  "/certificates": {
    title: "Certificates - Jagdish Patil | Developer Certifications",
    description:
      "Professional certifications in Python Full-Stack Development.",
  },
  "/contact": {
    title: "Contact - Jagdish Patil | Hire a Full Stack Developer",
    description:
      "Get in touch with Jagdish Patil for freelance projects, job opportunities or collaborations. Based in Pune, Maharashtra, India.",
  },
};

// Hook to update document title + meta description on route change
function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const meta = pageMeta[location.pathname] || {
      title: "Jagdish Patil - Full Stack Developer",
      description:
        "Portfolio of Jagdish Patil — Python Developer specializing in Django and Flask and modern web technologies.",
    };

    document.title = meta.title;

    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute("content", meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl)
      ogUrl.setAttribute(
        "content",
        `https://jagdishpatil.dev${location.pathname}`,
      );

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.setAttribute(
        "href",
        `https://jagdishpatil.dev${location.pathname}`,
      );
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <SEOUpdater />
      <div className="min-h-screen flex flex-col">
        <Background3D />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
