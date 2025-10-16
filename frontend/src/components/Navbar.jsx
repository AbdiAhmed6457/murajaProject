// src/components/Navbar.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logotop from "../assets/clear-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-yellow-300 shadow-2xl fixed w-full z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo - centered on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none flex items-center space-x-3 cursor-pointer group">
            <div className="relative">
              {/* Glowing circle */}
              <div className="absolute inset-0 bg-yellow-400/30 blur-md rounded-full scale-125 group-hover:scale-150 transition-transform duration-500"></div>

              {/* Logo image */}
              <img
                src={logotop}
                alt="Murājaʿah Logo"
                className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-yellow-400 shadow-lg shadow-yellow-300/20 group-hover:rotate-6 transition-transform duration-500"
              />
            </div>

            <a
              href="/"
              className="text-2xl md:text-3xl font-extrabold tracking-wide group-hover:text-white transition-colors duration-300"
            >
              Murājaʿah
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10 lg:space-x-14 items-center text-lg lg:text-xl font-medium">
            <a
              href="#features"
              className="relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full"
            >
              Features
            </a>
            <a
              href="#about"
              className="relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full"
            >
              About
            </a>
            <a
              href="#contact"
              className="relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full"
            >
              Contact
            </a>
            <Button
              size="sm"
              className="bg-yellow-300 text-green-900 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-300/30 transition-all duration-300 rounded-full font-semibold px-6 py-2 text-base lg:text-lg"
            >
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden absolute right-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-yellow-300 hover:text-white transition-colors duration-300"
            >
              {isOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 opacity-100 mt-2 mb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center space-y-4 py-5 bg-green-800/90 rounded-xl shadow-lg text-lg">
            <a
              href="#features"
              className="text-yellow-200 hover:text-white transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-yellow-200 hover:text-white transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-yellow-200 hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
            <Button
              size="sm"
              className="bg-yellow-300 text-green-900 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-300/30 transition-all duration-300 rounded-full font-semibold px-6 py-2 text-base"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
