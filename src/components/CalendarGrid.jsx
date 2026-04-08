import { generateCalendarMatrix } from "../utils/dateUtils";
import DateCell from "./DateCell";

export default function CalendarGrid(props) {
  const matrix = generateCalendarMatrix(props.year, props.month);

  return (
    <table className="w-full text-sm">
      <thead>
        <tr>
          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => (
            <th key={d}>{d}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {matrix.map((week, i) => (
          <tr key={i}>
            {week.map((day, j) => (
              <DateCell key={j} day={day} {...props} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}