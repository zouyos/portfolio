type Project = {
    id: number,
    name: string,
    short_description:
      string,
    description:
      string,
      techs: {
        icon?: {
          icon_dark: string;
          icon_light?: string;
        };
        name: string;
      }[];
    image: string,
    visit_link?: string,
    github_link?: string,
    github?: {
      front: string,
      back: string,
    },
    created_at: Date,
  }

type ThemeMode = 'light' | 'dark';

type ThemeContextType = {
  themeMode: ThemeMode;
  setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>;
}

export { Project, ThemeMode, ThemeContextType }