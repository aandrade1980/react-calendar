import React from "react";
import PropTypes from "prop-types";

function CalendarNameDays({ weekDays }) {
  const styles = {
    header: {
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      background: "rgb(37, 115, 195)",
      color: "white",
      padding: "5px 0"
    },
    strong: {
      textAlign: "center"
    }
  };

  return (
    <header style={styles.header}>
      {weekDays.map((day, i) => (
        <strong style={styles.strong} key={i}>
          {day}
        </strong>
      ))}
    </header>
  );
}

CalendarNameDays.propTyes = {
  weekDays: PropTypes.array.isRequired
};

export default CalendarNameDays;
