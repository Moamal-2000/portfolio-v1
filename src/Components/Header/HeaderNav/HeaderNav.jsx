import { useGlobalContext } from "src/Context/GlobalContext";
import { NAV_LINKS } from "src/Data/staticData";
import s from "./HeaderNav.module.scss";

const HeaderNav = () => {
  const { activeSection } = useGlobalContext();

  return (
    <nav className={s.nav}>
      <ul>
        {NAV_LINKS.map(({ name, link }) => (
          <li
            key={`${name}`}
            className={activeSection === name ? s.active : ""}
          >
            <a href={link}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default HeaderNav;
