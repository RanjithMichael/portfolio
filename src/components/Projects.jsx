import { FaReact, FaNodeJs, FaRobot } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiCloudinary } from "react-icons/si";


const techIcons = {
  React: <FaReact className="text-blue-500 text-lg" />,
  "Node.js": <FaNodeJs className="text-green-600 text-lg" />,
  MongoDB: <SiMongodb className="text-green-700 text-lg" />,
  Express: <SiExpress className="text-gray-600 text-lg" />,
  TailwindCSS: <SiTailwindcss className="text-cyan-500 text-lg" />,
  "Cohere API": <FaRobot className="text-purple-600 text-lg" />,
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
        solution: "MERN chatbot with JWT auth, protected routes, Cohere API, MongoDB sessions.",
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
    <section id="projects" className="relative py-20 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/naqamlzv/image/upload/v1790280712/Prerequisites-to-becoming-a-full-stack-developer-min.jpg')", 
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-300 mb-12">🚀 Projects</h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="relative flex flex-col h-full rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Background Screenshot */}
              <img
                src={proj.image}
                alt={`${proj.title} Screenshot`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Content Layer */}
              <div className="relative p-6 flex flex-col flex-grow text-left text-white">
                <h3 className="text-xl font-bold mb-4">{proj.title}</h3>

                {/* Case Study */}
                <div className="text-sm leading-relaxed space-y-2 mb-6">
                  <p><span className="font-semibold">Problem:</span> {proj.caseStudy.problem}</p>
                  <p><span className="font-semibold">Solution:</span> {proj.caseStudy.solution}</p>
                  <p><span className="font-semibold">Impact:</span> {proj.caseStudy.impact}</p>
                </div>

                {/* Tech Stack Icons */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {proj.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      {techIcons[tech]}
                      <span className="text-xs font-medium">{tech}</span>
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
                      className="px-3 py-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-md text-sm font-medium hover:opacity-90"
                    >
                      💻 Frontend
                    </a>
                  )}
                  {proj.backend && (
                    <a
                      href={proj.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-md text-sm font-medium hover:opacity-90"
                    >
                      ⚙️ Backend
                    </a>
                  )}
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-md text-sm font-medium hover:opacity-90"
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

