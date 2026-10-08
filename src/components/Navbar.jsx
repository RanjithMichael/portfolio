import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = ["about", "skills", "projects", "certifications", "contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F172A]/80 backdrop-blur-md shadow-lg z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-wide hover:scale-105 transition-transform"
        >
          Ranjith Michael
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`relative after:content-[''] after:block after:h-[2px] after:bg-gradient-to-r from-cyan-400 to-purple-500 after:transition-all after:duration-300 ${
                  activeSection === item
                    ? "text-cyan-400 after:w-full font-semibold"
                    : "hover:text-purple-400 after:w-0 hover:after:w-full"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-400 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <ul className="md:hidden bg-[#0F172A] text-gray-200 px-6 py-4 space-y-4 shadow-lg">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className={`block ${
                  activeSection === item
                    ? "text-cyan-400 font-semibold"
                    : "hover:text-purple-400"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
