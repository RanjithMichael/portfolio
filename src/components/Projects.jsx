import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Blogging Platform",
      caseStudy: {
        problem: "Users needed a secure blogging platform with rich content editing and analytics.",
        solution: "Built a MERN app with JWT authentication, role‑based access control, and integrated rich text editor with image upload.",
        impact: "Enabled safe publishing for multiple roles and improved engagement tracking with analytics dashboard."
      },
      tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS"],
      image: "/BloggingPlatform.png",
      frontend: "https://github.com/RanjithMichael/bp-client",
      backend: "https://github.com/RanjithMichael/bp-server",
      demo: "https://bpclient.netlify.app/",
    },
    {
      title: "AI Chatbot",
      caseStudy: {
        problem: "Businesses wanted natural language conversations with persistent history.",
        solution: "Integrated Cohere’s Command‑R+ API into a MERN stack, storing chat sessions in MongoDB for continuity.",
        impact: "Delivered responsive, human‑like conversations with session persistence, improving user experience and retention."
      },
      tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "Cohere API"],
      image: "/ChatBot.png",
      frontend: "https://github.com/RanjithMichael/cb-frontend",
      backend: "https://github.com/RanjithMichael/cb-backend",
      demo: "https://aicb1.netlify.app/",
    },
    {
      title: "Weather Dashboard",
      caseStudy: {
        problem: "Users needed real‑time weather insights with historical search tracking.",
        solution: "Connected OpenWeather API, built MongoDB persistence for search history, and designed a responsive dashboard with charts/icons.",
        impact: "Provided accurate forecasts with a clean UI, reducing repeated searches and improving clarity of weather trends."
      },
      tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "OpenWeather API"],
      image: "/weatherDashboard.png",
      frontend: "https://github.com/RanjithMichael/wd-frontend",
      backend: "https://github.com/RanjithMichael/wd-backend",
      demo: "https://wdashboar.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-blue-50 to-purple-100">
      <div className="max-w-6xl mx-auto text-center animate-fadeIn">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-12">🚀 Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col animate-slideUp"
            >
              {/* Project Image */}
              <img
                
                src={proj.image}
                alt={`${proj.title} Screenshot`}
                className="w-full h-56 object-cover rounded-t-xl hover:scale-105 transition transform"
                loading="lazy"
              />

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {proj.title}
                </h3>

                {/* Case Study Format */}
                <div className="text-gray-600 mb-4 flex-grow text-base leading-relaxed space-y-2">
                  <p><strong>Problem:</strong> {proj.caseStudy.problem}</p>
                  <p><strong>Solution:</strong> {proj.caseStudy.solution}</p>
                  <p><strong>Impact:</strong> {proj.caseStudy.impact}</p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-start gap-3 mt-auto">
                  {proj.frontend && (
                    <a
                      href={proj.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition transform"
                      aria-label={`${proj.title} Frontend Code`}
                    >
                      Frontend
                    </a>
                  )}
                  {proj.backend && (
                    <a
                      href={proj.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:scale-105 transition transform"
                      aria-label={`${proj.title} Backend Code`}
                    >
                      Backend
                    </a>
                  )}
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 hover:scale-105 transition transform"
                    aria-label={`${proj.title} Live Demo`}
                  >
                    Live Demo
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
