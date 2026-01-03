import React, { useState } from "react";
import { SCHEDULE_DUMMY } from "@/data/SCHEDULE_DUMMY";
import WeeklySchedule from "@/components/schedule/WeeklySchedule";
import CalendarPanel from "@/components/schedule/CalendarPanel";
import "./SchedulePage.css";

const SchedulePage = () => {
  const [schedule, setSchedule] = useState(SCHEDULE_DUMMY);

  return (
    <div className="schedule-page">
      <div className="schedule-left">
        <h2>Schedule</h2>

        <div className="boundary-box">
          Boundary set by Manager:
          <strong>
            {schedule.managerBoundary.start} – {schedule.managerBoundary.end}
          </strong>
        </div>

        <WeeklySchedule schedule={schedule} setSchedule={setSchedule} />
      </div>

      <CalendarPanel />
    </div>
  );
};

export default SchedulePage;
