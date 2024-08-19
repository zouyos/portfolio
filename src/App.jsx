import Avatar from "./components/Avatar/Avatar";
import redux_icon from "./assets/img/redux-icon.png";
import bootstrap_icon from "./assets/img/bootstrap-icon.png";
import vue_icon from "./assets/img/vue-icon.png";
import spring_icon from "./assets/img/spring-icon.png";
import node_icon from "./assets/img/node-icon.png";
import ts_icon from "./assets/img/ts-icon.png";
import sass_icon from "./assets/img/sass-icon.png";
import tailwind_icon from "./assets/img/tailwind-icon.png";
import style from "./style.module.css";
import ProjectList from "./components/ProjectList/ProjectList";
import { projects } from "../data";
import { useContext, useEffect, useState } from "react";
import linkedin_icon from "./assets/img/linkedin-icon.png";
import spotify_icon from "./assets/img/spotify-icon.png";
import { THEME, ThemeModeContext } from "./contexts/ThemeModeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/16/solid";
import { Switch as HeadlessSwitch } from "@headlessui/react";

function App() {
  const initialThemeMode = useContext(ThemeModeContext);
  const [selectedProject, setSelectedProject] = useState(null);
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("themeMode")
      ? JSON.parse(localStorage.getItem("themeMode"))
      : initialThemeMode;
  });

  useEffect(() => {
    localStorage.setItem("themeMode", JSON.stringify(themeMode));
  }, [themeMode]);

  function handleProjectClick(project) {
    setSelectedProject(project);
  }

  function toggleThemeMode() {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  }

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <div
        className={` ${style.main_container}`}
        style={{
          color: THEME[themeMode].primaryColor,
          backgroundColor: THEME[themeMode].primaryBackgroundColor,
        }}
      >
        <div className='flex flex-wrap min-h-screen'>
          <div
            className={`w-full sm:w-4/4 md:w-1/4 ${style.side_bar}`}
            style={{
              color: THEME[themeMode].primaryColor,
              backgroundColor: THEME[themeMode].primaryBackgroundColor,
              borderColor: THEME[themeMode].borderColor,
            }}
          >
            <div className='flex flex-row'>
              <SunIcon className='h-5 w-5 mr-2' />
              <HeadlessSwitch
                checked={themeMode === "dark"}
                value={themeMode}
                onChange={toggleThemeMode}
                className={`${
                  themeMode === "dark" ? "bg-blue-600" : "bg-gray-200"
                }
        relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                <span
                  className={`${
                    themeMode === "dark" ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
              </HeadlessSwitch>
              <MoonIcon className='h-5 w-5 ml-2' />
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
              <div className={`${style.description} leading-loose my-5`}>
                <p className='my-4'>
                  Hi I&apos;m Zouyos, a more-into-frontend fullstack developer,
                  holder of a bachelor level degree
                </p>
                <p className='my-4'>
                  I mainly work with{" "}
                  <span>
                    <img
                      src={THEME[themeMode].react_icon}
                      className={style.icon}
                    />
                  </span>{" "}
                  React,{" "}
                  <span>
                    <img src={redux_icon} className={style.icon} />
                  </span>{" "}
                  Redux and
                  <span>
                    {" "}
                    <img src={bootstrap_icon} className={style.icon} />
                  </span>{" "}
                  Bootstrap
                </p>
                <p>
                  I love working with{" "}
                  <span>
                    <img src={vue_icon} className={style.icon} />
                  </span>{" "}
                  Vue.js as well
                </p>
                <p className='my-4'>
                  I try to use{" "}
                  <span>
                    <img src={ts_icon} className={style.icon} />
                  </span>{" "}
                  TypeScript on my newest projects, and I can work with{" "}
                  <span>
                    <img src={sass_icon} className={style.icon} />
                  </span>{" "}
                  Sass or{" "}
                  <span>
                    <img src={tailwind_icon} className={style.icon} />
                  </span>{" "}
                  Tailwind CSS
                </p>
                <p>
                  I also have a backend background with{" "}
                  <span>
                    <img
                      src={THEME[themeMode].symfony_icon}
                      className={style.icon}
                    />
                  </span>{" "}
                  Symfony and{" "}
                  <span>
                    <img src={spring_icon} className={style.icon} />
                  </span>{" "}
                  Spring Boot, and recently I&apos;ve started coding with{" "}
                  <span>
                    <img src={node_icon} className={style.icon} />
                  </span>{" "}
                  Node.js
                </p>
                <p className='my-4'>
                  But I&apos;m really more into client-side development
                </p>
                <p className='my-4'>
                  I love making sure the projects I work on are « user friendly
                  »
                </p>
                <p>🐵</p>
              </div>
              <hr />
              <div className={style.social}>
                <p className='mb-3 font-semibold text-2xl'>Social</p>
                <div className='flex justify-center items-center'>
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
          <div className={`w-full sm:w-4/4 md:w-3/4 ${style.workspace}`}>
            <div
              className={style.cards_container}
              style={{
                backgroundColor: THEME[themeMode].secondaryBackgroundColor,
              }}
            >
              <h4 className='font-semibold text-2xl mb-3'>Projects</h4>
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
              <p className='font-semibold text-2xl mb-3'>Description</p>
              <hr />
              {selectedProject === null ? (
                <div
                  className='para text-center italic mt-8 mb-4'
                  style={{ color: THEME[themeMode].secondaryColor }}
                >
                  Click on a project to display information
                </div>
              ) : (
                <div className='my-3'>
                  <p className='text-lg mb-2'>
                    Name of project:
                    <span
                      className='para text-base'
                      style={{ color: THEME[themeMode].secondaryColor }}
                    >
                      {" " + selectedProject.name}
                    </span>
                  </p>
                  <p className='mb-0 text-lg h-5/5'>Description:</p>
                  <pre
                    className='para break-words mb-2'
                    style={{
                      whiteSpace: "pre-wrap",
                      color: THEME[themeMode].secondaryColor,
                    }}
                  >
                    {selectedProject.description}
                  </pre>
                  <div className='flex flex-wrap'>
                    <p className='mr-1 my-2 text-lg'>Developed with: </p>
                    {selectedProject.techs.map((tech, i) => {
                      return (
                        <span
                          key={tech.name + i}
                          className='flex items-center flex-wrap'
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
                          <span className='para mr-1 text-wrap'>
                            {i !== selectedProject.techs.length - 1
                              ? tech.name + " / "
                              : tech.name}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                  <p className='text-lg my-2'>
                    Creation date:
                    <span
                      className='para text-base'
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
