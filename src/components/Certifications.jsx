import { motion } from "framer-motion";

const certifications = [
  {
    title: "GUVI MERN Full‑Stack Certification",
    issuer: "GUVI Geek Network",
    description: "Validates skills in MongoDB, Express, React, and Node.js.",
    image: "/GuviCertification.png",
    link: "https://v2.zenclass.in/certificateDownload/mE1rcScXaN3QRqwo",
  },
  {
    title: "AI Tools & ChatGPT Workshop",
    issuer: "be10x",
    description: "Certified in leveraging AI tools for presentations, and coding/debugging.",
    image: "/be10x.png",
    link: "/Be10xCertificate.pdf",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-20 text-gray-200 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]" />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-12 animate-shimmer"
        >
          📜 Certifications
        </motion.h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col min-h-[420px] bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(124,58,237,0.6)] transition-transform hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Certificate Image */}
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={`${cert.title} Logo`}
                  className="mx-auto h-40 w-auto object-contain p-6 transition-transform hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="h-40 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold">
                  No Image Available
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow text-center space-y-4">
                <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  {cert.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Issued by {cert.issuer}. {cert.description}
                </p>

                {/* Button pinned to bottom */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block px-5 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] transition-transform text-sm font-medium"
                    aria-label={`View ${cert.title}`}
                  >
                    🔗 View Certificate
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

