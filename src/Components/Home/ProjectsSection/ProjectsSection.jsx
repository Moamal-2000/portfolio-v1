import SectionTitle from "../../Shared/SmallComponents/SectionTitle/SectionTitle";
import Project from "./Project/Project";
import s from "./ProjectsSection.module.scss";

const ProjectsSection = () => {
  return (
    <section className={s.projectsSection}>
      <SectionTitle
        name="Projects 🛠️"
        description={`Here you will find some of the personal and clients projects that I created with the project details`}
      />

      <div className={s.projects}>
        <Project />
      </div>
    </section>
  );
};
export default ProjectsSection;
