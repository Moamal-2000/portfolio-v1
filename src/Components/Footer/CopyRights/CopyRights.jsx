import { DESIGNER_LINKEDIN, MY_SOCIAL_MEDIA } from "src/Data/variables";
import s from "./CopyRights.module.scss";

const CopyRights = () => {
  return (
    <p className={s.copyrights}>
      Website designed by{" "}
      <a href={DESIGNER_LINKEDIN} target="_blank" rel="noreferrer">
        Ram Maheshwari
      </a>
      &nbsp; And Developed by{" "}
      <a href={MY_SOCIAL_MEDIA.linkedin} target="_blank" rel="noreferrer">
        Moamal Alaa
      </a>
    </p>
  );
};
export default CopyRights;
