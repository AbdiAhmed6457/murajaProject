import { FaFacebookF, FaInstagram, FaTelegramPlane, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-800 via-green-900 to-green-800 text-gray-200 py-16 relative overflow-hidden font-sans">
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* About */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-4 tracking-wide">Murājaʿah</h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Empowering Muslims worldwide to strengthen Qur’an memorization
            and deepen their spiritual connection.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4 text-xl">
            <a href="#" className="hover:text-yellow-400 transition transform hover:scale-125">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-400 transition transform hover:scale-125">
              <FaTelegramPlane />
            </a>
            <a href="#" className="hover:text-yellow-400 transition transform hover:scale-125">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400 transition transform hover:scale-125">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-semibold text-yellow-400 mb-4">Quick Links</h4>
          <ul className="space-y-3 text-base">
            <li>
              <a href="#features" className="hover:text-yellow-400 transition-colors font-medium">Features</a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition-colors font-medium">About Us</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition-colors font-medium">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h4 className="text-2xl font-semibold text-yellow-400 mb-4">Contact</h4>
          <div className="space-y-3 text-base">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaMapMarkerAlt className="text-yellow-400"/> Addis Ababa, Ethiopia
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaPhoneAlt className="text-yellow-400"/> +251-900-000-000
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope className="text-yellow-400"/> info@murajaa.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 text-center text-gray-400 text-sm border-t border-gray-700 pt-6 relative z-10">
        © {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">Murājaʿah</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
