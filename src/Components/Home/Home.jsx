import ThemeChanger from "../Shared/SmallComponents/ThemeChange/ThemeChanger";
import AboutSection from "./AboutSection/AboutSection";
import HeroSection from "./HeroSection/HeroSection";
import s from "./Home.module.scss";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import SkillsShowcase from "./SkillsShowcase/SkillsShowcase";

const Home = () => {
  return (
    <main className={s.home}>
      <div className="container">
        <HeroSection />
      </div>

      <AboutSection />
      <SkillsShowcase />

      <div className="container">
        <ProjectsSection />
      </div>

      <ThemeChanger />
    </main>
  );
};
export default Home;
