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
    image: null, // no image 
    link:"/Be10xCertificate.pdf",
  },
  // Add more certificates here
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 bg-gradient-to-r from-blue-50 to-purple-100"
    >
      <div className="max-w-6xl mx-auto px-6 text-center animate-fadeIn">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-blue-600 mb-14">
          📜 Certifications
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-transform transform hover:-translate-y-2 animate-slideUp"
            >
              {/* Certificate Image */}
              <img
                src={cert.image}
                alt={`${cert.title} Logo`}
                className="mx-auto mb-6 h-40 w-auto object-contain transition-transform group-hover:scale-105"
                loading="lazy"
              />

              {/* Content */}
              <div className="flex flex-col items-center text-center flex-grow">
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
                    className="mt-auto px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition-transform text-sm font-medium"
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
