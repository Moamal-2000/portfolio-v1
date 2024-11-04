import ThemeChanger from "../Shared/SmallComponents/ThemeChanger";
import HeroSection from "./HeroSection/HeroSection";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <main className={s.home}>
      <HeroSection />
      <ThemeChanger />
    </main>
  );
};
export default Home;
