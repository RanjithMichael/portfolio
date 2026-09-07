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
      className="py-24 bg-gradient-to-r from-blue-600 to-teal-500 text-white"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-6">📬 Get In Touch</h2>
        <p className="text-lg mb-12 leading-relaxed max-w-2xl mx-auto">
          Have a project idea or just want to say hi? Fill out the form below or
          connect with me directly through my social links.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mojgvgdd"
          method="POST"
          className="bg-white rounded-xl shadow-xl p-10 space-y-6 text-left text-gray-800"
        >
          <div>
            <label className="block font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-lg shadow hover:opacity-90 hover:scale-105 transition font-semibold"
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
        <div className="flex justify-center gap-8 mt-12 text-lg font-medium">
          <a
            href="https://www.linkedin.com/in/ranjithmichael-backiaraj-592920296"
            className="flex items-center gap-2 hover:text-gray-200 transition"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/RanjithMichael"
            className="flex items-center gap-2 hover:text-gray-200 transition"
          >
            💻 GitHub
          </a>
          <a
            href="mailto:ranjithmichael49@gmail.com"
            className="flex items-center gap-2 hover:text-gray-200 transition"
          >
            📧 Email
          </a>
          <a
            href="tel:+919677956477"
            className="flex items-center gap-2 hover:text-gray-200 transition"
          >
            📞 Call Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
