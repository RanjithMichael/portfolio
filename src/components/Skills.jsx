import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiGooglechrome,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { motion } from "framer-motion";

const Skills = () => {
  const sections = [
    {
      title: "Core Skills",
      items: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-3xl" /> },
        { name: "React JS", icon: <FaReact className="text-cyan-500 text-3xl" /> },
        { name: "Node JS", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
        { name: "Express JS", icon: <SiExpress className="text-gray-400 text-3xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
        { name: "Mongoose", icon: <SiMongodb className="text-green-400 text-3xl" /> },
        { name: "JWT", icon: <FaLock className="text-yellow-400 text-3xl" /> },
        { name: "bcrypt", icon: <FaShieldAlt className="text-purple-400 text-3xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-200 text-3xl" /> },
      ],
    },
    {
      title: "Tools & Software",
      items: [
        { name: "VS Code", icon: <VscCode className="text-blue-500 text-3xl" /> },
        { name: "Chrome", icon: <SiGooglechrome className="text-red-400 text-3xl" /> },
        { name: "MongoDB Compass", icon: <SiMongodb className="text-green-500 text-3xl" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500 text-3xl" /> },
      ],
    },
  ];

  // Flatten all skills for marquee row
  const allSkills = sections.flatMap((section) => section.items);

  return (
    <section id="skills" className="relative py-20 text-gray-200 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]" />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center space-y-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-shimmer"
        >
          💡 Skills
        </motion.h2>

        {/* Grid Sections */}
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-8">
            <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 border-b border-cyan-400 pb-2">
              {section.title}
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {section.items.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] transition-transform"
                >
                  <div className="p-3 rounded-full bg-white/10 shadow-[0_0_10px_rgba(6,182,212,0.6)]">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Moving Marquee Row */}
        <div className="overflow-hidden mt-12">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {allSkills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center min-w-[100px]">
                {skill.icon}
                <span className="mt-2 text-xs text-gray-400">{skill.name}</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {allSkills.map((skill, i) => (
              <div key={`dup-${i}`} className="flex flex-col items-center min-w-[100px]">
                {skill.icon}
                <span className="mt-2 text-xs text-gray-400">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

