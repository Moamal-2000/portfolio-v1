import { MY_PROJECTS } from "src/Data/variables";
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
        {MY_PROJECTS.map(
          ({ img, name, description, liveLink, codeLink }, index) => (
            <Project
              key={name}
              img={img}
              name={name}
              description={description}
              liveLink={liveLink}
              codeLink={codeLink}
              index={index}
            />
          )
        )}
      </div>
    </section>
  );
};
export default ProjectsSection;