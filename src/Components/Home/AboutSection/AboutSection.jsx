import SectionTitle from "../../Shared/SmallComponents/SectionTitle/SectionTitle";
import s from "./AboutSection.module.scss";
import MySkills from "./MySkills/MySkills";
import MyStory from "./MyStory/MyStory";

const AboutSection = () => {
  return (
    <section className={s.aboutSection}>
      <div className="container" data-container>
        <SectionTitle
          name="About 🦄"
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
