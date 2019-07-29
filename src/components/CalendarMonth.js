import React from "react";
import PropTypes from "prop-types";

// Components
import Week from "./CalendarWeek";

function CalendarMonth({ weeks }) {
  return (
    <>
      {weeks.map((week, index) => {
        return <Week key={index} week={week.days} />;
      })}
    </>
  );
}

CalendarMonth.propTypes = {
  weeks: PropTypes.array.isRequired
};

export default CalendarMonth;
