import Avatar from "./components/Avatar/Avatar";
import redux_icon from "./assets/img/redux-icon.png";
import vue_icon from "./assets/img/vue-js-icon.png";
import ts_icon from "./assets/img/ts-icon.png";
import style from "./style.module.css";
import ProjectList from "./components/ProjectList/ProjectList";
import { projects } from "../data";
import { useContext, useEffect, useState } from "react";
import linkedin_icon from "./assets/img/linkedin-icon.png";
import spotify_icon from "./assets/img/spotify-icon.png";
import { THEME, ThemeModeContext } from "./contexts/ThemeModeContext";
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
    localStorage.setItem(
      "themeMode",
      JSON.stringify(themeMode === "dark" ? "light" : "dark")
    );
  }

  useEffect(() => {
    setThemeMode(
      localStorage.getItem("themeMode")
        ? JSON.parse(localStorage.getItem("themeMode"))
        : "dark"
    );
  }, [themeMode]);

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <div
        className={`container-fluid ${style.main_container}`}
        style={{
          color: THEME[themeMode].primaryColor,
          backgroundColor: THEME[themeMode].primaryBackgroundColor,
        }}
      >
        <div className='row h-100'>
          <div
            className={`col-sm-12 col-md-3 ${style.side_bar}`}
            style={{
              color: THEME[themeMode].primaryColor,
              backgroundColor: THEME[themeMode].primaryBackgroundColor,
              borderColor: THEME[themeMode].borderColor,
            }}
          >
            <div>
              <Form className='d-flex align-items-center'>
                <Sun size={17} style={{ marginRight: "10px" }} />
                <Form.Check
                  type='switch'
                  id='theme-switch'
                  checked={themeMode === "dark"}
                  value={themeMode}
                  onChange={toggleThemeMode}
                />
                <MoonFill className='ms-1' />
              </Form>
            </div>
            <Avatar img={THEME[themeMode].avatar} title='Zouyos' />
            <div
              className={style.presentation}
              style={{
                color: THEME[themeMode].primaryColor,
                backgroundColor: THEME[themeMode].primaryBackgroundColor,
              }}
            >
              <h2
                style={{
                  fontSize: "30px",
                  color: THEME[themeMode].secondaryColor,
                  marginBottom: "20px",
                }}
              >
                React Developer
              </h2>
              <hr />
              <div className={`${style.description} lh-lg`}>
                <p>
                  Hi I'm Zouyos, a frontend developer coming from a retraining,
                  with a bachelor level degree
                </p>
                <p>
                  I mainly work with{" "}
                  <span>
                    <img
                      src={THEME[themeMode].react_icon}
                      className={style.icon}
                    />
                  </span>{" "}
                  React and{" "}
                  <span>
                    <img src={redux_icon} className={style.icon} />
                  </span>{" "}
                  Redux
                </p>
                <p>
                  I also love working with{" "}
                  <span>
                    <img src={vue_icon} className={style.icon} />
                  </span>{" "}
                  Vue.js I'm using{" "}
                  <span>
                    <img src={ts_icon} className={style.icon} />
                  </span>{" "}
                  TypeScript as much as I can on my newest projects
                </p>
                <p>
                  I like to make sure that the projects I work on are “User
                  Friendly”
                </p>
                <p>🐵</p>
              </div>
              <hr />
              <div className={style.social}>
                <h4 className='mb-3 fw-bold'>Social</h4>
                <div className='d-flex justify-content-center align-items-center'>
                  <a
                    href='https://www.linkedin.com/in/hamza-benketaf/'
                    target='__blank'
                    className='mx-2'
                  >
                    <img src={linkedin_icon} className={style.icon} />
                  </a>
                  <a
                    href='https://github.com/zouyos'
                    target='__blank'
                    className='mx-2'
                  >
                    <img
                      src={THEME[themeMode].github_icon}
                      className={style.icon}
                    />
                  </a>
                  <a
                    href='https://open.spotify.com/playlist/4Fz42bWhRwY8x1bamck92q?si=ceb09f154d554b54'
                    target='__blank'
                    className='mx-2'
                  >
                    <img src={spotify_icon} className={style.icon} />
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
              <div className='fs-4 fw-bold'>Projects</div>
              <hr />
              <ProjectList
                projects={projects}
                selectedProject={selectedProject}
                onClick={handleProjectClick}
              />
            </div>
            <div
              className={style.cards_description}
              style={{
                backgroundColor: THEME[themeMode].primaryBackgroundColor,
              }}
            >
              <div className='fs-4 fw-bold'>Description</div>
              <hr />
              {selectedProject === null ? (
                <div
                  className='para text-center italic mt-5 mb-4'
                  style={{ color: THEME[themeMode].secondaryColor }}
                >
                  Click on a project to display information
                </div>
              ) : (
                <div className='my-3'>
                  <p className='fs-5'>
                    Name of project:
                    <span
                      className='para fs-6'
                      style={{ color: THEME[themeMode].secondaryColor }}
                    >
                      {" " + selectedProject.name}
                    </span>
                  </p>
                  <p className='fs-5 mb-0'>Description:</p>
                  <pre
                    className='para fs-6 text-break'
                    style={{
                      whiteSpace: "pre-wrap",
                      color: THEME[themeMode].secondaryColor,
                    }}
                  >
                    {selectedProject.description}
                  </pre>
                  <p className='d-flex'>
                    <span className='fs-5 me-1'>Developed with: </span>
                    {selectedProject.techs.map((tech, i) => {
                      return (
                        <span
                          key={tech.name + i}
                          className='d-flex align-items-center flex-wrap'
                          style={{ color: THEME[themeMode].secondaryColor }}
                        >
                          {tech.icon && (
                            <img
                              src={
                                themeMode === "dark"
                                  ? tech.icon.icon_dark
                                  : tech.icon.icon_light
                                  ? tech.icon.icon_light
                                  : tech.icon.icon_dark
                              }
                              className={`${style.icon} me-1`}
                            />
                          )}
                          <span className='para me-1 text-wrap'>
                            {i !== selectedProject.techs.length - 1
                              ? tech.name + " / "
                              : tech.name}
                          </span>
                        </span>
                      );
                    })}
                  </p>
                  <p className='fs-5'>
                    Creation date:
                    <span
                      className='para fs-6'
                      style={{ color: THEME[themeMode].secondaryColor }}
                    >
                      {" " +
                        new Date(selectedProject.created_at).toLocaleString(
                          "en-US",
                          { month: "long", year: "numeric" }
                        )}
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
