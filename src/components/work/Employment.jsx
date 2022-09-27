import style from "./style.module.css";
import { Duration } from "../time/Duration";
import { Position } from "./Position";

export const Employment = ({ data }) => {
  const oldest = data.positions
    .map(({ dates }) => new Date(dates.start).getTime())
    .sort()
    .shift();
  const newest = data.positions
    .map(({ dates }) => new Date(dates.end || Date.now()).getTime())
    .sort()
    .pop();
  return (
    <section className={style.employment}>
      <div className={style.company_info}>
        <div>
          <img src={data.img} loading="lazy" alt={data.companyName} />
        </div>
        <div className={style.header}>
          <h3>
            <span title="Company Name">{data.companyName}</span>
          </h3>
          <h4>
            <Duration start={new Date(oldest)} end={new Date(newest)} title="Total Duration" />
          </h4>
        </div>
      </div>
      <ul className={style.connected_list}>
        {data.positions.map((position) => (
          <Position data={position} key={position.title} />
        ))}
      </ul>
    </section>
  );
};
