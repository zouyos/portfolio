import style from './style.module.css';
import { THEME, useThemeModeContext } from '@/contexts/ThemeModeContext';

type AvatarProps = {
  img: string;
  title: string;
};

const Avatar = ({ img, title }: AvatarProps) => {
  const { themeMode } = useThemeModeContext();
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
