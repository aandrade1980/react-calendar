import React from "react";
import PropTypes from "prop-types";

import "./CalendarWeek.css";

// Components
import Day from "./CalendarDay";

function CalendarWeek({ week }) {
  return (
    <div className="week_container">
      {week.map((day, index) => {
        return <Day key={index} day={day} />;
      })}
    </div>
  );
}

CalendarWeek.propTypes = {
  week: PropTypes.array.isRequired
};

export default CalendarWeek;
