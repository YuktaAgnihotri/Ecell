import React from "react";
import { Lightbulb, Users, Rocket, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "Innovation Hub",
      description:
        "A platform that nurtures creativity and disruptive ideas, turning them into impactful ventures.",
      icon: <Lightbulb className="w-10 h-10 text-[#FFD700]" />,
    },
    {
      title: "Community",
      description:
        "Join a vibrant network of entrepreneurs, mentors, and industry leaders to learn and grow.",
      icon: <Users className="w-10 h-10 text-[#FFD700]" />,
    },
    {
      title: "Startup Support",
      description:
        "From ideation to execution, get guidance, workshops, and resources to launch your startup.",
      icon: <Rocket className="w-10 h-10 text-[#FFD700]" />,
    },
    {
      title: "Industry Connect",
      description:
        "Bridge the gap between students and the entrepreneurial ecosystem with strong corporate ties.",
      icon: <Briefcase className="w-10 h-10 text-[#FFD700]" />,
    },
  ];

  return (
    <section className="bg-[#0a1a3c] text-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#FFD700]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why Choose E-Cell RGPV?
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We empower students to become leaders and changemakers by fostering
          entrepreneurship and innovation through initiatives, events, and
          mentorship.
        </motion.p>
      </div>

      {/* Feature Cards with fade-up */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transition transform"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-[#FFD700] mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
