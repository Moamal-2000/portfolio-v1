import { NAV_LINKS } from "src/Data/variables";
import { codewarsLogo } from "../../Assets/images";
import { MY_SOCIAL_MEDIA } from "../../Data/variables";
import SvgIcon from "../Shared/SmallComponents/SvgIcon";
import s from "./Footer.module.scss";

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

        <ul className={s.socialMedia}>
          {MY_SOCIAL_MEDIA.map(({ name, link, id }) => (
            <li key={id}>
              <a href={link}>
                <SvgIcon name={name} />
              </a>
            </li>
          ))}

          <li>
            <a href="#">
              <img src={codewarsLogo} className={s.codewars} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
export default Footer;
