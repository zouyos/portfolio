import Avatar from "./components/Avatar/Avatar";
import style from "./style.module.css";
import avatar from "./assets/img/avatar.png";
import avatar_glow from "./assets/img/avatar-glow.png";
import ProjectList from "./components/ProjectList/ProjectList";
import { projects, techRatings } from "../data";
import { useState } from "react";
import linkedin_icon from "./assets/img/linkedin-icon.png";
import github_icon from "./assets/img/github-icon-white.png";
import { FiveStarRating } from "./components/FIveStarRating/FiveStarRating";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  function handleProjectClick(project) {
    setSelectedProject(project);
  }

  return (
    <div className={`container-fluid ${style.main_container}`}>
      <div className="row h-100">
        <div className={`col-sm-12 col-md-3 ${style.side_bar}`}>
          <Avatar img={avatar_glow} title="Zouyos" />
          <div className={style.presentation}>
            <h1 style={{ fontSize: "34px" }}>FullStack Developer</h1>
            <hr />
            <div>
              <FiveStarRating techRatings={techRatings} />
            </div>
            <hr />
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className="fs-4 mb-2">Social</p>
              <div className="d-flex justify-content-center align-items-center mt-2 mb-3">
                <a
                  href="https://www.linkedin.com/in/hamza-benketaf/"
                  target="__blank"
                  className="mx-2"
                >
                  <img src={linkedin_icon} className={style.icon} />
                </a>
                <a
                  href="https://github.com/zouyos"
                  target="__blank"
                  className="mx-2"
                >
                  <img src={github_icon} className={style.icon} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-sm-12 col-md-9 ${style.workspace}`}>
          <div className={style.cards_container}>
            <div className="fs-4">Projects</div>
            <hr />
            <ProjectList projects={projects} onClick={handleProjectClick} />
          </div>
          <div className={style.cards_description}>
            <div className="fs-4">Description</div>
            <hr />
            {selectedProject === null ? (
              <div className="para text-center italic mt-5">
                Cliquez sur un projet pour afficher la description
              </div>
            ) : (
              <div className="my-3">
                <p className="para">
                  <span className="subtitle fs-5">Name of project: </span>
                  {selectedProject.name}
                </p>
                <pre className="para text-wrap" style={{ fontSize: "16px" }}>
                  <span className="subtitle fs-5">Description: </span>
                  {selectedProject.description}
                </pre>
                <p className="para d-flex">
                  <span className="subtitle fs-5 me-2">Developed with: </span>
                  {selectedProject.techs.map((tech, i) => {
                    return (
                      <span
                        key={tech.name + i}
                        className="d-flex align-items-center flex-wrap"
                      >
                        {tech.icon && (
                          <img src={tech.icon} className={style.icon} />
                        )}
                        <span className="me-1 text-wrap">
                          {i !== selectedProject.techs.length - 1
                            ? tech.name + " / "
                            : tech.name}
                        </span>
                      </span>
                    );
                  })}
                </p>
                <p className="para">
                  <span className="subtitle fs-5">Creation date: </span>
                  {selectedProject.created_at}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
