import { useEffect, useState } from "react";
import { hexToRgb } from "src/Functions/helper";
import useLocalStorage from "../../../Hooks/Helper/useLocalStorage";
import s from "./ThemeChanger.module.scss";

const ThemeChanger = () => {
  const [themeColor] = useState("#1DA1F2");

  useEffect(() => {
    const themeColorLocal = useLocalStorage("themeColor");
    if (themeColorLocal) setThemeColor(themeColorLocal);
  }, []);

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

function handleChangeColor(event) {
  const { r, g, b } = hexToRgb(event.target.value);
  const rgbColor = `${r}, ${g}, ${b}`;
  setThemeColor(rgbColor);
}

function setThemeColor(color) {
  document.documentElement.style.setProperty("--themeColor", color);
  useLocalStorage("themeColor", color);
}
