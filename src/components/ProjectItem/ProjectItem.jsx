import { Button } from "react-bootstrap";
import style from "./style.module.css";
import { useContext, useState } from "react";
import { ThemeModeContext, THEME } from "../../contexts/ThemeModeContext";

const ProjectItem = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { themeMode } = useContext(ThemeModeContext);

  return (
    <div
      className={style.card}
      style={{
        outline: isHovered && `2px solid ${THEME[themeMode].borderHoverColor}`,
        backgroundColor: THEME[themeMode].primaryBackgroundColor,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(project)}
    >
      <div className="d-flex justify-content-center mb-2">
        <img src={project.image} className={style.img} />
      </div>
      <h3
        style={{
          color: THEME[themeMode].primaryColor,
        }}
      >
        {project.name}
      </h3>
      <p
        className={`para ${style.desc}`}
        style={{
          color: THEME[themeMode].secondaryColor,
        }}
      >
        {project.short_description}
      </p>
      <a href={project.visit_link} target="__blank">
        <Button variant="primary" className="me-2">
          Visit
        </Button>
      </a>
      <a href={project.github_link} target="__blank">
        <Button variant="secondary">GitHub</Button>
      </a>
      <hr />
      <div
        className="pb-0"
        style={{
          color: THEME[themeMode].primaryColor,
          fontWeight: "semi-bold",
        }}
      >
        {new Date(project.created_at).toLocaleString("en-US", {
          month: "short",
          monthDisplay: "short",
          year: "numeric",
        })}
      </div>
    </div>
  );
};

export default ProjectItem;
