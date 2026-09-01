import { useState } from "react";

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
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-blue-50 to-purple-100"
    >
      <div className="max-w-3xl mx-auto text-center animate-fadeIn">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-blue-600 mb-6">
          📬 Contact Me
        </h2>
        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
          Have a project idea or just want to say hi? Fill out the form below or
          connect with me directly.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mojgvgdd"
          method="POST"
          className="bg-white p-8 rounded-xl shadow-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-800"
            aria-label="Your Name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-800"
            aria-label="Your Email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-800"
            aria-label="Your Message"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg shadow hover:scale-105 transition transform font-semibold"
            aria-label="Send Message"
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
        <div className="flex justify-center gap-8 mt-10">
          <a
            href="https://www.linkedin.com/in/ranjithmichael-backiaraj-592920296"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition font-medium"
            aria-label="LinkedIn Profile"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/RanjithMichael"
            className="flex items-center gap-2 text-gray-800 hover:text-black transition font-medium"
            aria-label="GitHub Profile"
          >
            💻 GitHub
          </a>
          <a
            href="mailto:ranjithmichael49@gmail.com"
            className="flex items-center gap-2 text-red-600 hover:text-red-800 transition font-medium"
            aria-label="Email Me"
          >
            📧 Email
          </a>
          <a
            href="tel:+919677956477"
            className="flex items-center gap-2 text-green-600 hover:text-green-800 transition font-medium"
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

