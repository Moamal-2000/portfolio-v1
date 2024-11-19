import { MY_SOCIAL_MEDIA } from "src/Data/staticData";
import { AUTHOR_DATA, MY_NAME } from "src/Data/variables";
import s from "./CopyRights.module.scss";

const CopyRights = () => {
  return (
    <p className={s.copyrights}>
      Website designed by{" "}
      <a href={AUTHOR_DATA.linkedinAccount} target="_blank" rel="noreferrer">
        {AUTHOR_DATA.name}
      </a>
      &nbsp; And Developed by{" "}
      <a href={MY_SOCIAL_MEDIA[1].link} target="_blank" rel="noreferrer">
        {MY_NAME}
      </a>
    </p>
  );
};
export default CopyRights;
