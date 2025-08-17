import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0a1a3c] text-white py-20 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="https://img.freepik.com/free-vector/startup-launch-concept-illustration_114360-1536.jpg"
            alt="About E-Cell RGPV"
            className="rounded-2xl shadow-2xl max-w-md w-full border-2 border-[#FFD700]"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-6">
            About E-Cell RGPV
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            The Entrepreneurship Cell, RGPV is a student-driven initiative
            dedicated to fostering entrepreneurial spirit among young innovators
            and changemakers. We create an ecosystem that nurtures ideas,
            encourages risk-taking, and provides mentorship to build successful
            ventures.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Through workshops, hackathons, networking events, and incubation
            support, we aim to empower students to transform their vision into
            reality and contribute to India’s growing startup culture.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#FFD700] text-[#0a1a3c] font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition"
          >
            Join Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
