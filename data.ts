import notomatic from './src/assets/img/notomatic.png';
import pokedecks from './src/assets/img/pokedecks.png';
import ispent from './src/assets/img/ispent.png';
import watowatch from './src/assets/img/watowatch.png';
import NB from './src/assets/img/NB.png';
import planexam from './src/assets/img/planexam.png';
import sfrps from './src/assets/img/sf_rps.png';
import react_icon from './src/assets/img/react-icon.png';
import react_icon_dark from './src/assets/img/react-icon-dark.png';
import redux_icon from './src/assets/img/redux-icon.png';
import bootstrap_icon from './src/assets/img/bootstrap-icon.png';
import node_icon from './src/assets/img/node-icon.png';
import symfony_icon from './src/assets/img/symfony-icon.png';
import symfony_icon_white from './src/assets/img/symfony-icon-white.png';
import spring_boot_icon from './src/assets/img/spring-icon.png';
import thymeleaf_icon from './src/assets/img/thymeleaf-icon.png';
import twig_icon from './src/assets/img/twig-icon.png';
import sass_icon from './src/assets/img/sass-icon.png';
import js_icon from './src/assets/img/js-icon.png';
import ts_icon from './src/assets/img/ts-icon.png';
import { Project } from './src/types/types';

const techs = {
  react: {
    icon: {
      icon_dark: react_icon,
      icon_light: react_icon_dark,
    },
    name: 'React',
  },
  ts: {
    icon: {
      icon_dark: ts_icon,
    },
    name: 'TypeScript',
  },
  redux: {
    icon: {
      icon_dark: redux_icon,
    },
    name: 'Redux',
  },
  bootstrap: {
    icon: {
      icon_dark: bootstrap_icon,
    },
    name: 'Bootstrap',
  },
  symfony: {
    icon: {
      icon_dark: symfony_icon_white,
      icon_light: symfony_icon,
    },
    name: 'Symfony',
  },
  twig: {
    icon: {
      icon_dark: twig_icon,
    },
    name: 'Twig',
  },
  sass: {
    icon: {
      icon_dark: sass_icon,
    },
    name: 'Sass',
  },
  spring_boot_icon: {
    icon: {
      icon_dark: spring_boot_icon,
    },
    name: 'Spring Boot',
  },
  thymeleaf: {
    icon: {
      icon_dark: thymeleaf_icon,
    },
    name: 'Thymeleaf',
  },
  js: {
    icon: {
      icon_dark: js_icon,
    },
    name: 'JavaScript',
  },
  node: {
    icon: {
      icon_dark: node_icon,
    },
    name: 'Node.js',
  },
};

