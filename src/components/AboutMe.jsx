import { motion } from "framer-motion";
import { FaCode, FaReact, FaServer, FaLaptopCode } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="relative py-20 text-gray-200 overflow-hidden">
        {/* Background Gradient + Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-[url('/patterns/lines.svg')] opacity-10" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-56 h-56 rounded-full p-1 bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_25px_rgba(124,58,237,0.6)] hover:scale-105 transition-transform">
              <img
                src="/Ranjith.jpeg"
                alt="Portrait of Ranjith Michael"
                loading="lazy"
                className="w-full h-full rounded-full object-cover border-4 border-[#0F172A]"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center md:text-left space-y-6"
          >
            

            
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-20 bg-[#0F172A] text-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/lines.svg')] opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-6xl mx-auto px-6 text-center space-y-8"
        >
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-shimmer">
            INTRODUCTION
          </h2>
          <h3 className="text-3xl font-bold text-cyan-400">Overview</h3>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I’m a skilled software developer with experience in JavaScript and expertise in frameworks like 
            <span className="text-cyan-400 font-semibold"> React, Node.js, Express.js, and MongoDB</span>. 
            I’m a quick learner and collaborate closely with clients to create efficient, scalable, and user‑friendly solutions 
            that solve real‑world problems. Let’s work together to bring your ideas to life!
          </p>

          {/* Role Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-6 rounded-xl shadow-lg">
              <FaCode className="text-cyan-400 text-3xl mb-3 mx-auto" />
              <h4 className="text-lg font-semibold">Web Developer</h4>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-6 rounded-xl shadow-lg">
              <FaReact className="text-purple-400 text-3xl mb-3 mx-auto" />
              <h4 className="text-lg font-semibold">React Developer</h4>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-6 rounded-xl shadow-lg">
              <FaServer className="text-green-400 text-3xl mb-3 mx-auto" />
              <h4 className="text-lg font-semibold">Backend Developer</h4>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white/10 p-6 rounded-xl shadow-lg">
              <FaLaptopCode className="text-pink-400 text-3xl mb-3 mx-auto" />
              <h4 className="text-lg font-semibold">Full Stack Developer</h4>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default AboutMe;



