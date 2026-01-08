"use client"; // ← Next.js client component

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" }, // added
    { name: "Skills", href: "#skills" },
    { name: "CV", href: "#CV" },       // added
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full z-50 backdrop-blur-md bg-opacity-90 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo / Name */}
        <div className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Shwetha Rajesh
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative hover:text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 transition-all font-medium"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? (
              <span className="text-2xl">✖</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 hover:scale-105 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
