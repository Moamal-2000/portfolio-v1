import SectionTitle from "../../Shared/SmallComponents/SectionTitle/SectionTitle";
import s from "./AboutSection.module.scss";

const AboutSection = () => {
  return (
    <section className={s.aboutSection}>
      <SectionTitle
        name="About 🦄"
        description={`Here you will find more information about me, what I do, and list of my current skills in programming`}
      />
    </section>
  );
};
export default AboutSection;
