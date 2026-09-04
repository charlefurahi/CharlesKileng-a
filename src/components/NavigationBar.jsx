import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBars,
  FaDownload,
  FaMoon,
  FaSun,
} from "react-icons/fa6";

import resume from "../assets/Charles_Kilenga_CV.pdf";
import ckPhoto from "../assets/ck.png";
import "./NavigationBar.css";

const NAV_ITEMS = [
  { to: "/", label: "Home" },
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

  const isDark = theme === "dark";

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        isDark ? "navbar-dark" : "navbar-light"
      }`}
      aria-label="Main navigation"
    >
      {/* =====================================================
          PROFILE / LOGO
      ====================================================== */}
      <Link
        to="/"
        className="nav-avatar"
        aria-label="Charles Kilenga Home"
      >
        <img src={ckPhoto} alt="Charles Kilenga" />

        <span
          className="nav-online-dot"
          aria-hidden="true"
        />
      </Link>

      {/* =====================================================
          DESKTOP NAVIGATION — every page link lives here.
          Hidden on mobile/tablet in favor of the sidebar.
      ====================================================== */}
      <div className="nav-pill">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.to;

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`nav-link ${
                isActive ? "active" : ""
              }`}
              aria-current={
                isActive ? "page" : undefined
              }
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* =====================================================
          RIGHT SIDE ACTIONS
      ====================================================== */}
      <div className="nav-right">

        {/* Theme Toggle */}
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={
            isDark
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          title={
            isDark
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
        >
          {isDark ? (
            <FaSun aria-hidden="true" />
          ) : (
            <FaMoon aria-hidden="true" />
          )}
        </button>

        {/* Download CV */}
        <a
          href={resume}
          download
          className={`btn btn-outline nav-resume-btn ${
            isDark
              ? "nav-resume-dark"
              : "nav-resume-light"
          }`}
          aria-label="Download Charles Kilenga CV"
        >
          <span>Download CV</span>
          <FaDownload aria-hidden="true" />
        </a>

        {/* Mobile / Tablet Menu — opens the Sidebar, which carries
            every page link. Only visible below the nav-pill breakpoint. */}
        <button
          type="button"
          className="nav-hamburger"
          onClick={onOpenSidebar}
          aria-label="Open navigation menu"
          aria-expanded="false"
        >
          <FaBars aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
}

export default NavigationBar;