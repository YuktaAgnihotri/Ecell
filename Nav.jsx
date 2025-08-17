import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0a1a3c] text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-wide text-[#FFD700]">
              E-Cell RGPV
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-base font-medium">
            {["Home", "About", "Events", "Team", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                <span className="transition text-white group-hover:text-[#FFD700]">
                  {item}
                </span>
                {/* Golden underline effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#FFD700] transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a1a3c] px-6 pb-4 space-y-3 text-center text-lg">
          {["Home", "About", "Events", "Team", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block relative group"
              onClick={() => setIsOpen(false)}
            >
              <span className="transition text-white group-hover:text-[#FFD700]">
                {item}
              </span>
              {/* Golden underline for mobile as well */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
