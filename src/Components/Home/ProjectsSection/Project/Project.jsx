import { mockImg } from "src/Assets/images";
import ColoredButton from "../../../Shared/Buttons/ColoredButton/ColoredButton";
import s from "./Project.module.scss";

const Project = ({ img, name, description, liveLink, repoLink, index = 0 }) => {
  const rightClass = index % 2 === 1 ? s.right : "";

  return (
    <div className={`${s.project} ${rightClass}`}>
      <div className={s.projectView}>
        <img src={img || mockImg} alt="" />
      </div>

      <h3>{name}</h3>

      <p className={s.description}>
        {description.map((text, index) => (
          <span key={index}>{text}</span>
        ))}
      </p>

      <div className={s.buttons}>
        <ColoredButton href={liveLink} text="Live Link" target="_blank" />
        <ColoredButton
          href={repoLink}
          text="Code Link"
          target="_blank"
          styleType="secondary"
        />
      </div>
    </div>
  );
};
export default Project;