export const projects: Project[] = [
  {
    id: 1,
    name: 'Watowatch',
    short_description:
      'TV show advisor developed with React and using TMDB API',
    description:
      'Based on « The Movie Database » API endpoint listing trending TV shows, this application displays details about the most watched TV show.\nA list of related recommendations is provided, loading details about the selected show when clicked.\nThe application also allows the user to search a TV show within TMDB.\nUnit tests are added with Jest and react-testing library.\nBootstrap is a library that helps developer deal with CSS classes and provides ready-to-use components.',
    techs: [techs.react, techs.bootstrap],
    image: watowatch,
    visit_link: 'https://watowatch-tv-show-advisor.vercel.app/',
    github_link: 'https://github.com/zouyos/tv-show-advisor',
    created_at: new Date('2022-12'),
    version: '1.2.1'
  },
  {
    id: 2,
    name: 'ISpent',
    short_description: 'Expense tracker developed with React and Redux',
    description:
      "This application helps the user manage their budget by setting an income and a list of expenses.\nIt uses Redux library that helps centralizing the application's state and logic, making it easy to test or debug.\nRedux Persist library provides state persitence.\nUnit tests are added with Jest and react-testing library.",
    techs: [
      techs.react,
      techs.redux,
      { name: 'Redux Persist' },
      techs.bootstrap,
    ],
    image: ispent,
    visit_link: 'https://ispent-expense-tracker.vercel.app/',
    github_link: 'https://github.com/zouyos/expense-tracker',
    created_at: new Date('2023-06'),
    version: '1.3.4'
  },
  {
    id: 3,
    name: 'NB Facialiste',
    short_description:
      'Web application for a showcase site developed with Symfony',
    description:
      "This application was made for a client while I was self-employed, it informs the user about my client's business and provides a contact form, authentification and mailing feature.\nThe administrator has access to a « Back Office » where they can manage the data, like articles or appointments.\nSymfony is used as a backend language, to create and access data from a database (CRUD)\nThis project follows the MVC pattern, that emphasizes a separation between the software's logic and the display.\nTwig is used as the template engine.",
    techs: [techs.symfony, techs.twig, techs.sass, techs.bootstrap],
    image: NB,
    github_link: 'https://github.com/zouyos/nb-facialiste',
    created_at: new Date('2023-01'),
    version: '1.4.19'
  },
  {
    id: 4,
    name: 'PlanExam',
    short_description: 'Final project of my bachelor degree exam',
    description:
      'The idea of this project was to facilitate the organization of a french IT diploma’s exam, by sharing out teachers in exam centers.\nIt contains a CSV file import and reading feature.\nThe project follows the MVC pattern.\nI used UML (Unified Modeling Language) that is intended to provide a standard way to visualize the design of a system.\nThe main language is Java and its framework Spring Boot.\nI also used vanilla JS to dynamically call the database when clicking checkboxes.\nThe template engine used is Thymeleaf.',
    techs: [techs.spring_boot_icon, techs.thymeleaf, techs.js, techs.bootstrap],
    image: planexam,
    github_link: 'https://github.com/zouyos/planexam',
    created_at: new Date('2024-01'),
    version: '2.0.3'
  },
  {
    id: 5,
    name: "Poke'Decks",
    short_description: 'Pokemon fan game developed with React and Custom Hooks',
    description:
      'Pokemon mini game developed with React, this application uses a public API to retreive data and consists in a random lottery of collectable pokemons.\nPokemons have different apparition rates.\nIt uses custom hooks like « useLocalStorage » for browser persitence and « useScrollPosition » to display useful scroll buttons, especially on mobile devices.',
    techs: [techs.react, { name: 'Custom Hooks' }, techs.bootstrap],
    image: pokedecks,
    visit_link: 'https://poke-decks-game.vercel.app/',
    github_link: 'https://github.com/zouyos/poke-decks',
    created_at: new Date('2023-11'),
    version: '1.5.0'
  },
  {
    id: 6,
    name: 'Notomatic',
    short_description: 'Note manager developed with React and Express.js',
    description:
      'This application allows the user to create and manage notes within an intuitive interface.\nThe frontend is coded with React and Redux, while the backend is coded with Node.js/Express and linked to a MongoDB database.\nIt handles authentification, password reset and user notes are encrypted when stored in the database.',
    techs: [techs.node, techs.react, techs.ts, techs.redux, techs.bootstrap],
    image: notomatic,
    visit_link: 'https://notomatic-note-manager.vercel.app/',
    github: {
      front: 'https://github.com/zouyos/notomatic',
      back: 'https://github.com/zouyos/notomatic-api-node',
    },
    created_at: new Date('2024-03'),
    version: '1.4.7'
  },
  {
    id: 7,
    name: "Street Fighter RPS",
    short_description: 'Street Fighter fan game developed with React (better on mobile devices)',
    description:
      'Rock Paper Cissors mini game developed with React and TypeScript.\nThe player has to choose a symbol and the opponent will randomly play another symbol.\nAnimations are made by dynamically looping over frames.\nUI/UX is made with Bootstrap',
    techs: [techs.react, techs.ts, techs.bootstrap],
    image: sfrps,
    visit_link: 'https://street-fighter-rps.vercel.app/',
    github_link: 'https://github.com/zouyos/street_fighter_rps.git',
    created_at: new Date('2025-01'),
    version: '1.11.0'
  },
];