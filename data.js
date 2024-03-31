import watowatch from "./src/assets/img/watowatch.png";
import ispent from "./src/assets/img/ispent.png";
import pokedecks from "./src/assets/img/pokedecks.png";
import react_icon from "./src/assets/img/react-icon.png";
import redux_icon from "./src/assets/img/redux-icon.png";

const projects = [
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
    description:
      "This application allows the user to set an income and track their expenses within an intuitive interface.\nIt uses Redux library that helps centralizing the application's state and logic making it easy to test or debug.\nThe extension « Redux Persist » allows state persitence",
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
    description:
      "A Pokemon mini game developed with React.\nThe application uses a public API and consist in a random lottery with different ratios on items.\nIt uses custom hooks like « useLocalStorage » and « useScrollPosition ».",
    techs: [{ icon: react_icon, name: "React" }, { name: "Custom Hooks" }],
    image: pokedecks,
    visit_link: "https://poke-decks-game.vercel.app/",
    github_link: "https://github.com/zouyos/poke-decks",
    created_at: "feb. 2024",
  },
];

const techRatings = [
  {
    id: 1,
    name: "HTML CSS SQL",
    rating: 5,
  },
  {
    id: 2,
    name: "JavaScript Bootstrap Sass",
    rating: 4,
  },
  {
    id: 3,
    name: "React",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Vue Redux Jest",
    rating: 3.5,
  },
  {
    id: 5,
    name: "Node Express",
    rating: 2.5,
  },
  {
    id: 6,
    name: "PHP Symfony Java SpringBoot",
    rating: 3,
  },
];

export { projects, techRatings };
