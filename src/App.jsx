import Avatar from "./components/Avatar/Avatar";
import style from "./style.module.css";
import avatar from "./assets/img/avatar.png";
import ProjectList from "./components/ProjectList/ProjectList";
import { projects } from "../data";
import { useState } from "react";
import linkedin_icon from "./assets/img/linkedin-icon.png";
import github_icon from "./assets/img/github-icon-white.png";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  function handleProjectClick(project) {
    setSelectedProject(project);
  }

  return (
    <div className={`container-fluid ${style.main_container}`}>
      <div className="row h-100">
        <div className={`col-sm-12 col-md-3 ${style.side_bar}`}>
          <Avatar img={avatar} title="Zouyos" />
          <div className={style.presentation}>
            <h1>FullStack Developer</h1>
            <hr />
            <div className="para my-4">
              <p>Titulaire d’un Titre Professionnel de niveau 6 (bac+4)</p>
              <p>
                Plusieurs projets réalisés avec des frameworks JavaScript
                (React, Vue, Node), PHP (Symfony) et Java (Spring, Spring Boot)
              </p>
              <p>Préférence pour les stacks front (React / Vue.js)</p>
              <p>
                Maîtrise de Redux et des hooks avancés de React / Tests
                unitaires avec Jest
              </p>
            </div>
            <hr />
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className="fs-5 my-3">Social</p>
              <div className="d-flex justify-content-center align-items-center">
                <a
                  href="https://www.linkedin.com/in/hamza-benketaf/"
                  target="__blank"
                  className="m-2"
                >
                  <img src={linkedin_icon} className={style.icon} />
                </a>
                <a
                  href="https://github.com/zouyos"
                  target="__blank"
                  className="m-2"
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
              <div className="para text-center my-5 italic">
                Cliquez sur un projet pour afficher la description
              </div>
            ) : (
              <div className="my-3">
                <p className="para">
                  <span className="subtitle fs-5">Name of project: </span>
                  {selectedProject.name}
                </p>
                <pre className="para">
                  <span className="subtitle fs-5">Description: </span>
                  {selectedProject.description}
                </pre>
                <p className="para d-flex">
                  <span className="subtitle fs-5 me-2">Developped with: </span>
                  {selectedProject.techs.map((tech, i) => {
                    return (
                      <div
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
                      </div>
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
