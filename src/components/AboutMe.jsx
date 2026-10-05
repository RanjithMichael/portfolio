const AboutMe = () => {
  return (
    <>
      {/* About Section */}
      <section id="about" className="relative py-20 text-gray-200">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]"></div>

        {/* Overlay Glow */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/Ranjith.jpeg"
              alt="Portrait of Ranjith Michael"
              loading="lazy"
              className="w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.6)] border-4 border-cyan-400 hover:scale-105 transition-transform"
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left space-y-6">
            <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Hi, I’m Ranjith Michael 👋
            </h2>
            <p className="text-lg leading-relaxed max-w-xl mx-auto md:mx-0 text-gray-300">
              Full‑Stack MERN Developer specializing in scalable web applications, 
              clean UI with TailwindCSS, and workflow automation. 
              My background in logistics and leadership adds organizational insight, 
              enabling me to deliver solutions that are both technically strong and business‑focused.
            </p>

            {/* Strengths */}
            <ul className="space-y-3 text-lg text-gray-300">
              <li>🚀 MERN Developer (MongoDB, Express, React, Node.js)</li>
              <li>🎨 Clean UI with TailwindCSS</li>
              <li>⚡ Workflow automation</li>
              <li>📦 Logistics & leadership background</li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <a
                href="/Ranjith_Michael_B_Resume.pdf"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] transition font-semibold"
                download
              >
                ⬇️ Download Resume
              </a>
              <a
                href="/Ranjith_Michael_B_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition font-semibold"
              >
                👀 View Online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section id="whyme" className="py-20 bg-[#0F172A] text-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center space-y-6">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            🌟 Why Work With Me?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I don’t just write code — I solve business problems. My logistics and
            leadership background means I understand workflows, efficiency, and scalability.
            Combined with my MERN expertise, I deliver solutions that are technically strong
            and practically valuable. This blend of organizational insight and full‑stack skills
            ensures I bring impact beyond development.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutMe;

