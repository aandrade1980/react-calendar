import React from "react";

export default function CalendarTitle({ month }) {
  const styles = {
    h1: {
      display: "flex",
      justifyContent: "center"
    }
  };

  return (
    <header>
      <h1 style={styles.h1}>{month}</h1>
    </header>
  );
}
