import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import FoundationSection from "../components/FoundationSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <FoundationSection />
      <ProjectsSection limit={3} showViewAll />
      <ExperienceSection />
      <ContactSection />
    </>
  );
}

export default Home;