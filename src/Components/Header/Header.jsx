import { useState } from "react";
import userPlaceHolderImg from "src/Assets/user-picture-placeholder.webp";
import { NAV_LINKS } from "src/Data/variables";
import s from "./Header.module.scss";

const Header = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const activeClass = isMobileMenuActive ? s.active : "";

  function updateMobileMenuState(state) {
    setIsMobileMenuActive((prevState) => state || !prevState);
  }

  return (
    <header className={s.header}>
      <a href="/#" className={s.logoContainer}>
        <div className={s.imgHolder}>
          <img src={userPlaceHolderImg} alt="logo Image" />
        </div>
        <span className={s.logoText}>Moamal Alaa</span>
      </a>

      <nav className={s.nav}>
        <ul>
          {NAV_LINKS.map(({ name, link }) => (
            <li key={`${name}`}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        className={s.navButton}
        onClick={updateMobileMenuState}
        aria-label="Mobile Menu button"
      >
        <div className={s.line} />
        <div className={s.line} />
      </button>

      <div className={`${s.mobileMenu} ${activeClass}`}>
        <button
          type="button"
          className={s.close}
          onClick={() => updateMobileMenuState(false)}
        />

        <ul className={`${s.menuLinks} ${activeClass}`}>
          {NAV_LINKS.map(({ name, link }) => (
            <li key={`${name}`}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
export default Header;
