import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 text-gray-200 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-geometric blur-sm animate-pattern-move" />

      {/* Content Grid */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Card - Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 rounded-xl p-8 shadow-lg space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink animate-shimmer">
            📬 GET IN TOUCH
          </h2>
          <p className="text-lg text-gray-300">Contact.</p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 max-w-xs mx-auto md:mx-0">
            <a
              href="mailto:ranjithmichael49@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-medium shadow-lg hover:scale-105 transition-transform animate-glow-cycle"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/ranjithmichael"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-purple to-neon-pink text-white font-medium shadow-lg hover:scale-105 transition-transform animate-glow-cycle"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/RanjithMichael"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-pink text-white font-medium shadow-lg hover:scale-105 transition-transform animate-glow-cycle"
            >
              <FaGithub /> GitHub
            </a>
          </div>

          {/* Thanks + Resume */}
          <p className="text-gray-400 mt-6">Thanks for scrolling.</p>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-8 py-3 rounded-lg bg-gradient-to-r from-neon-pink to-neon-purple text-white font-semibold shadow-lg hover:scale-105 transition-transform animate-glow"
          >
            📄 Resume ➜
          </a>
        </motion.div>

        {/* Right Card - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="bg-white/5 rounded-xl p-6 shadow-lg">
            <img
              src="https://res.cloudinary.com/naqamlzv/image/upload/v1791451593/contact-banner.jpg" 
              alt="Contact Visual"
              className="rounded-lg shadow-lg max-w-md"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;






