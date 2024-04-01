import Avatar from "./components/Avatar/Avatar";
import style from "./style.module.css";
import ProjectList from "./components/ProjectList/ProjectList";
import { THEME, projects, techRatings } from "../data";
import { useContext, useState } from "react";
import linkedin_icon from "./assets/img/linkedin-icon.png";
import { FiveStarRating } from "./components/FIveStarRating/FiveStarRating";
import { ThemeModeContext } from "./contexts/ThemeModeContext";
import { Form } from "react-bootstrap";
import { MoonFill, Sun } from "react-bootstrap-icons";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const initialThemeMode = useContext(ThemeModeContext);
  const [themeMode, setThemeMode] = useState(initialThemeMode);

  function handleProjectClick(project) {
    setSelectedProject(project);
  }

  function toggleThemeMode() {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  }

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <div
        className={`container-fluid ${style.main_container}`}
        style={{
          color: THEME[themeMode].primaryColor,
          backgroundColor: THEME[themeMode].primaryBackgroundColor,
        }}
      >
        <div className="row h-100">
          <div
            className={`col-sm-12 col-md-3 ${style.side_bar}`}
            style={{
              color: THEME[themeMode].primaryColor,
              backgroundColor: THEME[themeMode].primaryBackgroundColor,
              borderColor: THEME[themeMode].borderColor,
            }}
          >
            <div>
              <Form className="d-flex align-items-center">
                <Sun size={17} style={{ marginRight: "10px" }} />
                <Form.Check
                  type="switch"
                  id="theme-switch"
                  checked={themeMode === "dark"}
                  onClick={toggleThemeMode}
                />
                <MoonFill className="ms-1" />
              </Form>
            </div>
            <Avatar img={THEME[themeMode].avatar} title="Zouyos" />
            <div
              className={style.presentation}
              style={{
                color: THEME[themeMode].primaryColor,
                backgroundColor: THEME[themeMode].primaryBackgroundColor,
              }}
            >
              <h1
                style={{
                  fontSize: "34px",
                  color: THEME[themeMode].secondaryColor,
                }}
              >
                FullStack Developer
              </h1>
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
                    <img
                      src={THEME[themeMode].github_icon}
                      className={style.icon}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`col-sm-12 col-md-9 ${style.workspace}`}>
            <div
              className={style.cards_container}
              style={{
                backgroundColor: THEME[themeMode].secondaryBackgroundColor,
              }}
            >
              <div className="fs-4">Projects</div>
              <hr />
              <ProjectList projects={projects} onClick={handleProjectClick} />
            </div>
            <div
              className={style.cards_description}
              style={{
                backgroundColor: THEME[themeMode].primaryBackgroundColor,
              }}
            >
              <div className="fs-4">Description</div>
              <hr />
              {selectedProject === null ? (
                <div
                  className="para text-center italic mt-4"
                  style={{ color: THEME[themeMode].secondaryColor }}
                >
                  Cliquez sur un projet pour afficher la description
                </div>
              ) : (
                <div className="my-3">
                  <p className="fs-5">
                    Name of project:
                    <span
                      className="para fs-6"
                      style={{ color: THEME[themeMode].secondaryColor }}
                    >
                      {" " + selectedProject.name}
                    </span>
                  </p>
                  <p className="fs-5">
                    Description:
                    <pre
                      className="para fs-6 text-wrap"
                      style={{ color: THEME[themeMode].secondaryColor }}
                    >
                      {selectedProject.description}
                    </pre>
                  </p>
                  <p className="d-flex">
                    <span className="fs-5 me-1">Developed with: </span>
                    {selectedProject.techs.map((tech, i) => {
                      return (
                        <span
                          key={tech.name + i}
                          className="d-flex align-items-center flex-wrap"
                          style={{ color: THEME[themeMode].secondaryColor }}
                        >
                          {tech.icon && (
                            <img src={tech.icon} className={style.icon} />
                          )}
                          <span className="para me-1 text-wrap">
                            {i !== selectedProject.techs.length - 1
                              ? tech.name + " / "
                              : tech.name}
                          </span>
                        </span>
                      );
                    })}
                  </p>
                  <p className="fs-5">
                    Creation date:
                    <span
                      className="para fs-6"
                      style={{ color: THEME[themeMode].secondaryColor }}
                    >
                      {" " + selectedProject.created_at}
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </ThemeModeContext.Provider>
  );
}

export default App;
