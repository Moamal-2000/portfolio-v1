import HeroSection from "./HeroSection/HeroSection";
import s from "./Home.module.scss";

const Home = () => {
  return (
    <main className={s.home}>
      <HeroSection />
    </main>
  );
};
export default Home;
