import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaDownload,
  FaHouse,
  FaMoon,
  FaSun,
} from "react-icons/fa6";

import resume from "../assets/Chifu_Kilenga_Resume.pdf";
import ckPhoto from "../assets/ck.png";

const NAV_ITEMS = [
  { to: "/projects", label: "Projects" },
  { to: "/blog", label: "Blog" },
  { to: "/resources", label: "Resources" },
];

function NavigationBar({ theme, toggleTheme, onOpenSidebar }) {
  const [scrolled, setScrolled] = useState(false);
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

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      aria-label="Main navigation"
    >
      <Link
        to="/"
        className="nav-avatar"
        aria-label="Charles Kilenga Home"
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

        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.to;

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${isActive ? "active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="nav-right">
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
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

        {/* Opens the Sidebar as an on-demand drawer — sidebar owns its own
            close button + backdrop, so this button only needs to open it. */}
        <button
          type="button"
          className="nav-hamburger"
          onClick={onOpenSidebar}
          aria-label="Open navigation menu"
        >
          <FaBars aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;