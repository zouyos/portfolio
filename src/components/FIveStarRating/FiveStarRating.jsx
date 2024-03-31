import style from "./style.module.css";
import { StarFill, StarHalf, Star as EmptyStar } from "react-bootstrap-icons";

export const FiveStarRating = ({ techRatings }) => {
  return (
    <div className={style.container}>
      {techRatings.map((techRating) => {
        const starList = [];
        const starFillCount = Math.floor(techRating.rating);
        const hasStarHalf = techRating.rating - starFillCount >= 0.5;
        const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

        for (let i = 0; i < starFillCount; i++) {
          starList.push(<StarFill key={"starFill" + i} size={14} />);
        }

        if (hasStarHalf) {
          starList.push(<StarHalf size={14} />);
        }

        for (let i = 0; i < emptyStarCount; i++) {
          starList.push(<EmptyStar key={"emptyStar" + i} size={14} />);
        }

        return (
          <div key={techRating.id} className={style.rating_container}>
            <span
              className={style.label}
              style={{ color: "#89ddff", fontWeight: "bold" }}
            >
              {techRating.name}{" "}
            </span>
            <span>{starList}</span>
          </div>
        );
      })}
    </div>
  );
};
