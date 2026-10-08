import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 text-gray-200 overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-geometric blur-sm animate-pattern-move" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink animate-shimmer">
            📬 GET IN TOUCH
          </h2>
          <p className="text-lg text-gray-300">Contact.</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <a
              href="mailto:ranjithmichael49@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-medium shadow-lg hover:scale-105 transition-transform animate-glow-cycle"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/ranjithmichael"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-purple to-neon-pink text-white font-medium shadow-lg hover:scale-105 transition-transform animate-glow-cycle"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/ranjithmichael"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-pink text-white font-medium shadow-lg hover:scale-105 transition-transform animate-glow-cycle"
            >
              <FaGithub /> GitHub
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-8 py-3 rounded-lg bg-gradient-to-r from-neon-pink to-neon-purple text-white font-semibold shadow-lg hover:scale-105 transition-transform animate-glow"
          >
            📄 Resume ➜
          </a>

          <p className="text-gray-400 mt-4">Thanks for scrolling.</p>
        </motion.div>

        {/* Right Side - Illustration / Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink flex items-center justify-center shadow-lg animate-glow-cycle">
            <span className="text-xl font-bold text-white">CONTACT US</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;





