import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-8">

        {/* LEFT */}
        <div>
          <img src={logo} alt="logo" className="h-10 mb-4" />
          <p className="text-sm opacity-70">
            Build Strength. Gain Confidence.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-xl text-[var(--color-primary)]">
            <span><FaFacebook /></span>
            <span><FaInstagram /></span>
            <span><FaWhatsapp /></span>
          </div>
        </div>
      </div>

      <div className="text-center text-xs opacity-60 mt-8">
        © 2026 Fitness Sports Center. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;