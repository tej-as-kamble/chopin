import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarPanel.css";

const CalendarPanel = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="cal-wrapper">
      <h4 className="cal-heading">Calender</h4>
      <Calendar
        onChange={setValue}
        value={value}
        calendarType="gregory"
        showNeighboringMonth={false}
      />
    </div>
  );
};

export default CalendarPanel;
