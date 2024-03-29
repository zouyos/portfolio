import watowatch from "./src/assets/img/watowatch.png";
import ispent from "./src/assets/img/ispent.png";
import pokedecks from "./src/assets/img/pokedecks.png";
import react_icon from "./src/assets/img/react-icon.png";
import redux_icon from "./src/assets/img/redux-icon.png";

export const projects = [
  {
    id: 1,
    name: "Watowatch",
    short_description:
      "TV show advisor developed with React and using the TMDB API",
    description:
      "Based on « The Movie Database » API endpoint listing trending TV shows, this project is made with React 18.\nIt displays infos, rating, and recommendations based on the TV show selected.\nThis app also allows the user to search a TV show within TMDB.",
    techs: [{ icon: react_icon, name: "React" }],
    image: watowatch,
    visit_link: "https://tv-show-advisor-watowatch.vercel.app/",
    github_link: "https://github.com/zouyos/tv-show-advisor",
    created_at: "dec. 2022",
  },
  {
    id: 2,
    name: "ISpent",
    short_description: "Expense tracker developed with React and Redux library",
    description: "",
    techs: [
      { icon: react_icon, name: "React" },
      { icon: redux_icon, name: "Redux" },
      { name: "Redux Persist" },
    ],
    image: ispent,
    visit_link: "https://expense-tracker-ispent.vercel.app/",
    github_link: "https://github.com/zouyos/expense-tracker",
    created_at: "aug. 2023",
  },
  {
    id: 3,
    name: "Poke'Decks",
    short_description: "Pokemon fan game developed with React and Custom Hooks",
    description: "",
    techs: [{ icon: react_icon, name: "React" }, { name: "Custom Hooks" }],
    image: pokedecks,
    visit_link: "https://poke-decks-game.vercel.app/",
    github_link: "https://github.com/zouyos/poke-decks",
    created_at: "feb. 2024",
  },
];
