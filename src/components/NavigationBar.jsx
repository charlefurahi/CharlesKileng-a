import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaXmark,
  FaDownload,
  FaHouse,
  FaArrowUpRightFromSquare,
  FaSun,
  FaMoon,
} from "react-icons/fa6";

import resume from "../assets/Charles_Kilenga_CV.pdf";
import ckPhoto from "../assets/MaryChalesk.jpg";

const NAV_ITEMS = [
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/resources", label: "Resources" },
];

function NavigationBar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* PROFILE */}
        <Link
          to="/"
          className="nav-avatar"
          aria-label="Charles Kilenga — Home"
        >
          <img src={ckPhoto} alt="Charles Kilenga" />
          <span className="nav-online-dot" />
        </Link>

        {/* CENTER NAVIGATION */}
        <div className="nav-pill">
          <Link
            to="/"
            className={`nav-pill-home ${
              pathname === "/" ? "active" : ""
            }`}
            aria-label="Home"
          >
            <FaHouse />
          </Link>

          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${
                pathname === item.to ? "active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="nav-right">

          {/* THEME SWITCHER */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
            title={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* DOWNLOAD CV */}
          <a
            href={resume}
            download
            className="btn btn-outline nav-resume-btn"
          >
            <span>Download CV</span>
            <FaDownload />
          </a>

          {/* MOBILE MENU */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="nav-close-btn"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaXmark />
            </button>

            <div className="mobile-menu-brand">
              <img src={ckPhoto} alt="" />
              <span>Charles Kilenga</span>
            </div>

            <Link
              to="/"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            {NAV_ITEMS.map((item, i) => (
              <motion.span
                key={item.to}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={item.to}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.span>
            ))}

            {/* MOBILE THEME BUTTON */}
            <button
              className="mobile-theme-toggle"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
              <span>
                {theme === "dark"
                  ? "Light Mode"
                  : "Dark Mode"}
              </span>
            </button>

            <a
              href={resume}
              download
              className="btn btn-primary mobile-resume"
              onClick={() => setMenuOpen(false)}
            >
              Download CV
              <FaArrowUpRightFromSquare />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavigationBar;