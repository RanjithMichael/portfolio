const AboutMe = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-r from-blue-50 to-purple-100"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
          
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/Ranjith.jpeg"
              alt="Portrait of Ranjith Michael"
              loading="lazy"
              className="w-60 h-60 rounded-full shadow-xl border-4 border-blue-500 hover:scale-105 transition-transform"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-extrabold text-blue-600 mb-6 animate-slideUp">
              Hi, I’m Ranjith Michael 👋
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 animate-fadeIn delay-200">
              I’m a Full‑Stack MERN Developer based in Vellore, India. I focus on
              building scalable web applications, crafting clean UI with TailwindCSS,
              and automating workflows to make development faster and smarter.
              With a background in logistics and leadership, I bring both technical
              and organizational strengths to projects.
            </p>

            {/* Strengths */}
            <ul className="text-gray-700 space-y-3 mb-10 animate-fadeIn delay-300">
              <li>🚀 Full‑Stack MERN Developer (MongoDB, Express, React, Node.js)</li>
              <li>🎨 Clean UI with TailwindCSS</li>
              <li>⚡ Workflow automation for faster development</li>
              <li>📦 Logistics & leadership background</li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start animate-slideUp delay-400">
              <a
                href="/Ranjith_Michael_B_Resume.pdf"
                className="px-6 py-3 bg-yellow-400 text-black rounded-lg shadow hover:bg-yellow-500 hover:scale-105 transition-transform font-medium"
                download
              >
                ⬇️ Download Resume
              </a>
              <a
                href="/Ranjith_Michael_B_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition-transform font-medium"
              >
                👀 View Online
              </a>
              <a
                href="https://github.com/RanjithMichael"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 hover:scale-105 transition-transform font-medium"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section
        id="whyme"
        className="py-24 bg-gradient-to-r from-purple-50 to-blue-100"
      >
        <div className="max-w-6xl mx-auto px-6 text-center animate-fadeIn">
          <h2 className="text-5xl font-extrabold text-blue-600 mb-8">
            🌟 Why Work With Me?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            I don’t just write code — I solve business problems. My logistics and
            leadership background means I understand workflows, efficiency, and
            scalability. Combined with my MERN expertise, I deliver solutions
            that are technically strong and practically valuable. This blend of
            organizational insight and full‑stack skills ensures I bring impact
            beyond development.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
