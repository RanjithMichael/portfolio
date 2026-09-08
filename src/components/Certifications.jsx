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
    description: "Certified in leveraging AI tools for presentations, data analysis, and coding/debugging.",
    image: "/be10x.png",
    link: "/Be10xCertificate.pdf",
  },
  // Add more certificates here
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-blue-600 mb-14">
          📜 Certifications
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              {/* Certificate Image */}
              {cert.image ? (
                <img
                  src={cert.image}
                  alt={`${cert.title} Logo`}
                  className="mx-auto h-40 w-auto object-contain p-6 transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="h-40 flex items-center justify-center bg-gradient-to-r from-blue-100 to-teal-100 text-blue-600 font-semibold">
                  No Image Available
                </div>
              )}

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Issued by {cert.issuer}. {cert.description}
                </p>

                {/* View Certificate Button */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto px-5 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg shadow hover:opacity-90 hover:scale-105 transition-transform text-sm font-medium"
                    aria-label={`View ${cert.title}`}
                  >
                    🔗 View Certificate
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certifications;
