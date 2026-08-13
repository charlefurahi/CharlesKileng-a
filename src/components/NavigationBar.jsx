import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { useActiveSection } from "../hooks/useActiveSection";
import resume from "../assets/Chifu_Kilenga_Resume.pdf";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
const NAV_IDS = NAV_ITEMS.map((n) => n.id);

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(NAV_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => scrollToSection("hero")}>
          Kileng'a <span className="gradient-text">Charles</span>
        </div>

        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className={`nav-link ${active === item.id ? "active" : ""}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

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
            {NAV_ITEMS.map((item, i) => (
              <motion.span
                key={item.id}
                className={`nav-link ${active === item.id ? "active" : ""}`}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {item.label}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavigationBar;