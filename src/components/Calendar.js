import React, { Component } from "react";

// Redux
import { connect } from "react-redux";

// Components
import CalendarTitle from "./CalendarTitle";
import CalendarDays from "./CalendarDays";
import CalendarMonth from "./CalendarMonth";

import moment from "moment";

class Calendar extends Component {
  render() {
    const weekDays = moment.weekdays();
    const { name, weeks } = this.props.currentMonth;
    return (
      <div>
        <CalendarTitle month={name} />
        <CalendarDays weekDays={weekDays} />
        <CalendarMonth weeks={weeks} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMonth: state.calendar.currentMonth
});

export default connect(
  mapStateToProps,
  {}
)(Calendar);
