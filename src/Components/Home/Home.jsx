import ThemeChanger from "../Shared/SmallComponents/ThemeChanger";
import AboutSection from "./AboutSection/AboutSection";
import HeroSection from "./HeroSection/HeroSection";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <main className={s.home}>
      <HeroSection />
      <AboutSection />
      <ThemeChanger />
    </main>
  );
};
export default Home;
