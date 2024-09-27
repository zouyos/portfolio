import ReactDOM from 'react-dom/client';
import App from './App';
import '../global.css';
import './index.css';
import { ThemeModeProvider } from './contexts/ThemeModeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeModeProvider>
    <App />
  </ThemeModeProvider>
);
