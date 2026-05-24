import { VercelLogo } from "@/components/TechLogos";
import { motion } from "framer-motion";
import { Github, Linkedin, Phone, Copy, Check, FileDown, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import cvFile from "@/assets/files/cv_pdf/JagdishCV.pdf";

const Home = () => {
  const [copied, setCopied] = useState(false);
  const email = "jagdishpatildev@gmail.com";
  const whatsappNumber = "+919307891362";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleEmailClick = (e) => {
    if (window.innerWidth <= 640) {
      window.location.href = `mailto:${email}`;
      e.preventDefault();
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl sm:text-7xl md:text-9xl font-bold mb-4 sm:mb-6 relative tracking-tighter leading-none"
          style={{
            letterSpacing: "-0.04em",
            WebkitTextStroke: "1px rgba(255,255,255,0.85)",
            textShadow: "0 0 60px rgba(255,255,255,0.12), 0 0 120px rgba(255,255,255,0.06)",
            color: "white",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Jagdish Patil
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 text-white/80"
          style={{ letterSpacing: "-0.03em" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          I design &amp; code for web
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-500 mb-6 sm:mb-8 max-w-xl mx-auto px-2 sm:px-4"
          style={{ letterSpacing: "-0.01em", lineHeight: 1.6 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Python Developer specializing in Full Stack Development
          with expertise in Django, Flask and modern Web Technologies.
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <div className="flex justify-center gap-3">
            <a
              href={cvFile}
              download="Jagdish_Patil_CV.pdf"
              className="btn-primary flex items-center gap-2"
            >
              <FileDown className="w-4 h-4" aria-hidden="true" />
              Download CV
            </a>
            <Link to="/about" className="btn-secondary flex items-center gap-2">
              <User className="w-4 h-4" aria-hidden="true" />
              About Me
            </Link>
          </div>

          <button
            onClick={handleEmailClick}
            className="group relative flex items-center gap-2 py-2 pl-8 pr-4 hover:bg-white/[0.04] rounded-lg transition-all cursor-copy sm:cursor-pointer"
            aria-label={`Email: ${email}`}
          >
            <div className="absolute left-2 flex items-center">
              <div className="w-3 text-gray-500 group-hover:text-white transition-colors">
                <VercelLogo />
              </div>
              <span className="text-lg font-mono text-gray-500 ml-3 group-hover:text-white transition-colors">~</span>
            </div>
            <span className="text-gray-500 group-hover:text-white transition-colors ml-2 text-sm">
              {email}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 hidden sm:block">
              {copied ? (
                <Check className="w-3.5 h-3.5 text-green-500" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-gray-400" />
              )}
            </div>
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 justify-items-center gap-6 mt-10 sm:mt-14 max-w-xs sm:max-w-none mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          {[
            {
              href: "https://github.com/jagdishpatildev",
              icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
              stat: "10+",
              label: "GitHub Projects",
              aria: "GitHub profile",
            },
            {
              href: "https://linkedin.com/in/jagdishpatildev",
              icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
              stat: "1100+",
              label: "LinkedIn Followers",
              aria: "LinkedIn profile",
            },
            {
              href: `https://wa.me/${whatsappNumber}`,
              icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
              stat: "24x7",
              label: "WhatsApp Me",
              aria: "WhatsApp contact",
            },
          ].map((item) => (
            <motion.a
              key={item.aria}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group w-full"
              whileHover={{ y: -2 }}
              aria-label={item.aria}
            >
              <div className="p-3 rounded-xl mb-2 text-gray-500 group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <span className="text-base sm:text-lg font-semibold tracking-tight">{item.stat}</span>
              <span className="text-xs sm:text-sm text-gray-500">{item.label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
