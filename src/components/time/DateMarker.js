import style from "./style.css";

export const DateMarker = ({ title, value }) => {
  return (
    <div title={title} className={style.date_maker}>
      <div className={style.date_maker__header} id="title">{title}</div>
      <div className={style.date_maker__value} id="value">{value}</div>
    </div>
  );
};
