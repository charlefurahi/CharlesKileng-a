import { Link, useLocation } from "react-router-dom";
import {
  FaArrowUpRightFromSquare,
  FaBriefcase,
  FaFolderOpen,
  FaHouse,
  FaMoon,
  FaSun,
  FaXmark,
} from "react-icons/fa6";

import resume from "../assets/Charles_Kilenga_CV.pdf";
import "./Sidebar.css";

const SIDEBAR_ITEMS = [
  {
    to: "/",
    label: "Home",
    icon: FaHouse,
  },
  {
    to: "/projects",
    label: "Projects",
    icon: FaBriefcase,
  },
  {
    to: "/blog",
    label: "Blog",
    icon: FaFolderOpen,
  },
  {
    to: "/resources",
    label: "Resources",
    icon: FaFolderOpen,
  },
];

function Sidebar({
  theme,
  toggleTheme,
  isOpen = false,
  onClose,
}) {
  const { pathname } = useLocation();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`portfolio-sidebar ${
          isOpen ? "open" : ""
        }`}
      >
        {/* =====================================================
            TOP
        ====================================================== */}
        <div className="sidebar-top">

          {/* Brand */}
          <div className="sidebar-brand-row">
            <Link
              to="/"
              className="sidebar-brand"
              aria-label="Charles Kilenga Home"
              onClick={onClose}
            >
              <div className="sidebar-brand-mark">
                <span>CK</span>
              </div>

              <div className="sidebar-brand-copy">
                <strong>Charles Kilenga</strong>
                <span>Developer & Designer</span>
              </div>
            </Link>

            {/* Mobile close */}
            <button
              type="button"
              className="sidebar-close-btn"
              onClick={onClose}
              aria-label="Close navigation menu"
            >
              <FaXmark aria-hidden="true" />
            </button>
          </div>

          {/* Small section label */}
          <div className="sidebar-section-label">
            <span>Navigation</span>
          </div>

          {/* Navigation */}
          <nav
            className="sidebar-navigation"
            aria-label="Sidebar navigation"
          >
            {SIDEBAR_ITEMS.map((item) => {
              const Icon = item.icon;

              const isActive =
                pathname === item.to ||
                (item.to !== "/" &&
                  pathname.startsWith(`${item.to}/`));

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`sidebar-link ${
                    isActive ? "active" : ""
                  }`}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  onClick={onClose}
                >
                  <span className="sidebar-link-icon">
                    <Icon aria-hidden="true" />
                  </span>

                  <span className="sidebar-link-label">
                    {item.label}
                  </span>

                  {isActive && (
                    <span
                      className="sidebar-active-dot"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}
        <div className="sidebar-bottom">

          {/* Available status */}
          <div className="sidebar-status">
            <span className="sidebar-status-dot" />

            <div>
              <strong>Available for work</strong>
              <span>Let's build something great.</span>
            </div>
          </div>

          {/* Theme */}
          <button
            type="button"
            className="sidebar-theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === "dark"
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
          >
            <span className="sidebar-theme-icon">
              {theme === "dark" ? (
                <FaSun aria-hidden="true" />
              ) : (
                <FaMoon aria-hidden="true" />
              )}
            </span>

            <span>
              {theme === "dark"
                ? "Light Mode"
                : "Dark Mode"}
            </span>

            <span className="sidebar-theme-arrow">
              →
            </span>
          </button>

          {/* CV */}
          <a
            href={resume}
            download
            className="sidebar-resume"
            aria-label="Download Charles Kilenga CV"
          >
            <span>Download CV</span>

            <FaArrowUpRightFromSquare
              aria-hidden="true"
            />
          </a>

          {/* Footer */}
          <p className="sidebar-footer">
            © {new Date().getFullYear()} Charles Kilenga
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
