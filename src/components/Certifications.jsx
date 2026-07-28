import React from "react";

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">
          📜 Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Certification Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
            <img
              src="/GuviCertification.png"
              alt="GUVI MERN Certificate"
              className="mx-auto mb-4 w-48 h-auto rounded-md border border-gray-200"
            />
            <p className="text-lg font-semibold text-gray-800">
              GUVI MERN Full‑Stack Certification
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Issued by GUVI Geek Network, validating skills in MongoDB, Express, React, and Node.js.
            </p>
          </div>

          {/* Example for future certifications */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1">
            <img
              src="/FutureCert.png"
              alt="Future Certification"
              className="mx-auto mb-4 w-48 h-auto rounded-md border border-gray-200"
            />
            <p className="text-lg font-semibold text-gray-800">
              Future Certification Placeholder
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Add more certificates here as you earn them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;



