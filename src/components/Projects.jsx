const Projects = () => {
  const projects = [
    {
      title: "Blogging Platform",
      caseStudy: {
        problem: "Needed a secure blogging platform with rich content editing and analytics.",
        solution: "Built a MERN app with JWT authentication, role‑based access, and integrated rich text editor with image upload.",
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
        problem: "Needed natural language conversations with persistent history.",
        solution: "Integrated Cohere’s command-r-08-2024 API into a MERN stack, storing chat sessions in MongoDB for continuity.",
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
        problem: "Needed real‑time weather insights with historical search tracking.",
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
    <section id="projects" className="py-24 bg-gradient-to-r from-blue-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-6 text-center animate-fadeIn">
        <h2 className="text-5xl font-extrabold text-blue-600 mb-14">🚀 Projects</h2>
        
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2 animate-slideUp flex flex-col"
            >
              {/* Project Image */}
              <div className="relative">
                <img
                  src={proj.image}
                  alt={`${proj.title} Screenshot`}
                  className="w-full h-56 object-cover transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {proj.title}
                </h3>

                {/* Case Study */}
                <div className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed space-y-2">
                  <p><span className="font-semibold">Problem:</span> {proj.caseStudy.problem}</p>
                  <p><span className="font-semibold">Solution:</span> {proj.caseStudy.solution}</p>
                  <p><span className="font-semibold">Impact:</span> {proj.caseStudy.impact}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full font-medium"
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
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform text-sm font-medium"
                    >
                      💻 Frontend
                    </a>
                  )}
                  {proj.backend && (
                    <a
                      href={proj.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-transform text-sm font-medium"
                    >
                      ⚙️ Backend
                    </a>
                  )}
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-transform text-sm font-medium"
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
