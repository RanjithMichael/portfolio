import React from "react";

const Certification = () => {
  return (
    <section id="certification" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-12">
          📜 Certification
        </h2>
        <div className="flex justify-center">
          {/* GUVI Certification Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl transition transform hover:-translate-y-2 max-w-sm">
            <img
              src="/GuviCertification.png"
              alt="GUVI MERN Certificate"
              className="mb-6 w-56 h-auto rounded-md border border-gray-200 shadow-sm"
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
              className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
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
