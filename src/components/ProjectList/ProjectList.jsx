import ProjectItem from '../ProjectItem/ProjectItem';
import style from './style.module.css';

const ProjectList = ({ selectedProject, projects, onClick }) => {
  return (
    <div className={style.container}>
      {projects.map((project, i) => {
        return (
          <div
            key={project.id}
            style={{
              marginRight: i !== projects.length - 1 ? '35px' : '2px',
              marginLeft: i === 0 && '2px',
            }}
          >
            <ProjectItem
              project={project}
              onClick={onClick}
              isSelected={project === selectedProject}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProjectList;
