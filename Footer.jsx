import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a1a3c] text-white pt-12 pb-6 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#FFD700]">E-Cell RGPV</h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Fostering innovation, empowering entrepreneurs, and building the
            leaders of tomorrow at RGPV.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["Home", "About", "Events", "Team", "Contact"].map((link, i) => (
              <li key={i}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="hover:text-[#FFD700] transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
            Connect With Us
          </h3>
          <div className="flex space-x-5">
            <a
              href="#"
              className="hover:text-[#FFD700] transition"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="hover:text-[#FFD700] transition"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href="#"
              className="hover:text-[#FFD700] transition"
              aria-label="Twitter"
            >
              <Twitter size={22} />
            </a>
            <a
              href="#"
              className="hover:text-[#FFD700] transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} E-Cell RGPV. All Rights Reserved.
      </div>
    </footer>
  );
}
