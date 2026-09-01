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

import ckPhoto from "../assets/ck.png";
import resume from "../assets/Chifu_Kilenga_Resume.pdf";

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

function Sidebar({ theme, toggleTheme, isOpen = false, onClose }) {
  const { pathname } = useLocation();

  return (
    <>
      {/* Backdrop: only relevant on mobile/tablet, when the sidebar is opened via the navbar button */}
      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside className={`portfolio-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-top">
          <div className="sidebar-top-row">
            <Link
              to="/"
              className="sidebar-profile"
              aria-label="Charles Kilenga Home"
              onClick={onClose}
            >
              <div className="sidebar-avatar-wrap">
                <img
                  src={ckPhoto}
                  alt="Charles Kilenga"
                  className="sidebar-avatar"
                />
                <span
                  className="sidebar-online-dot"
                  aria-label="Available"
                />
              </div>

              <div className="sidebar-profile-text">
                <strong>Charles Kilenga</strong>
                <span>Developer & Designer</span>
              </div>
            </Link>

            <button
              type="button"
              className="sidebar-close-btn"
              onClick={onClose}
              aria-label="Close navigation menu"
            >
              <FaXmark aria-hidden="true" />
            </button>
          </div>

          <nav
            className="sidebar-navigation"
            aria-label="Sidebar navigation"
          >
            {SIDEBAR_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`sidebar-link ${
                    isActive ? "active" : ""
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={onClose}
                >
                  <Icon aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="sidebar-bottom">
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
            {theme === "dark" ? (
              <FaSun aria-hidden="true" />
            ) : (
              <FaMoon aria-hidden="true" />
            )}

            <span>
              {theme === "dark"
                ? "Light Mode"
                : "Dark Mode"}
            </span>
          </button>

          <a
            href={resume}
            download
            className="sidebar-resume"
            aria-label="Download Charles Kilenga CV"
          >
            <span>Download CV</span>
            <FaArrowUpRightFromSquare aria-hidden="true" />
          </a>

          <p className="sidebar-footer">
            © {new Date().getFullYear()} Charles Kilenga
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;