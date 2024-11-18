import { NAV_LINKS } from "src/Data/staticData";
import s from "./HeaderNav.module.scss";

const HeaderNav = () => {
  return (
    <nav className={s.nav}>
      <ul>
        {NAV_LINKS.map(({ name, link }) => (
          <li key={`${name}`}>
            <a href={link}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default HeaderNav;
