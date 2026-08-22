import React from "react";

const Certification = () => {
  return (
    <section id="certification" className="py-20 bg-gradient-to-r from-blue-50 to-purple-100">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-blue-600 mb-12">
          📜 Certification
        </h2>

        {/* Certification Card */}
        <div className="flex justify-center">
          <div
            className="
              bg-white rounded-xl shadow-lg p-8 flex flex-col items-center
              hover:shadow-2xl transition transform hover:-translate-y-2
              max-w-sm animate-fadeIn
            "
          >
            <img
              src="/GuviCertification.png"
              alt="GUVI MERN Full‑Stack Certificate"
              className="mb-6 w-56 h-auto rounded-md border border-gray-200 shadow-sm hover:scale-105 transition transform"
              loading="lazy"
            />
            <p className="text-xl font-semibold text-gray-800 text-center">
              GUVI MERN Full‑Stack Certification
            </p>
            <p className="text-gray-600 mt-3 text-center text-base leading-relaxed">
              Issued by GUVI Geek Network, validating skills in MongoDB, Express, React, and Node.js.
            </p>
            <a
              href="https://v2.zenclass.in/certificateDownload/mE1rcScXaN3QRqwo"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg shadow
                hover:bg-blue-700 hover:scale-105 transition transform
              "
              aria-label="View GUVI MERN Certification"
            >
              🔗 View Certificate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certification;



