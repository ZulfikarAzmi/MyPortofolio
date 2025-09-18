import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xrbawjjp");

  return (
    <section id="contact" className="px-6 md:px-20 py-20 bg-gradient-to-br from-gray-900 to-cyan-900">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Contact Me</h2>

      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6">
        {state.succeeded ? (
          <p className="text-green-400 text-center">Thank you! Your message has been sent.</p>
        ) : (
          <>
            <p className="text-gray-300 text-center">
              Have a question, project, or opportunity to collaborate? Feel free to reach out!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your message..."
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition transform hover:scale-105 disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;
