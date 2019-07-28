import React, { Component } from "react";
import moment from "moment";

import "./calendarDay.css";

// Redux
import { connect } from "react-redux";

// Components
import Modal from "./Modal";
import Reminder from "./Reminder";

class CalendarDay extends Component {
  state = {
    openModal: false
  };

  dayIsWeekend = day =>
    day.day() === 0 || day.day() === 6 ? "weekend_day" : "";

  dayInCurrentMonth = day =>
    day.month() !== moment().month() ? "disabled_day" : "";

  openModal = () => this.setState({ openModal: true });

  closeModal = () => this.setState({ openModal: false });

  render() {
    const { day, allReminders } = this.props;
    const dayReminders = allReminders.filter(
      element => element.day === day.date() && element.month === day.month()
    );
    dayReminders.sort(
      (a, b) =>
        new Date("1970/01/01 " + a.time) - new Date("1970/01/01 " + b.time)
    );

    return (
      <>
        <div
          className={`calendar_day_container ${this.dayIsWeekend(
            day
          )} ${this.dayInCurrentMonth(day)}`}
        >
          <span className="calendar_day">{day.date()}</span>
          <button
            className={`btn_new_reminder${
              this.dayInCurrentMonth(day) !== "" ? " d-none" : ""
            }`}
            onClick={this.openModal}
          >
            <i className="fas fa-plus-circle" />
          </button>
          {dayReminders.map(el => (
            <Reminder key={el.id} reminder={el} day={day} />
          ))}
        </div>
        {this.state.openModal && (
          <Modal
            open={this.state.openModal}
            closeModal={this.closeModal}
            day={day}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  allReminders: state.calendar.currentMonth.reminders
});

export default connect(
  mapStateToProps,
  null
)(CalendarDay);
