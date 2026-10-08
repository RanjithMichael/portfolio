import { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button when scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 w-12 h-12
        rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink
        text-white shadow-lg flex items-center justify-center
        transition-all duration-300 ease-in-out
        hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]
        focus:outline-none focus:ring-2 focus:ring-neon-cyan
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
        animate-glow-cycle
      `}
      aria-label="Back to Top"
    >
      ⬆️
    </button>
  );
};

export default BackToTop;

