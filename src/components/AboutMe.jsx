import { motion } from "framer-motion";
import { FaCode, FaReact, FaServer, FaLaptopCode } from "react-icons/fa";

const AboutMe = () => {
  return (
    <>
      <section
        id="about"
        className="relative py-12 bg-dark text-gray-200 overflow-hidden"
      >
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-72 h-72 flex items-center justify-center">
              {/* Outer glowing circles */}
              <div className="absolute w-96 h-96 rounded-full border-4 border-cyan-400 opacity-40 animate-pulse" />
              <div className="absolute w-80 h-80 rounded-full border-4 border-purple-500 opacity-40 animate-pulse delay-200" />

              {/* Neon square frame */}
              <div className="absolute inset-0 rounded-lg p-1 bg-gradient-to-r from-cyan-400 to-purple-500 shadow-lg animate-glow-cycle" />

              {/* Profile image */}
              <img
                src="/Ranjith.png"
                alt="Portrait of Ranjith Michael"
                loading="lazy"
                className="relative w-full h-full rounded-lg object-cover border-4 border-dark"
              />
            </div>
          </motion.div>

          {/* Right Side - Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 text-left"
          >
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text 
              bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-shimmer">
              Hi, I’m Ranjith Michael 👋
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Full‑stack MERN developer passionate about building dynamic and responsive applications.
            </p>

            <h3 className="text-2xl font-bold text-cyan-400">Overview</h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              I specialize in creating high‑quality web solutions with a strong foundation in both frontend and backend technologies. My focus is on clean UI, secure authentication, and recruiter‑friendly design.
            </p>

            {/* Compact Role Cards */}
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                { icon: <FaCode className="text-cyan-400 text-2xl" />, title: "Web Developer" },
                { icon: <FaReact className="text-purple-400 text-2xl" />, title: "React Developer" },
                { icon: <FaServer className="text-green-400 text-2xl" />, title: "Backend Developer" },
                { icon: <FaLaptopCode className="text-pink-400 text-2xl" />, title: "FullStack Developer" },
              ].map((role, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="w-40 bg-white/10 px-4 py-3 rounded-lg shadow-md flex flex-col items-center transition-transform"
                >
                  {role.icon}
                  <h4 className="text-sm font-semibold mt-2">{role.title}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neon Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-lg animate-pulse" />
    </>
  );
};
export default AboutMe;
