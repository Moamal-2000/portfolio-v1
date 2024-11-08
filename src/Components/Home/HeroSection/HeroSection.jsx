import ColoredButton from "../../Shared/Buttons/ColoredButton/ColoredButton";
import SectionTitle from "../../Shared/SmallComponents/SectionTitle/SectionTitle";
import s from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section id="home-hero" className={s.heroSection}>
      <div className={s.content}>
        <SectionTitle
          name="Hello 👋"
          description={`I'm Moamal Alaa! A Web Developer Building Awesome Web apps And
            Websites That Powers The Internet`}
        />

        <div className={s.buttons}>
          <ColoredButton href="#projects" text="Projects" />
          <ColoredButton href="#contact" text="Contact" styleType="secondary" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
