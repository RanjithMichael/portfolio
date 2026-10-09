import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <section id="contact" className="relative py-12 bg-sectionDark text-gray-200 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-geometric blur-sm animate-pattern-move" />

      {/* Content Grid */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Left Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between bg-white/5 rounded-xl p-8 shadow-lg"
        >
          {/* Top Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink animate-shimmer">
              📬 GET IN TOUCH
            </h2>
            <p className="text-lg text-gray-300">Contact.</p>

            {/* Buttons in one line */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
           <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=branjithmichael@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Ranjith,"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 text-sm rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-medium shadow-md hover:scale-105 transition-transform animate-glow-cycle"
            >
            <FaEnvelope className="text-base" /> Email
            </a>

              <a
                href="https://www.linkedin.com/in/ranjithmichael-backiaraj-592920296"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 text-sm rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white font-medium shadow-md hover:scale-105 transition-transform animate-glow-cycle"
              >
                <FaLinkedin className="text-base" /> LinkedIn
              </a>
              <a
                href="https://github.com/RanjithMichael"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 text-sm rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink text-white font-medium shadow-md hover:scale-105 transition-transform animate-glow-cycle"
              >
                <FaGithub className="text-base" /> GitHub
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 space-y-4 text-center md:text-left">
            <p className="text-gray-400">Thanks for scrolling.</p>
            <a
              href="/Ranjith_Michael_B_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-neon-pink to-neon-purple text-white font-semibold shadow-lg hover:scale-105 transition-transform animate-glow"
            >
              📄 Resume ➜
            </a>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white/5 rounded-xl p-8 shadow-lg flex items-center justify-center"
        >
          <img
            src="https://res.cloudinary.com/naqamlzv/image/upload/v1791451593/contact-banner.jpg"
            alt="Contact Visual"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
     {/* Neon Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-lg animate-pulse" />
    </>
  );
};

export default Contact;
