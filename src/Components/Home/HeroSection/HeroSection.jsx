import { useRef } from "react";
import useSetActiveOnVisible from "src/Hooks/App/useSetActiveOnVisible";
import ColoredButton from "../../Shared/Buttons/ColoredButton/ColoredButton";
import SectionTitle from "../../Shared/SmallComponents/SectionTitle/SectionTitle";
import s from "./HeroSection.module.scss";

const HeroSection = () => {
  const heroSectionRef = useRef();
  useSetActiveOnVisible(heroSectionRef, "Home", {
    threshold: 0.5,
  });

  return (
    <section ref={heroSectionRef} className={s.heroSection} id="home">
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
