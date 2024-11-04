import { useState } from "react";
import { hexToRgb } from "src/Functions/helper";
import s from "./ThemeChanger.module.scss";

const ThemeChanger = () => {
  const [themeColor, setThemeColor] = useState("#1DA1F2");

  function handleChangeColor(event) {
    const { r, g, b } = hexToRgb(event.target.value);

    document.documentElement.style.setProperty(
      "--themeColor",
      `${r}, ${g}, ${b}`
    );
  }

  return (
    <div className={s.themeSelector}>
      <input
        placeholder="Color Selector"
        type="color"
        value={themeColor}
        onChange={handleChangeColor}
      />
      <img
        alt="theme color tester"
        src="https://img.icons8.com/fluent/48/000000/rgb-circle-1.png"
      />
    </div>
  );
};
export default ThemeChanger;
