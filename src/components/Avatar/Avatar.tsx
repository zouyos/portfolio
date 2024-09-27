import { useContext } from 'react';
import style from './style.module.css';
import { ThemeModeContext, THEME } from '../../contexts/ThemeModeContext';

type AvatarProps = {
  img: string;
  title: string;
};

const Avatar = ({ img, title }: AvatarProps) => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('ThemeModeContext must be used within a ThemeModeProvider');
  }
  const { themeMode } = context;
  return (
    <div className={style.container}>
      <img
        src={img}
        alt='Avatar'
        className={style.img}
        style={{ borderColor: THEME[themeMode].borderHoverColor }}
      />
      <div className={style.title}>{title}</div>
    </div>
  );
};

export default Avatar;
