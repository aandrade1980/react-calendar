import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { getNextMonth, getPrevMonth } from "../redux/actions/calendarActions";

class CalendarTitle extends Component {
  render() {
    const styles = {
      header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    };
    const { monthName, getNextMonth, getPrevMonth } = this.props;
    return (
      <header style={styles.header}>
        <div>
          <button onClick={() => getPrevMonth()}>◀</button>
        </div>
        <h1>{monthName}</h1>
        <div>
          <button onClick={() => getNextMonth()}>▶</button>
        </div>
      </header>
    );
  }
}

const mapActionsToProps = {
  getNextMonth,
  getPrevMonth
};

export default connect(
  null,
  mapActionsToProps
)(CalendarTitle);
