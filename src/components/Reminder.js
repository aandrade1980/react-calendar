import React from "react";

import "./Reminder.css";

const Reminder = ({
  currentReminder,
  reminder: { city, color, description, time, id, weatherForecast }
}) => {
  return (
    <div className="reminder_container" style={{ backgroundColor: `${color}` }}>
      <p className="description ellipsis">{description}</p>
      <span>{`${city} - ${time}`}</span>
      <span>{weatherForecast}</span>
      <button
        onClick={() => currentReminder({ description, city, color, time, id })}
      >
        <i className="far fa-edit" />
      </button>
    </div>
  );
};

export default Reminder;
