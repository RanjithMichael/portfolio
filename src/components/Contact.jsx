import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("maeqbvgn"); // <-- your actual Formspree ID

  return (
    <>
      <section id="contact" className="relative py-16 bg-sectionDark text-gray-200 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-[#1E293B]" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-geometric blur-sm animate-pattern-move" />

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-shimmer"
        >
          ✨ Contact Me
        </motion.h2>

        {/* Content Grid */}
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          
          {/* Left Card - Formspree Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white/5 rounded-xl p-8 shadow-lg"
          >
            {state.succeeded ? (
              <p className="text-green-400 font-semibold">✅ Message sent successfully!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-lg bg-black/40 border border-gray-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-lg bg-black/40 border border-gray-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon-purple"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="w-full p-3 rounded-lg bg-black/40 border border-gray-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon-pink"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-semibold shadow-lg hover:scale-105 transition-transform animate-glow-cycle"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Card - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between bg-white/5 rounded-xl p-8 shadow-lg"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink">
                📬 Get in Touch
              </h3>
              <p className="text-lg text-gray-300">You can also reach me here:</p>

             {/* Social Links */}
             <div className="flex flex-col md:flex-row gap-3 justify-center md:justify-start max-w-xl mx-auto w-full">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=backiarajranjithmichael@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Ranjith,"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-sm rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-medium shadow-md hover:scale-105 transition-transform animate-glow-cycle"
             >
              <FaEnvelope className="text-base" /> Email
             </a>

             <a
               href="https://www.linkedin.com/in/ranjithmichael-backiaraj-592920296"
               target="_blank"
               rel="noopener noreferrer"
               className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-sm rounded-full bg-gradient-to-r from-neon-purple to-neon-pink text-white font-medium shadow-md hover:scale-105 transition-transform animate-glow-cycle"
              >
              <FaLinkedin className="text-base" /> LinkedIn
              </a>

              <a
               href="https://github.com/RanjithMichael"
               target="_blank"
               rel="noopener noreferrer"
               className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-sm rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink text-white font-medium shadow-md hover:scale-105 transition-transform animate-glow-cycle"
              >
              <FaGithub className="text-base" /> GitHub
              </a>
              </div>



            <div className="mt-8 space-y-4 text-center md:text-left">
              <p className="text-gray-400">Thanks for scrolling.</p>
              <p className="text-gray-400">Feel free to reach out!</p>
            </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Neon Divider */}
      <div className="w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-lg animate-pulse" />
    </>
  );
};

export default Contact;


