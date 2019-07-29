import React from "react";

import "./CalendarWeek.css";

// Components
import Day from "./CalendarDay";

export default function CalendarWeek({ week }) {
  return (
    <div className="week_container">
      {week.map((day, index) => {
        return <Day key={index} day={day} />;
      })}
    </div>
  );
}
