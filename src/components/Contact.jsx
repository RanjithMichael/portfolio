import React, { useState } from "react";

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
    <section id="contact" className="py-16 bg-gradient-to-r from-blue-50 to-purple-100">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">📬 Contact Me</h2>
        <p className="text-gray-700 mb-8">
          Have a project idea or just want to say hi? Fill out the form below or connect with me directly.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mojgvgdd"
          method="POST"
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            ✉️ Send Message
          </button>
        </form>

        {/* Status Message */}
        {status && (
          <p
            className={`mt-4 font-medium ${
              status.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.linkedin.com/in/ranjithmichael-backiaraj-592920296"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
            aria-label="LinkedIn Profile"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/RanjithMichael"
            className="flex items-center gap-2 text-gray-800 hover:text-black transition"
            aria-label="GitHub Profile"
          >
            💻 GitHub
          </a>
          <a
            href="mailto:ranjithmichael49@gmail.com"
            className="flex items-center gap-2 text-red-600 hover:text-red-800 transition"
            aria-label="Email Me"
          >
            📧 Email
          </a>
          <a
            href="tel:+919677956477"
            className="flex items-center gap-2 text-green-600 hover:text-green-800 transition"
            aria-label="Call Me"
          >
            📞 Call Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
