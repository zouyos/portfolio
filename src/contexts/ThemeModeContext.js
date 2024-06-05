import { createContext } from "react";
import react_icon from "../assets/img/react-icon.png";
import react_icon_dark from "../assets/img/react-icon-dark.png";
import avatar from "../assets/img/avatar.png";
import avatar_glow from "../assets/img/avatar-glow.png";
import github_icon_white from "../assets/img/github-icon-white.png";
import github_icon_dark from "../assets/img/github-icon-dark.png";
import next_icon from "../assets/img/next-js-icon.png";
import next_icon_white from "../assets/img/next-js-icon-white.png";

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
  },
  light: {
    primaryColor: "#a04000",
    secondaryColor: "#192227",
    primaryBackgroundColor: "#d6eaf8",
    secondaryBackgroundColor: "#ffffff",
    borderColor: "white",
    borderHoverColor: "#192227",
    avatar: avatar,
    github_icon: github_icon_dark,
    react_icon: react_icon_dark,
    next_icon: next_icon,
  },
};

export { ThemeModeContext, THEME };
