const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left Side - Branding */}
        <p className="text-sm md:text-base mb-4 md:mb-0 text-center md:text-left">
          © {new Date().getFullYear()} Ranjith Michael · Built with React & TailwindCSS
        </p>

        
      </div>
    </footer>
  );
};

export default Footer;

