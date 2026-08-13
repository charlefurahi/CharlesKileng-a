import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaDownload, FaHome } from "react-icons/fa";
import resume from "../assets/Chifu_Kilenga_Resume.pdf";
import ckPhoto from "../assets/ck.png";

const NAV_ITEMS = [
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/resources", label: "Resources" },
];

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="nav-avatar" aria-label="Home">
          <img src={ckPhoto} alt="Charles Kileng'a" />
        </Link>

        <div className="nav-pill">
          <Link
            to="/"
            className={`nav-pill-home ${pathname === "/" ? "active" : ""}`}
            aria-label="Home"
          >
            <FaHome />
          </Link>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${pathname === item.to ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <a href={resume} download className="btn btn-outline nav-resume-btn">
            <FaDownload /> Resume
          </a>
          <button className="nav-hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <FaBars />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button className="nav-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <FaTimes />
            </button>
            <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            {NAV_ITEMS.map((item, i) => (
              <motion.span
                key={item.to}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <Link to={item.to} className="nav-link" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </motion.span>
            ))}
            <a href={resume} download className="btn btn-primary" onClick={() => setMenuOpen(false)}>
              <FaDownload /> Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavigationBar;