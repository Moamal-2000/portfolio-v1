import { SKILLS_SHOWCASE } from "src/Data/variables";
import s from "./SkillsShowcase.module.scss";

const SkillsShowcase = () => {
  return (
    <section className={s.skillsShowcase}>
      <ul className={s.skillsList}>
        {SKILLS_SHOWCASE.map(({ skill, imgSrc, link, id }) => (
          <li key={id}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={imgSrc} alt={skill} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default SkillsShowcase;
