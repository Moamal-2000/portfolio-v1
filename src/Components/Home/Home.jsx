import ThemeChanger from "../Shared/SmallComponents/ThemeChanger";
import AboutSection from "./AboutSection/AboutSection";
import HeroSection from "./HeroSection/HeroSection";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <main className={s.home}>
      <div className="container">
        <HeroSection />
        <AboutSection />
      </div>
      <ThemeChanger />
    </main>
  );
};
export default Home;
