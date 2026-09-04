import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/SideBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProjectsPage from "./components/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ResourcesPage from "./pages/ResourcesPage";

function App() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("portfolio-theme") || "dark"
  );

  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "portfolio-theme",
      theme
    );
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow =
      sidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener(
        "keydown",
        handleKeyDown
      );
    }

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [sidebarOpen]);

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark"
        ? "light"
        : "dark"
    );
  };

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app">
      {/* Desktop and mobile navigation */}
      <NavigationBar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenSidebar={openSidebar}
      />

      {/* Sidebar is used only on small screens */}
      <Sidebar
        theme={theme}
        toggleTheme={toggleTheme}
        isOpen={sidebarOpen}
        onClose={closeSidebar}
      />

      <div className="main-content">
        <main>
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/projects"
              element={<ProjectsPage />}
            />

            <Route
              path="/blog"
              element={<BlogPage />}
            />

            <Route
              path="/resources"
              element={<ResourcesPage />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;