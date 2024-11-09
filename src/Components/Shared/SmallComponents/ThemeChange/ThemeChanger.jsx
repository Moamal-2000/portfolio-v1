import { useEffect, useState } from "react";
import { colorPicker, gearIcon, textIcon, themeIcon } from "src/Assets/images";
import { hexToRgb } from "src/Functions/helper";
import useLocalStorage from "src/Hooks/Helper/useLocalStorage";
import s from "./ThemeChanger.module.scss";

const ThemeChanger = () => {
  const [themeColor] = useState("#1DA1F2");
  const [textColor] = useState("#000000");
  const [isMenuActive, setIsMenuActive] = useState(false);
  const activeClass = isMenuActive ? s.active : "";

  function setDefaultTheme() {
    setThemeColor("29, 161, 242", "themeColor");
    setThemeColor("#000000", "textColor");
  }

  useEffect(() => {
    const themeColorLocal = useLocalStorage("themeColor");
    const textColorLocal = useLocalStorage("textColor");

    if (themeColorLocal) setThemeColor(themeColorLocal, "themeColor");
    if (textColorLocal) setThemeColor(textColorLocal, "textColor");
  }, []);

  return (
    <>
      <button
        type="button"
        className={s.themeSelector}
        onClick={() => setIsMenuActive(true)}
        title="Theme picker"
      >
        <img src={colorPicker} alt="theme color tester" />
      </button>

      <div className={`${s.menu} ${activeClass}`}>
        <button type="button" className={s.item} title="Theme color">
          <input
            placeholder="Color Selector"
            type="color"
            value={themeColor}
            onChange={(e) => handleChangeColor(e, "themeColor")}
          />
          <img src={themeIcon} alt="theme color picker" />
        </button>

        <button type="button" className={s.item} title="Text color">
          <input
            placeholder="Color Selector"
            type="color"
            value={textColor}
            onChange={(e) => handleChangeColor(e, "textColor")}
          />
          <img src={textIcon} alt="text color picker" />
        </button>

        <button
          type="button"
          className={s.item}
          onClick={setDefaultTheme}
          title="Default theme"
        >
          <img src={gearIcon} alt="gear icon representing default theme" />
        </button>

        <button
          type="button"
          className={s.closeIcon}
          onClick={() => setIsMenuActive(false)}
          title="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
    </>
  );
};
export default ThemeChanger;

function handleChangeColor(event, cssVar) {
  const { r, g, b } = hexToRgb(event.target.value);
  const rgbColor = `${r}, ${g}, ${b}`;
  setThemeColor(rgbColor, cssVar);
}

function setThemeColor(color, cssVar) {
  document.documentElement.style.setProperty(`--${cssVar}`, color);
  useLocalStorage(cssVar, color);
}
