const AboutMe = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="relative py-20 text-white"
      >
        {/* Background Image (Cloudinary or local) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/naqamlzv/image/upload/v1790279365/pngtree-computer-of-the-software-developer-on-the-desk-in-the-room-image_15746066.png')",
          }}
        ></div>

        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/Ranjith.jpeg"
              alt="Portrait of Ranjith Michael"
              loading="lazy"
              className="
                w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80
                rounded-xl
                shadow-2xl
                border-4 border-white
                hover:scale-105 transition-transform
              "
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-5xl font-extrabold mb-6">
              Hi, I’m Ranjith Michael 👋
            </h2>
            <p className="text-lg leading-relaxed mb-8 max-w-xl">
              Full‑Stack MERN Developer based in Vellore, India. I build scalable
              web applications, craft clean UI with TailwindCSS, and automate workflows
              to make development faster and smarter. With a background in logistics
              and leadership, I bring both technical and organizational strengths to projects.
            </p>

            {/* Strengths */}
            <ul className="space-y-3 mb-10 text-lg">
              <li>🚀 MERN Developer (MongoDB, Express, React, Node.js)</li>
              <li>🎨 Clean UI with TailwindCSS</li>
              <li>⚡ Workflow automation</li>
              <li>📦 Logistics & leadership background</li>
            </ul>

            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <a
                href="/Ranjith_Michael_B_Resume.pdf"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow hover:opacity-90 hover:scale-105 transition-transform font-semibold"
                download
              >
                ⬇️ Download Resume
              </a>
              <a
                href="/Ranjith_Michael_B_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg shadow hover:opacity-90 hover:scale-105 transition-transform font-semibold"
              >
                👀 View Online
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section id="whyme" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-8">
            🌟 Why Work With Me?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
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
