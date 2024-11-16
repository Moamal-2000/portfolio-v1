import { NAV_LINKS } from "src/Data/staticData";
import s from "./Footer.module.scss";
import SocialMedia from "./SocialMedia/SocialMedia";
import CopyRights from "./CopyRights/CopyRights";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <nav className={s.nav}>
        <ul className={s.navLinks}>
          {NAV_LINKS.map(({ name, link }) => (
            <li key={`${name}`}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>

        <SocialMedia />
        <CopyRights />
      </nav>
    </footer>
  );
};
export default Footer;
