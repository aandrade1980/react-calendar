import React from "react";

// Components
import Week from "./CalendarWeek";

export default function CalendarMonth({ weeks }) {
  return (
    <>
      {weeks.map((week, index) => {
        return <Week key={index} week={week.days} />;
      })}
    </>
  );
}
