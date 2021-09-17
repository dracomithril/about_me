import { Duration } from "../time/Duration";
import { TimePeriod } from "../time/TimePeriod";
import style from "./style.css";

export const Position = ({ data }) => {
  const { dates, location, details, title, contractType } = data;
  const startDate = new Date(dates.start);
  const endDate = new Date(dates.end || Date.now());
  return (
    <li className={style.position}>
      <div>
        <h3>
          <span title="Position title">{title}</span>
        </h3>
        <h4 hidden title="contract type">
          {contractType}
        </h4>
        <div class={style.time_period}>
          <TimePeriod start={startDate} end={dates.end ? endDate : null} title="Dates Employed" />
          <Duration start={startDate} end={endDate} title="Employment Duration" />
        </div>
        <h4 hidden>
          <span title="Location">{location}</span>
        </h4>
        {Array.isArray(details) ? (
          <ul>
            {details.map((el) => (
              <li key={Math.random()}>{el}</li>
            ))}
          </ul>
        ) : (
          <span>{details}</span>
        )}
      </div>
    </li>
  );
};
