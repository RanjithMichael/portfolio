const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left Side - Branding */}
        <p className="text-sm md:text-base mb-4 md:mb-0 text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          © {new Date().getFullYear()} Ranjith Michael · Built with React & TailwindCSS
        </p>

        {/* Right Side - Glow Accent */}
        <div className="flex gap-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
          <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(124,58,237,0.8)]"></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


