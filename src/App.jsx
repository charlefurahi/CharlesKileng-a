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
document.documentElement.setAttribute("data-theme", theme);
localStorage.setItem("portfolio-theme", theme);
}, [theme]);

useEffect(() => {
document.body.style.overflow = sidebarOpen ? "hidden" : "";
return () => {
document.body.style.overflow = "";
};
}, [sidebarOpen]);

useEffect(() => {
if (!sidebarOpen) return;

const handleKeyDown = (event) => {
if (event.key === "Escape") {
setSidebarOpen(false);
}
};

document.addEventListener("keydown", handleKeyDown);
return () => document.removeEventListener("keydown", handleKeyDown);
}, [sidebarOpen]);

const toggleTheme = () => {
setTheme((current) =>
current === "dark" ? "light" : "dark"
);
};

const openSidebar = () => setSidebarOpen(true);
const closeSidebar = () => setSidebarOpen(false);

return (
<div className="app">
{/* Sidebar: always present on desktop, opens on demand on mobile/tablet */}
<Sidebar
theme={theme}
toggleTheme={toggleTheme}
isOpen={sidebarOpen}
onClose={closeSidebar}
/>

  {/* Main Application */}
  <div className="main-content">
    {/* Mobile / Tablet Navigation */}
    <NavigationBar
      theme={theme}
      toggleTheme={toggleTheme}
      onOpenSidebar={openSidebar}
    />

    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
      </Routes>
    </main>

    <Footer />
  </div>
</div>

);
}

export default App;