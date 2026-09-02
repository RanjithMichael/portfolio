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
      className="py-24 bg-gradient-to-r from-blue-50 to-purple-100"
    >
      <div className="max-w-5xl mx-auto px-6 text-center animate-fadeIn">
        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-blue-600 mb-8">
          📬 Get In Touch
        </h2>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-2xl mx-auto">
          Have a project idea or just want to say hi? Fill out the form below or
          connect with me directly through my social links.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/mojgvgdd"
          method="POST"
          className="bg-white rounded-2xl shadow-xl p-10 space-y-6 text-left"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-800"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 text-gray-800"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg shadow hover:scale-105 transition font-semibold"
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
        <div className="flex justify-center gap-8 mt-12">
          <a
            href="https://www.linkedin.com/in/ranjithmichael-backiaraj-592920296"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition font-medium"
          >
            🔗 LinkedIn
          </a>
          <a
            href="https://github.com/RanjithMichael"
            className="flex items-center gap-2 text-gray-800 hover:text-black transition font-medium"
          >
            💻 GitHub
          </a>
          <a
            href="mailto:ranjithmichael49@gmail.com"
            className="flex items-center gap-2 text-red-600 hover:text-red-800 transition font-medium"
          >
            📧 Email
          </a>
          <a
            href="tel:+919677956477"
            className="flex items-center gap-2 text-green-600 hover:text-green-800 transition font-medium"
          >
            📞 Call Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;



