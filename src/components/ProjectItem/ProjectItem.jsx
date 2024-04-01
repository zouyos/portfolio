import { Button } from "react-bootstrap";
import style from "./style.module.css";
import { useContext, useState } from "react";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { THEME } from "../../../data";

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
      <h4
        style={{
          color: THEME[themeMode].primaryColor,
          fontWeight: "semi-bold",
        }}
      >
        {project.name}
      </h4>
      <p
        className="para"
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
        {project.created_at}
      </div>
    </div>
  );
};

export default ProjectItem;
