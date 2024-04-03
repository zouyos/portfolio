import ProjectItem from "../ProjectItem/ProjectItem";
import style from "./style.module.css";

const ProjectList = ({ projects, onClick }) => {
  return (
    <div className={style.container}>
      {projects.map((project, i) => {
        return (
          <div
            key={project.id}
            style={{ marginRight: i !== projects.length - 1 ? "30px" : 0 }}
          >
            <ProjectItem project={project} onClick={onClick} />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
