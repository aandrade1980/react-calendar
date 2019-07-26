import React, { Component } from "react";

// Redux
import { connect } from "react-redux";

// Components
import CalendarHeader from "./CalendarHeader";

class Calendar extends Component {
  render() {
    return (
      <>
        <CalendarHeader month={this.props.currentMonth.name} />
      </>
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
