import ColoredButton from "../../../Shared/Buttons/ColoredButton/ColoredButton";
import s from "./MyStory.module.scss";

const MyStory = () => {
  return (
    <div className={s.myStory}>
      <h3 className={s.title}>My Story</h3>
      <p className={s.description}>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
          aliquid! Itaque corrupti magnam fugiat mollitia labore magni saepe
          veritatis voluptatum alias fugit. Explicabo ducimus sequi aut corporis
          odio repellendus? Lorem ipsum dolor sit amet
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
          aliquid! Itaque corrupti magnam fugiat mollitia labore magni saepe
          veritatis voluptatum alias fugit. Explicabo ducimus sequi aut corporis
          odio repellendus? Lorem ipsum dolor sit amet
        </span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
          aliquid! Itaque corrupti magnam fugiat mollitia labore magni saepe
          veritatis voluptatum alias fugit. Explicabo ducimus sequi aut corporis
          odio repellendus? Lorem ipsum dolor sit amet
        </span>
      </p>

      <ColoredButton href="#projects" text="Projects" />
    </div>
  );
};
export default MyStory;
