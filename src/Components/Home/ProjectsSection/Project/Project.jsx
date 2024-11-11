import { mockImg } from "src/Assets/images";
import ColoredButton from "../../../Shared/Buttons/ColoredButton/ColoredButton";
import s from "./Project.module.scss";

const Project = () => {
  return (
    <div className={s.project}>
      <div className={s.projectView}>
        <img src={mockImg} alt="" />
      </div>

      <h3>Project Name</h3>

      <p className={s.description}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
          aliquid! Itaque corrupti magnam fugiat mollitia labore magni saepe
          veritatis voluptatum alias fugit. Explicabo ducimus
        </span>

        <span>
          sapiente aut corporis odio repellendus? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit
        </span>
      </p>

      <div className={s.buttons}>
        <ColoredButton href="#" text="Live Link" />
        <ColoredButton href="#" text="Code Link" styleType="secondary" />
      </div>
    </div>
  );
};
export default Project;
