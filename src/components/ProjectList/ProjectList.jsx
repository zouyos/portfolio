import ProjectItem from "../ProjectItem/ProjectItem";
import style from "./style.module.css";

const ProjectList = ({ projects, onClick }) => {
  return (
    <div className={style.container}>
      {projects.map((project) => {
        return (
          <ProjectItem project={project} onClick={onClick} key={project.id} />
        );
      })}
    </div>
  );
};

export default ProjectList;
