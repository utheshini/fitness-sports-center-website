import { useState } from "react";
import logo from "../assets/logo.png";
import {
  IoSunnyOutline,
  IoMoonOutline,
  IoMenuOutline,
  IoCloseOutline,
} from "react-icons/io5";

const navLinks = [
  { name: "Home", to: "/" },
  { name: "About", to: "#about" },
  { name: "Services", to: "#services" },
  { name: "Plans", to: "#plans" },
  { name: "Trainers", to: "#trainers" },
  { name: "Contact", to: "#contact" },
];

function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img
            src={logo}
            alt="Fitness Center Logo"
            className="w-auto h-8 md:h-16"
          />
        </a>

        {/* CTA centered on mobile screen */}
        <a href="#plans" className="md:hidden btn-primary px-4 py-1.5 text-sm">
          Join Now
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-sm text-white font-medium">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <a href={link.to} className="transition duration-300">
                {link.name}
              </a>

              {/* Underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--color-primary)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-[#1f1f1f] text-white hover:bg-[var(--color-hoverDark)] transition-colors duration-300 ease-in-out cursor-pointer"
          >
            {theme === "light" ? (
              <IoMoonOutline className="w-4 h-4" />
            ) : (
              <IoSunnyOutline className="w-4 h-4" />
            )}
          </button>

          {/* Desktop CTA */}
          <a href="#plans" className="hidden md:inline-block btn-primary">
            Join Now
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white cursor-pointer"
          >
            {isMenuOpen ? (
              <IoCloseOutline className="w-4 h-4" />
            ) : (
              <IoMenuOutline className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white px-6 pb-6">
          <ul className="flex flex-col gap-5 text-sm">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a href={link.to} onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>

                {/* Underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[var(--color-primary)] transition-all duration-300 ease-in-out group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
