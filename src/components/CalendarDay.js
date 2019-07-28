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
    openModal: false,
    currentReminder: ""
  };

  dayIsWeekend = day =>
    day.day() === 0 || day.day() === 6 ? "weekend_day" : "";

  dayInCurrentMonth = day =>
    day.month() !== moment().month() ? "disabled_day" : "";

  openModal = currentReminder =>
    this.setState({
      openModal: true,
      currentReminder
    });

  closeModal = () => this.setState({ openModal: false });

  currentReminder = currentReminder => this.openModal(currentReminder);

  render() {
    const { day, reminders } = this.props;
    const dayReminders = reminders.filter(
      reminder => reminder.day === day.date() && reminder.month === day.month()
    );
    dayReminders.sort(
      (a, b) =>
        new Date("1970/01/01 " + a.time) - new Date("1970/01/01 " + b.time)
    );

    return (
      <>
        <div
          className={`calendar_day ${this.dayIsWeekend(
            day
          )} ${this.dayInCurrentMonth(day)}`}
        >
          {day.date()}
          <button
            className={
              "btn_new_reminder" && this.dayInCurrentMonth(day) !== ""
                ? " d-none"
                : ""
            }
            onClick={this.openModal}
          >
            +
          </button>
          {dayReminders.map((reminder, index) => {
            return (
              <Reminder
                key={index}
                reminder={reminder}
                currentReminder={this.currentReminder}
              />
            );
          })}
        </div>
        {this.state.openModal && (
          <Modal
            open={this.state.openModal}
            closeModal={this.closeModal}
            day={day}
            reminder={this.state.currentReminder}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  reminders: state.calendar.currentMonth.reminders
});

export default connect(
  mapStateToProps,
  null
)(CalendarDay);
