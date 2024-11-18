import { useRef } from "react";
import useSetActiveOnVisible from "src/Hooks/App/useSetActiveOnVisible";
import SectionTitle from "../../Shared/SmallComponents/SectionTitle/SectionTitle";
import s from "./AboutSection.module.scss";
import MySkills from "./MySkills/MySkills";
import MyStory from "./MyStory/MyStory";

const AboutSection = () => {
  const aboutSectionRef = useRef();
  useSetActiveOnVisible(aboutSectionRef, "About", {
    threshold: 0.5,
  });

  return (
    <section ref={aboutSectionRef} className={s.aboutSection} id="about">
      <div className="container" data-container>
        <SectionTitle
          name="About 🦄"
          sectionName="About"
          description={`Here you will find more information about me, what I do, and list of my current skills in programming`}
        />

        <div className={s.wrapper}>
          <MyStory />
          <MySkills />
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
