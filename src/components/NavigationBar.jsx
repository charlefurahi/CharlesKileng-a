import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
FaArrowUpRightFromSquare,
FaBars,
FaDownload,
FaHouse,
FaMoon,
FaSun,
FaXmark,
} from "react-icons/fa6";

import resume from "../assets/Chifu_Kilenga_Resume.pdf";
import ckPhoto from "../assets/ck.png";

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
const handleScroll = () => {
setScrolled(window.scrollY > 28);
};

handleScroll();

window.addEventListener("scroll", handleScroll, {
  passive: true,
});

return () => {
  window.removeEventListener("scroll", handleScroll);
};

}, []);

useEffect(() => {
setMenuOpen(false);
}, [pathname]);

useEffect(() => {
const handleKeyDown = (event) => {
if (event.key === "Escape") {
setMenuOpen(false);
}
};

if (menuOpen) {
  document.addEventListener("keydown", handleKeyDown);
  document.body.style.overflow = "hidden";
}

return () => {
  document.removeEventListener("keydown", handleKeyDown);
  document.body.style.overflow = "";
};

}, [menuOpen]);

const closeMenu = () => {
setMenuOpen(false);
};

const handleThemeToggle = () => {
toggleTheme();
};

return (
<>
<nav
className={"navbar ${scrolled ? "scrolled" : ""}"}
aria-label="Main navigation"
>
<Link
to="/"
className="nav-avatar"
aria-label="Charles Kilenga — Home"
>
<img src={ckPhoto} alt="Charles Kilenga" />
<span className="nav-online-dot" aria-hidden="true" />
</Link>

    <div className="nav-pill">
      <Link
        to="/"
        className={`nav-pill-home ${
          pathname === "/" ? "active" : ""
        }`}
        aria-label="Home"
        aria-current={pathname === "/" ? "page" : undefined}
      >
        <FaHouse aria-hidden="true" />
      </Link>

      {NAV_ITEMS.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`nav-link ${
            pathname === item.to ? "active" : ""
          }`}
          aria-current={pathname === item.to ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
    </div>

    <div className="nav-right">
      <button
        type="button"
        className="theme-toggle"
        onClick={handleThemeToggle}
        aria-label={
          theme === "dark"
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
        title={theme === "dark" ? "Light mode" : "Dark mode"}
      >
        {theme === "dark" ? (
          <FaSun aria-hidden="true" />
        ) : (
          <FaMoon aria-hidden="true" />
        )}
      </button>

      <a
        href={resume}
        download
        className="btn btn-outline nav-resume-btn"
        aria-label="Download Charles Kilenga CV"
      >
        <span>Download CV</span>
        <FaDownload aria-hidden="true" />
      </a>

      <button
        type="button"
        className="nav-hamburger"
        onClick={() => setMenuOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation-menu"
      >
        <FaBars aria-hidden="true" />
      </button>
    </div>
  </nav>

  <AnimatePresence>
    {menuOpen && (
      <motion.div
        id="mobile-navigation-menu"
        className="nav-mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <button
          type="button"
          className="nav-close-btn"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        >
          <FaXmark aria-hidden="true" />
        </button>

        <div className="mobile-menu-brand">
          <img src={ckPhoto} alt="Charles Kilenga" />
          <span>Charles Kilenga</span>
        </div>

        <Link
          to="/"
          className={`nav-link ${
            pathname === "/" ? "active" : ""
          }`}
          onClick={closeMenu}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          Home
        </Link>

        {NAV_ITEMS.map((item, index) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.06,
              duration: 0.25,
            }}
          >
            <Link
              to={item.to}
              className={`nav-link ${
                pathname === item.to ? "active" : ""
              }`}
              onClick={closeMenu}
              aria-current={
                pathname === item.to ? "page" : undefined
              }
            >
              {item.label}
            </Link>
          </motion.div>
        ))}

        <button
          type="button"
          className="mobile-theme-toggle"
          onClick={handleThemeToggle}
          aria-label={
            theme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          {theme === "dark" ? (
            <FaSun aria-hidden="true" />
          ) : (
            <FaMoon aria-hidden="true" />
          )}

          <span>
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </button>

        <a
          href={resume}
          download
          className="btn btn-primary mobile-resume"
          onClick={closeMenu}
          aria-label="Download Charles Kilenga CV"
        >
          <span>Download CV</span>
          <FaArrowUpRightFromSquare aria-hidden="true" />
        </a>
      </motion.div>
    )}
  </AnimatePresence>
</>

);
}

export default NavigationBar;
