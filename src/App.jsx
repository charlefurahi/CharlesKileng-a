import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProjectsPage from "./components/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ResourcesPage from "./pages/ResourcesPage";

function App() {
const [theme, setTheme] = useState(() =>
localStorage.getItem("portfolio-theme") || "dark"
);

useEffect(() => {
document.documentElement.setAttribute("data-theme", theme);
localStorage.setItem("portfolio-theme", theme);
}, [theme]);

const toggleTheme = () => {
setTheme((current) =>
current === "dark" ? "light" : "dark"
);
};

return (
<div className="app">
{/* Desktop Sidebar */}
<Sidebar
theme={theme}
toggleTheme={toggleTheme}
/>

  {/* Main Application */}
  <div className="main-content">
    {/* Mobile / Tablet Navigation */}
    <NavigationBar
      theme={theme}
      toggleTheme={toggleTheme}
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
