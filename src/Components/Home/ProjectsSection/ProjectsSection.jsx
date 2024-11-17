import { MY_PROJECTS } from "src/Data/staticData";
import SectionTitle from "../../Shared/SmallComponents/SectionTitle/SectionTitle";
import Project from "./Project/Project";
import s from "./ProjectsSection.module.scss";

const ProjectsSection = () => {
  return (
    <section className={s.projectsSection} id="projects">
      <SectionTitle
        name="Projects 🛠️"
        description={`Here you will find some of the personal and clients projects that I created with the project details`}
      />

      <div className={s.projects}>
        {MY_PROJECTS.map(
          ({ img, name, description, liveLink, repoLink }, index) => (
            <Project
              key={name}
              img={img}
              name={name}
              description={description}
              liveLink={liveLink}
              repoLink={repoLink}
              index={index}
            />
          )
        )}
      </div>
    </section>
  );
};
export default ProjectsSection;
