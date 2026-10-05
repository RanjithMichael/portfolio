import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("✅ Thanks! Your message has been sent.");
        form.reset();
      } else {
        setStatus("❌ Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("❌ Network error. Please check your connection.");
    }
  };

  return (
    <section id="contact" className="relative py-20 text-gray-200">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]"></div>

      {/* Overlay Glow */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 text-center space-y-8">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          📬 Get In Touch
        </h2>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto text-gray-300">
          Have a project idea or just want to say hi? Fill out the form below or
          connect with me directly through my social links.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mojgvgdd"
          method="POST"
          className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 space-y-6 text-left text-gray-200"
        >
          <div>
            <label className="block font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 rounded-lg bg-[#0F172A] border border-cyan-400 focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 rounded-lg bg-[#0F172A] border border-cyan-400 focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-[#0F172A] border border-cyan-400 focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.6)] hover:scale-105 transition font-semibold"
          >
            ✉️ Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p
            className={`font-medium ${
              status.startsWith("✅")
                ? "text-green-400 bg-green-900/40 px-4 py-2 rounded-lg inline-block"
                : "text-red-400 bg-red-900/40 px-4 py-2 rounded-lg inline-block"
            }`}
          >
            {status}
          </p>
        )}

        {/* Social Links */}
        <div className="flex justify-center gap-8 mt-8 text-lg font-medium">
          <a
            href="https://www.linkedin.com/in/ranjithmichael-backiaraj-592920296"
            className="flex items-center gap-2 text-cyan-400 hover:text-purple-400 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/RanjithMichael"
            className="flex items-center gap-2 text-cyan-400 hover:text-purple-400 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="mailto:ranjithmichael49@gmail.com"
            className="flex items-center gap-2 text-cyan-400 hover:text-purple-400 transition"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="tel:+919677956477"
            className="flex items-center gap-2 text-cyan-400 hover:text-purple-400 transition"
          >
            <FaPhone /> Call Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;


