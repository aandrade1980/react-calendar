import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";

// Redux
import { connect } from "react-redux";

// Components
import CalendarTitle from "./CalendarTitle";
import CalendarNameDays from "./CalendarNameDays";
import CalendarMonth from "./CalendarMonth";

class Calendar extends Component {
  render() {
    const weekDays = moment.weekdays();
    const { name, weeks } = this.props.currentMonth;
    return (
      <div>
        <CalendarTitle monthName={name} />
        <CalendarNameDays weekDays={weekDays} />
        <CalendarMonth weeks={weeks} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMonth: state.calendar.currentMonth
});

Calendar.propTypes = {
  weeks: PropTypes.array,
  name: PropTypes.string
};

export default connect(
  mapStateToProps,
  null
)(Calendar);
