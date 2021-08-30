import { intervalToDuration } from "date-fns";
import { DateMarker } from "./DateMarker";

import style from "./style.css";

export const Duration = ({ start, end, title }) => {
  const duration = intervalToDuration({
    start,
    end,
  });
  const { years, months, days } = duration;
  return (
    <div title={title} className={style.duration}>
      <DateMarker title="years" value={years} />
      <DateMarker title="months" value={months} />
      <DateMarker title="days" value={days} />
    </div>
  );
};
