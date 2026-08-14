import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left Side - Branding */}
        <p className="text-sm md:text-base mb-4 md:mb-0">
          © {new Date().getFullYear()} Ranjith Michael · Built with React & TailwindCSS
        </p>

        
      </div>
    </footer>
  );
};

export default Footer;
