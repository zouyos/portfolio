import { Button } from "react-bootstrap";
import style from "./style.module.css";
import { useState } from "react";

const ProjectItem = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={style.card}
      style={{ outline: isHovered && "2px solid #89ddff" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(project)}
    >
      <div className="d-flex justify-content-center mb-2">
        <img src={project.image} className={style.img} />
      </div>
      <h4 className="text-white">{project.name}</h4>
      <p className="para">{project.short_description}</p>
      <a href={project.visit_link} target="__blank">
        <Button variant="primary" className="me-2">
          Visit
        </Button>
      </a>
      <a href={project.github_link} target="__blank">
        <Button variant="secondary">GitHub</Button>
      </a>
      <hr />
      <div className="text-white pb-0">{project.created_at}</div>
    </div>
  );
};

export default ProjectItem;
