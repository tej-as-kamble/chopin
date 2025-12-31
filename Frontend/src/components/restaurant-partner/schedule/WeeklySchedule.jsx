import DayRow from "./DayRow";
import "./WeeklySchedule.css";

const WeeklySchedule = ({ schedule, setSchedule }) => {
  return (
    <div className="weekly-schedule">
      {schedule.week.map((day, idx) => (
        <DayRow
          key={day.day}
          day={day}
          index={idx}
          schedule={schedule}
          setSchedule={setSchedule}
        />
      ))}
    </div>
  );
};

export default WeeklySchedule;
