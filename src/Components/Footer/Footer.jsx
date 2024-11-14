import { NAV_LINKS } from "src/Data/variables";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <nav className={s.nav}>
        <ul>
          {NAV_LINKS.map(({ name, link }) => (
            <li key={`${name}`}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
