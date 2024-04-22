import notomatic from "./src/assets/img/notomatic.png";
import pokedecks from "./src/assets/img/pokedecks.png";
import ispent from "./src/assets/img/ispent.png";
import watowatch from "./src/assets/img/watowatch.png";
import react_icon from "./src/assets/img/react-icon.png";
import react_icon_dark from "./src/assets/img/react-icon-dark.png";
import redux_icon from "./src/assets/img/redux-icon.png";

const techs = {
  react: {
    icon: {
      icon_dark: react_icon,
      icon_light: react_icon_dark,
    },
    name: "React",
  },
  redux: {
    icon: {
      icon_dark: redux_icon,
    },
    name: "Redux",
  },
};

export const projects = [
  {
    id: 1,
    name: "Watowatch",
    short_description:
      "TV show advisor developed with React and using the TMDB API",
    description:
      "Based on « The Movie Database » API endpoint listing trending TV shows, this project is made with React.\nIt displays infos, rating, and recommendations based on the TV show selected.\nThis app also allows the user to search a TV show within TMDB. Unit tests are added with Jest and react-testing library",
    techs: [techs.react],
    image: watowatch,
    visit_link: "https://watowatch-tv-show-advisor.vercel.app/",
    github_link: "https://github.com/zouyos/tv-show-advisor",
    created_at: "dec. 2022",
  },
  {
    id: 2,
    name: "ISpent",
    short_description: "Expense tracker developed with React and Redux",
    description:
      "This application allows the user to set an income and track their expenses.\nIt uses Redux library that helps centralizing the application's state and logic making it easy to test or debug.\nRedux Persist library provides state persitence. Unit tests are added with Jest and react-testing library",
    techs: [techs.react, techs.redux, { name: "Redux Persist" }],
    image: ispent,
    visit_link: "https://ispent-expense-tracker.vercel.app/",
    github_link: "https://github.com/zouyos/expense-tracker",
    created_at: "aug. 2023",
  },
  {
    id: 3,
    name: "Poke'Decks",
    short_description: "Pokemon fan game developed with React and Custom Hooks",
    description:
      "A Pokemon mini game developed with React.\nThe application uses a public API and consist in a random lottery with different ratios on items.\nIt uses custom hooks like « useLocalStorage » and « useScrollPosition ».",
    techs: [techs.react, { name: "Custom Hooks" }],
    image: pokedecks,
    visit_link: "https://poke-decks-game.vercel.app/",
    github_link: "https://github.com/zouyos/poke-decks",
    created_at: "feb. 2024",
  },
  {
    id: 4,
    name: "Notomatic",
    short_description: "Note manager developed with React and Redux",
    description:
      "This application allows the user to create and manage notes within an intuitive interface.\nIt uses Redux library and Redux Persist library for persitence",
    techs: [techs.react, techs.redux, { name: "Redux Persist" }],
    image: notomatic,
    visit_link: "https://notomatic-note-manager.vercel.app/",
    github_link: "https://github.com/zouyos/notomatic",
    created_at: "apr. 2024",
  },
];
