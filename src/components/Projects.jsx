import { FaReact, FaNodeJs, FaRobot } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiCloudinary } from "react-icons/si";

const techIcons = {
  React: <FaReact className="text-cyan-400 text-lg" />,
  "Node.js": <FaNodeJs className="text-green-400 text-lg" />,
  MongoDB: <SiMongodb className="text-green-500 text-lg" />,
  Express: <SiExpress className="text-gray-400 text-lg" />,
  TailwindCSS: <SiTailwindcss className="text-cyan-500 text-lg" />,
  "Cohere API": <FaRobot className="text-purple-400 text-lg" />,
  Cloudinary: <SiCloudinary className="text-blue-400 text-lg" />,
};

const Projects = () => {
  const projects = [
    {
      title: "Blogging Platform",
      caseStudy: {
        problem: "Needed a secure blogging platform with rich content editing and analytics.",
        solution: "MERN app with JWT auth, role‑based access, rich text editor, image upload.",
        impact: "Safe multi‑role publishing and engagement tracking"
      },
      tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS"],
      image: "https://res.cloudinary.com/naqamlzv/image/upload/v1790332122/Screenshot_2026-09-25_155816.png",
      frontend: "https://github.com/RanjithMichael/bp-client",
      backend: "https://github.com/RanjithMichael/bp-server",
      demo: "https://bpclient.netlify.app/",
    },
    {
      title: "AI Chatbot",
      caseStudy: {
        problem: "Required natural language chat with history.",
        solution: "MERN chatbot with JWT auth, protected routes, Cohere API, MongoDB.",
        impact: "Secure, human‑like conversations with persistence."
      },
      tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "Cohere API"],
      image: "https://res.cloudinary.com/naqamlzv/image/upload/v1790331856/Screenshot_2026-09-25_155330.png",
      frontend: "https://github.com/RanjithMichael/cb-frontend",
      backend: "https://github.com/RanjithMichael/cb-backend",
      demo: "https://aicb1.netlify.app/",
    },
    {
      title: "Car Rental App",
      caseStudy: {
        problem: "Customers needed easy bookings; admins needed inventory control.",
        solution: "MERN app with JWT auth, role‑based access, Cloudinary uploads, responsive UI.",
        impact: "Smooth bookings, real‑time listings, efficient admin workflows."
      },
      tech: ["MongoDB", "React", "Node.js", "TailwindCSS", "Cloudinary"],
      image: "https://res.cloudinary.com/naqamlzv/image/upload/v1790331256/Screenshot_2026-09-25_154214.png",
      frontend: "https://github.com/RanjithMichael/cra-frontend",
      backend: "https://github.com/RanjithMichael/cra-backend",
      demo: "https://crenta.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="relative py-20 text-gray-200">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]"></div>
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-12">
          🚀 Projects
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="relative flex flex-col h-full rounded-xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] transition-transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden"
            >
              {/* Background Screenshot */}
              <img
                src={proj.image}
                alt={`${proj.title} Screenshot`}
                className="absolute inset-0 w-full h-full object-cover opacity-30"
                loading="lazy"
              />

              {/* Content Layer */}
              <div className="relative p-6 flex flex-col flex-grow text-left space-y-4">
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  {proj.title}
                </h3>

                {/* Case Study */}
                <div className="text-sm leading-relaxed space-y-2 text-gray-300">
                  <p><span className="font-semibold text-cyan-400">Problem:</span> {proj.caseStudy.problem}</p>
                  <p><span className="font-semibold text-purple-400">Solution:</span> {proj.caseStudy.solution}</p>
                  <p><span className="font-semibold text-blue-400">Impact:</span> {proj.caseStudy.impact}</p>
                </div>

                {/* Tech Stack Icons */}
                <div className="flex flex-wrap gap-3">
                  {proj.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-lg hover:bg-white/20 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.6)]"
                    >
                      {techIcons[tech]}
                      <span className="text-xs font-medium text-gray-200">{tech}</span>
                    </div>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 mt-auto">
                  {proj.frontend && (
                    <a
                      href={proj.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-md text-sm font-medium shadow-lg hover:shadow-[0_0_15px_rgba(124,58,237,0.6)] transition"
                    >
                      💻 Frontend
                    </a>
                  )}
                  {proj.backend && (
                    <a
                      href={proj.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-md text-sm font-medium shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition"
                    >
                      ⚙️ Backend
                    </a>
                  )}
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-md text-sm font-medium shadow-lg hover:shadow-[0_0_15px_rgba(234,179,8,0.6)] transition"
                  >
                    🔗 Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;



