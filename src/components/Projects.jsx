import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Blogging Platform",
      description: "Secure blogging platform with rich content editing and analytics.",
      image: "https://res.cloudinary.com/naqamlzv/image/upload/v1791452319/New-Project-61.png",  
      github: "https://github.com/RanjithMichael/bp-client",
      demo: "https://bpclient.netlify.app/",
    },
    {
      title: "AI Chatbot",
      description: "Natural language chatbot with JWT auth and Cohere API integration.",
      image: "https://res.cloudinary.com/naqamlzv/image/upload/v1791452319/19e4594931d1b8ce6dc0dfef96af6585.webp",
      github: "https://github.com/RanjithMichael/cb-frontend",
      demo: "https://aicb1.netlify.app/",
    },
    {
      title: "Car Rental App",
      description: "Booking platform with admin dashboard, Cloudinary uploads, and JWT auth.",
      image: "https://res.cloudinary.com/naqamlzv/image/upload/v1791452319/19e4594931d1b8ce6dc0dfef96af6585.webp",
      github: "https://github.com/RanjithMichael/cra-frontend",
      demo: "https://crenta.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="relative py-20 text-gray-200 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]" />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-shimmer"
        >
          MY WORK 
          Projects
        </motion.h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Following projects showcase my skills and experience through real-world examples. 
          Each project includes links to code repositories and live demos, reflecting my ability 
          to solve complex problems and manage projects effectively.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] transition-transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />

              {/* Floating Icons */}
              <div className="absolute top-4 right-4 flex gap-3">
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-cyan-500 rounded-full text-white hover:scale-110 transition"
                  >
                    <FaLink />
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-full text-white hover:scale-110 transition"
                  >
                    <FaGithub />
                  </a>
                )}
              </div>

              {/* Content */}
              <div className="p-6 text-left space-y-3">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  {proj.title}
                </h3>
                <p className="text-sm text-gray-300">{proj.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;





