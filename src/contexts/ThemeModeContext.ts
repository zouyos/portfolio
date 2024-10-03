import { createContext, useContext } from "react";
import react_icon from "@/assets/img/react-icon.png";
import react_icon_dark from "@/assets/img/react-icon-dark.png";
import symfony_icon from "@/assets/img/symfony-icon.png";
import symfony_icon_white from "@/assets/img/symfony-icon-white.png";
import avatar from "@/assets/img/avatar.png";
import avatar_glow from "@/assets/img/avatar-glow.png";
import github_icon_white from "@/assets/img/github-icon-white.png";
import github_icon_dark from "@/assets/img/github-icon-dark.png";
import { type ThemeContextType } from "@/types/types";

const ThemeModeContext = createContext<ThemeContextType | undefined>(undefined);

function useThemeModeContext() {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('ThemeModeContext must be used within a ThemeModeProvider');
  }
  return context
}

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
    symfony_icon: symfony_icon_white,
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
    symfony_icon: symfony_icon,
  },
};

export { ThemeModeContext, useThemeModeContext, THEME };
