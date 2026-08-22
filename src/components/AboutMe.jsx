import React from "react";

const AboutMe = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-blue-50 to-purple-100"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10 flex flex-col items-center text-center animate-fadeIn">
          
          {/* Profile Image */}
          <img
            src="/Ranjith.jpeg"
            alt="Portrait of Ranjith Michael"
            loading="lazy"
            className="
              w-32 h-32
              sm:w-40 sm:h-40
              md:w-48 md:h-48
              lg:w-56 lg:h-56
              rounded-full
              shadow-md
              border-4 border-blue-400
              transition
              transform
              hover:scale-105
              animate-slideUp
              mb-6
            "
          />

          {/* Heading */}
          <h2
            className="text-4xl font-extrabold text-blue-600 mb-4 animate-slideUp delay-100"
            aria-label="Introduction heading"
          >
            Hi, I’m Ranjith Michael 👋
          </h2>

          {/* Description */}
          <p
            className="text-lg text-gray-700 leading-relaxed mb-6 animate-fadeIn delay-200 max-w-2xl"
            aria-label="Developer description"
          >
            Full‑Stack MERN Developer based in Vellore, India. I specialize in
            building scalable web applications, crafting clean UI with TailwindCSS,
            and automating workflows to make development faster and smarter. With a
            background in logistics and leadership, I bring both technical and
            organizational strengths to projects.
          </p>

          {/* Strengths as bullet points */}
          <section aria-label="Key strengths">
            <ul className="text-gray-700 mb-8 list-disc list-inside space-y-2 animate-fadeIn delay-300 text-left max-w-md mx-auto">
              <li>🚀 Full‑Stack MERN Developer (MongoDB, Express, React, Node.js)</li>
              <li>🎨 Clean UI with TailwindCSS</li>
              <li>⚡ Workflow automation for faster development</li>
              <li>📦 Logistics & leadership background</li>
            </ul>
          </section>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center gap-6 flex-wrap animate-slideUp delay-400">
            <a
              href="/Ranjith_Michael_B_Resume.pdf"
              className="px-6 py-2 bg-yellow-400 text-black rounded-lg shadow hover:bg-yellow-500 hover:scale-105 transition transform"
              download
              aria-label="Download Resume"
            >
              ⬇️ Download Resume
            </a>
            <a
              href="/Ranjith_Michael_B_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 hover:scale-105 transition transform"
              aria-label="View Resume Online"
            >
              👀 View Online
            </a>
            <a
              href="https://github.com/RanjithMichael"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 hover:scale-105 transition transform"
              aria-label="Visit GitHub Profile"
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section
        id="whyme"
        className="py-20 bg-gradient-to-r from-purple-50 to-blue-100"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10 text-center animate-fadeIn">
          <h2 className="text-3xl font-extrabold text-blue-600 mb-6">
            🌟 Why Me?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            My background in logistics and leadership helps me design apps that
            solve real business problems, not just technical ones. I combine
            organizational strengths with full‑stack MERN expertise to deliver
            solutions that are both scalable and practical. This unique blend
            sets me apart and ensures I bring value beyond just code.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
