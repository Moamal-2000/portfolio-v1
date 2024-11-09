import userPlaceHolderImg from "src/Assets/user-picture-placeholder.webp";
import { NAV_LINKS } from "src/Data/variables";
import s from "./Header.module.scss";
import MobileMenu from "./MobileMenu/MobileMenu";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <a href="/#" className={s.logoContainer}>
          <div className={s.imgHolder}>
            <img src={userPlaceHolderImg} alt="logo Image" />
          </div>
          <h1 className={s.logoText}>Moamal Alaa</h1>
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
      </div>
    </header>
  );
};
export default Header;
