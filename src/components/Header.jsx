import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `block py-2 ${isActive ? "text-yellow-400" : "text-white"}`;

  return (
    <header className="sticky  top-0 z-50 bg-slate-900">
      <nav className="max-w-7xl mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <NavLink to={"/"} className={'w-24 h-24'}>
            <img src="/logo.png" className="w-full h-full object-cover" alt="" />   
          </NavLink>

          {/* Hamburger */}
          <button
            className="md:hidden text-yellow-400 text-3xl focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium">
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/feature" className={linkClass}>
              Features
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About Us
            </NavLink>
            <NavLink to="/gallery" className={linkClass}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact Us
            </NavLink>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 py-4 border-t border-slate-700 text-lg">
            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              end
              className={linkClass}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/feature"
              className={linkClass}
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/about"
              className={linkClass}
            >
              About Us
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/gallery"
              className={linkClass}
            >
              Gallery
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/contact"
              className={linkClass}
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
