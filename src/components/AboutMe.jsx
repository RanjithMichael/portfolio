import React from "react";

const AboutMe = () => {
  return (
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
            w-24 h-24
            sm:w-32 sm:h-32
            md:w-40 md:h-40
            lg:w-48 lg:h-48
            rounded-full
            mb-6
            shadow-md
            border-4 border-blue-400
            transition
            transform
            hover:scale-105
            animate-slideUp
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
          className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6 animate-fadeIn delay-200"
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
          <ul className="text-gray-700 mb-8 list-disc list-inside text-left max-w-md mx-auto animate-fadeIn delay-300">
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
  );
};

export default AboutMe;
