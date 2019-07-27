import React from "react";

const Reminder = ({
  currentReminder,
  reminder: { city, color, description, time, id, weatherForecast }
}) => {
  return (
    <div style={{ backgroundColor: `${color}`, color: "white" }}>
      <p>
        {description} - {weatherForecast}
      </p>
      <span>{`${city} - ${time}`}</span>
      <button
        onClick={() => currentReminder({ description, city, color, time, id })}
      >
        Edit
      </button>
    </div>
  );
};

export default Reminder;
