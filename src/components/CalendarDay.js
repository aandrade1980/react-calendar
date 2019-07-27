import React from "react";
import moment from "moment";

import "./calendarDay.css";

export default function CalendarDay({ day }) {
  const dayIsWeekend = day =>
    day.day() === 0 || day.day() === 6 ? "weekend_day" : "";

  const dayInCurrentMonth = day =>
    day.month() !== moment().month() ? "disabled_day" : "";

  return (
    <div
      className={`calendar_day ${dayIsWeekend(day)} ${dayInCurrentMonth(day)}`}
    >
      {day.date()}
    </div>
  );
}
