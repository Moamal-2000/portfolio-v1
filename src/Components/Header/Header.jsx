import userPlaceHolderImg from "src/Assets/user-picture-placeholder.webp";
import s from "./Header.module.scss";

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
          <li>
            <a href="/#"> Home </a>
          </li>
          <li>
            <a href="/#about"> About </a>
          </li>
          <li>
            <a href="/#projects"> Projects </a>
          </li>
          <li>
            <a href="/#contact"> Contact </a>
          </li>
        </ul>
      </nav>

      <div className={s.navButton}>
        <div className={s.line} />
        <div className={s.line} />
      </div>

      <div className={s.mobileMenu}>
        <div className={s.close}></div>
        <ul className={s.menuLinks}>
          <li>
            <a href="/#"> Home </a>
          </li>
          <li>
            <a href="/#about"> About </a>
          </li>
          <li>
            <a href="/#projects"> Projects </a>
          </li>
          <li>
            <a href="/#contact"> Contact </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
