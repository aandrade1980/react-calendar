import React, { Component } from "react";
import PropTypes from "prop-types";

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
      },
      button: {
        cursor: "pointer"
      }
    };
    const { monthName, getNextMonth, getPrevMonth } = this.props;
    return (
      <header style={styles.header}>
        <div>
          <button style={styles.button} onClick={() => getPrevMonth()}>
            ◀
          </button>
        </div>
        <h1>{monthName}</h1>
        <div>
          <button style={styles.button} onClick={() => getNextMonth()}>
            ▶
          </button>
        </div>
      </header>
    );
  }
}

const mapActionsToProps = {
  getNextMonth,
  getPrevMonth
};

CalendarTitle.propTypes = {
  monthName: PropTypes.string.isRequired,
  getNextMonth: PropTypes.func.isRequired,
  getPrevMonth: PropTypes.func.isRequired
};

export default connect(
  null,
  mapActionsToProps
)(CalendarTitle);
