import { createContext } from "react";
import react_icon from "../assets/img/react-icon.png";
import react_icon_dark from "../assets/img/react-icon-dark.png";
import avatar from "../assets/img/avatar.png";
import avatar_glow from "../assets/img/avatar-glow.png";
import github_icon_white from "../assets/img/github-icon-white.png";
import github_icon_dark from "../assets/img/github-icon-dark.png";
import next_icon from "../assets/img/next-js-icon.png";
import next_icon_white from "../assets/img/next-js-icon-white.png";
import symfony_icon from "../assets/img/symfony-icon.png";
import symfony_icon_white from "../assets/img/symfony-icon-white.png";

const ThemeModeContext = createContext("dark");

const THEME = {
  dark: {
    primaryColor: "white",
    secondaryColor: "#89ddff",
    primaryBackgroundColor: "#192227",
    secondaryBackgroundColor: "#263238",
    borderColor: "#263238",
    borderHoverColor: "#89ddff",
    avatar: avatar_glow,
    github_icon: github_icon_white,
    react_icon: react_icon,
    next_icon: next_icon_white,
    symfony_icon: symfony_icon_white,
  },
  light: {
    primaryColor: "#d35400",
    secondaryColor: "#192227",
    primaryBackgroundColor: "#a9cce3",
    secondaryBackgroundColor: "#eaf2f8",
    borderColor: "white",
    borderHoverColor: "#e74c3c",
    avatar: avatar,
    github_icon: github_icon_dark,
    react_icon: react_icon_dark,
    next_icon: next_icon,
    symfony_icon: symfony_icon,
  },
};

export { ThemeModeContext, THEME };
