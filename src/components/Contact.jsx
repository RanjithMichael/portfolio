import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 text-gray-200">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]" />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Contact Info */}
        <div className="space-y-8 text-center md:text-left">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-shimmer">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-gray-300">Contact.</p>

          {/* Social Buttons */}
          <div className="flex flex-col gap-4 max-w-xs mx-auto md:mx-0">
            <a
              href="mailto:ranjithmichael49@gmail.com"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 rounded-lg hover:bg-cyan-500 hover:text-black transition font-semibold"
            >
              <FaEnvelope /> EMAIL
            </a>
            <a
              href="https://www.linkedin.com/in/ranjithmichael-backiaraj-592920296"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 rounded-lg hover:bg-purple-500 hover:text-black transition font-semibold"
            >
              <FaLinkedin /> LINKEDIN
            </a>
            <a
              href="https://github.com/RanjithMichael"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 rounded-lg hover:bg-blue-500 hover:text-black transition font-semibold"
            >
              <FaGithub /> GITHUB
            </a>
          </div>

          {/* Resume Button */}
          <div className="mt-8">
            <a
              href="/Ranjith_Michael_B_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg shadow-lg hover:scale-105 transition font-semibold"
            >
              RESUME ➜
            </a>
          </div>

          <p className="mt-6 text-gray-400">Thanks for scrolling.</p>
        </div>

        {/* Right Side: Visual */}
        <div className="flex justify-center md:justify-end">
          <img
            src="https://res.cloudinary.com/naqamlzv/image/upload/v1791451593/contact-banner.jpg" 
            alt="Contact Visual"
            className="rounded-xl shadow-lg max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;




