import s from "./CopyRights.module.scss";

const CopyRights = () => {
  return (
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
  );
};
export default CopyRights;
