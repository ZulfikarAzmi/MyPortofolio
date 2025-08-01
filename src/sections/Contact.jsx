import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-20 py-20 bg-gradient-to-br from-gray-900 to-cyan-900">
      <h2 className="text-4xl font-bold text-white text-center mb-12">Contact Me</h2>

      <div className="max-w-3xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-xl space-y-6">
        <p className="text-gray-300 text-center">
          Have a question, project, or opportunity to collaborate? Feel free to reach out!
        </p>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
