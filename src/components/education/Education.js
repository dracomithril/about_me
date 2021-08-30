import style from "./style.css";

export const Education = ({ data }) => {
  const { dates, degree, field, img, institution } = data;
  return (
    <div className={style.education}>
      <div className={style.logo}>
        <img src={img} loading="lazy" alt={institution} />
      </div>
      <div>
        <div className={style.info}>
          <h3>{institution}</h3>
          {degree && <span title="Degree Name">{degree}</span>}
          <span title="Field Of Study">{field}</span>
        </div>
        <small title="Dates attended or expected graduation">
          <time>{dates.start}</time> – <time>{dates.end}</time>
        </small>
      </div>
    </div>
  );
};
