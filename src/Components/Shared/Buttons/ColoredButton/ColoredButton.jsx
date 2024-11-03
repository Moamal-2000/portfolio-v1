import s from "./ColoredButton.module.scss";

const ColoredButton = ({ href, text }) => {
  return (
    <a href={href} className={s.button}>
      {text}
    </a>
  );
};
export default ColoredButton;
