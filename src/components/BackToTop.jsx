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
    visible && (
      <button
        onClick={scrollToTop}
        className="
          fixed bottom-6 right-6
          bg-gradient-to-r from-blue-500 to-purple-600
          text-white p-4 rounded-full shadow-lg
          hover:scale-110 hover:shadow-xl
          transition transform duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-400
        "
        aria-label="Back to Top"
      >
        ⬆️
      </button>
    )
  );
};

export default BackToTop;

