import ColoredButton from "../../Shared/Buttons/ColoredButton/ColoredButton";
import s from "./HeroSection.module.scss";

const HeroSection = () => {
  return (
    <section id="home-hero" className={s.heroSection}>
      <div className={s.content}>
        <div>
          <span className={s.hello}> Hello 👋</span>

          <h1>
            I'm John Anderson! A Web Developer Building Awesome Webapps And
            Websites That Powers The Internet
          </h1>

          <div className={s.buttons}>
            <ColoredButton href="#projects" text="Projects" />
            <ColoredButton
              href="#contact"
              text="Contact"
              styleType="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
