import s from "./ColoredButton.module.scss";

const ColoredButton = ({ href, text, styleType }) => {
  const type2Class = styleType === "secondary" ? s.secondary : "";

  return (
    <a href={href} className={`${s.button} ${type2Class}`}>
      {text}
    </a>
  );
};
export default ColoredButton;
