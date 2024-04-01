import { useContext } from "react";
import style from "./style.module.css";
import { ThemeModeContext } from "../../contexts/ThemeModeContext";
import { THEME } from "../../../data";

const Avatar = ({ img, title }) => {
  const { themeMode } = useContext(ThemeModeContext);
  return (
    <div className={style.container}>
      <img
        src={img}
        alt="Avatar"
        className={style.img}
        style={{ borderColor: THEME[themeMode].borderHoverColor }}
      />
      <div className={style.title}>{title}</div>
    </div>
  );
};

export default Avatar;
