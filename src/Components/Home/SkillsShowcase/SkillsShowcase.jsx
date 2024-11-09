import { SKILLS_SHOWCASE } from "src/Data/variables";
import s from "./SkillsShowcase.module.scss";

const SkillsShowcase = () => {
  return (
    <section className={s.skillsShowcase}>
      <ul className={s.skillsList}>
        {SKILLS_SHOWCASE.map(({ skill, imgSrc, id }) => (
          <li key={id}>
            <img src={imgSrc} alt={skill} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default SkillsShowcase;
