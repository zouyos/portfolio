import style from "./style.module.css";

const Avatar = ({ img, title }) => {
  return (
    <div className={style.container}>
      <img src={img} alt="Avatar" className={style.img} />
      <div className={style.title}>{title}</div>
    </div>
  );
};

export default Avatar;
