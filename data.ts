import ohanami from './src/assets/img/ohanami.png';
import notomatic from './src/assets/img/notomatic.png';
import pokedecks from './src/assets/img/pokedecks.png';
import ispent from './src/assets/img/ispent.png';
import watowatch from './src/assets/img/watowatch.png';
import react_icon from './src/assets/img/react-icon.png';
import react_icon_dark from './src/assets/img/react-icon-dark.png';
import redux_icon from './src/assets/img/redux-icon.png';
import bootstrap_icon from './src/assets/img/bootstrap-icon.png';
import node_icon from './src/assets/img/node-icon.png';
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
      'TV show advisor',
    description:
      "Search for TV show information using The Movie Database (TMDb) API.\nThe most popular TV show in the user's region is displayed by default.\nBootstrap is used for responsive layouts and ready-to-use UI components.",
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
    short_description: 'Expense tracker',
    description:
      "Manage your budget by setting an income and a list of expenses.\nRedux helps centralizing the application's state and logic, making it easy to debug.\nRedux Persist library provides state persitence.\nUnit tests are added.",
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
    name: "Poke'Decks",
    short_description: 'Lottery mini-game',
    description:
      "A collectible Pokemon game featuring a rarity-based lottery system.\nIt uses custom hooks such as useLocalStorage for data persistence and useScrollPosition to improve navigation, especially on mobile devices.",
    techs: [techs.react, { name: 'Custom Hooks' }, techs.bootstrap],
    image: pokedecks,
    visit_link: 'https://poke-decks-game.vercel.app/',
    github_link: 'https://github.com/zouyos/poke-decks',
    created_at: new Date('2024-03'),
    version: '1.5.0'
  },
  {
    id: 4,
    name: 'Notomatic',
    short_description: 'Note manager',
    description:
      'Create and manage notes.\nThe frontend is decoupled from the backend, which is connected to a MongoDB database.\nIt handles authentification, password reset and user notes are encrypted when stored in the database.',
    techs: [techs.node, techs.react, techs.ts, techs.redux, techs.bootstrap],
    image: notomatic,
    visit_link: 'https://notomatic-note-manager.vercel.app/',
    github: {
      front: 'https://github.com/zouyos/notomatic',
      back: 'https://github.com/zouyos/notomatic-api-node',
    },
    created_at: new Date('2024-08'),
    version: '1.4.7'
  },
  {
    id: 5,
    name: 'Ohanami 🌸',
    short_description: 'Online score sheet',
    description:
      'Helps calculate scores for the board game « Ohanami » through a user-friendly interface.',
    techs: [techs.react, techs.ts, techs.bootstrap],
    image: ohanami,
    visit_link: 'https://ohanami-game.vercel.app/',
    github_link:'https://github.com/zouyos/ohanami',
    created_at: new Date('2024-08'),
    version: '1.1.2'
  },
];