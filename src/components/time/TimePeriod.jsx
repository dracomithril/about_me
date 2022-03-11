import { format } from "date-fns";


export const TimePeriod = ({ start, end, title }) => {
  return (
    <span title={title}>
      {format(start, "MMM yyyy")} – {end ? format(end, "MMM yyyy") : "Present"}
    </span>
  );
};
