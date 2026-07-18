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
    <section id="contact" className="py-10">
      <h2 className="text-2xl font-bold text-center mb-6">Contact</h2>
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mojgvgdd"
        method="POST"
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-2 mb-4 border rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
      {/* Status Message */}
      {status && (
        <p
          className={`mt-4 text-center ${
            status.startsWith("✅") ? "text-green-600" : "text-red-600"
          }`}
        >
          {status}
        </p>
      )}
      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://www.linkedin.com/in/ranjithmichael-backiaraj-592920296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="text-blue-600 hover:underline"
          aria-label="LinkedIn Profile"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/RanjithMichael"
          className="text-blue-600 hover:underline"
          aria-label="GitHub Profile"
        >
          GitHub
        </a>
        <a
          href="mailto:ranjithmichael49@gmail.com"
          className="text-blue-600 hover:underline"
          aria-label="Email Me"
        >
          Email
        </a>
        <a href="tel:+919677956477" 
        className="text-blue-600 hover:underline"
        aria-label="call Me"
      >
        Call Me
       </a>
      </div>
    </section>
  );
};

export default Contact;

