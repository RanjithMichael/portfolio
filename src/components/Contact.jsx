import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <form
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

      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://www.linkedin.com/in/ranjithmichael-backiaraj-592920296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/RanjithMichael"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href="mailto:ranjithmichael49@gmail.com"
          className="text-blue-600 hover:underline"
        >
          Email
        </a>
        <a href="tel:+919677956477" className="text-blue-600 hover:underline">
        Call Me
       </a>
      </div>
    </section>
  );
};

export default Contact;

