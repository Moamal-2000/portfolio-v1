import { NAV_LINKS } from "src/Data/variables";
import s from "./Footer.module.scss";
import SocialMedia from "./SocialMedia/SocialMedia";

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

        <p className={s.copyrights}>
          Website designed by{" "}
          <a
            href="https://www.linkedin.com/in/rammcodes"
            target="_blank"
            rel="noreferrer"
          >
            Ram Maheshwari
          </a>
          &nbsp; And Developed by{" "}
          <a
            href="https://www.linkedin.com/in/moamal-alaa"
            target="_blank"
            rel="noreferrer"
          >
            Moamal Alaa
          </a>
        </p>
      </nav>
    </footer>
  );
};
export default Footer;
