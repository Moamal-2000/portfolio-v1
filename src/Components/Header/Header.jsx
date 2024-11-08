import userPlaceHolderImg from "src/Assets/user-picture-placeholder.webp";
import { NAV_LINKS } from "src/Data/variables";
import s from "./Header.module.scss";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
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

      <MobileMenu />
    </header>
  );
};
export default Header;
