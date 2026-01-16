import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />

            <p className="mt-4 text-sm leading-relaxed">
              AL-Wataniya International School provides holistic education in an
              Islamic environment, following CBSE pattern with strong focus on
              values, discipline, and academics.
            </p>

            {/* Leadership */}
            <div className="mt-4 text-sm text-gray-400 space-y-1">
              <p>
                <span className="text-white font-medium">Director:</span> Abdul
                Kadir
              </p>
              <p>
                <span className="text-white font-medium">Principal:</span> Md
                Zeeshan Hasmi
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-yellow-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/enquire" className="hover:text-yellow-400">
                  Enquire
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt />
                Millat Colony, Kanke, Ranchi – 834006
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                <a href="tel:9279809145" className="hover:text-yellow-400">
                  9279809145
                </a>
                ,&nbsp;
                <a href="tel:6201543640" className="hover:text-yellow-400">
                  6201543640
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                info@alwataniya.edu
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">School Hours</h3>
            <p className="text-sm">
              For any queries <br />
              09:00 AM – 02:00 PM
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-lg">
              <a
                href="https://www.instagram.com/al_wataniya_school"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/AlWataniyaSchool"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com/@AlWataniyaSchool"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} AL-Wataniya International School. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
