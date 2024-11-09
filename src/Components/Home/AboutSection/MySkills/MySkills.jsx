import { MY_SKILLS } from "src/Data/variables";
import s from "./MySkills.module.scss";

const MySkills = () => {
  return (
    <div className={s.mySkills}>
      <h3 className={s.title}>My Skills</h3>

      <ul className={s.skills}>
        {MY_SKILLS.map(({ skill, classColor, link, id }) => (
          <li key={id}>
            <a
              href={link}
              target="_blank"
              referrerPolicy="no-referrer"
              className={classColor}
            >
              {skill}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MySkills;
