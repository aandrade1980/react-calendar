import React, { Component } from "react";

import "./CalendarDay.css";

// Redux
import { connect } from "react-redux";
import { deleteAllReminders } from "../redux/actions/calendarActions";

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
    day.month() !== this.props.monthIndex ? "disabled_day" : "";

  openModal = () => this.setState({ openModal: true });

  closeModal = () => this.setState({ openModal: false });

  render() {
    const { day, allReminders, deleteAllReminders } = this.props;
    const dayReminders = allReminders.filter(
      element => element.day === day.date() && element.month === day.month()
    );
    dayReminders.sort(
      (a, b) =>
        new Date("1970/01/01 " + a.time) - new Date("1970/01/01 " + b.time)
    );
    const showButton = this.dayInCurrentMonth(day) !== "" ? " d-none" : "";

    return (
      <>
        <div
          className={`calendar_day_container ${this.dayIsWeekend(
            day
          )} ${this.dayInCurrentMonth(day)}`}
        >
          <span className="calendar_day">{day.date()}</span>
          <button
            className={`btn_caledar btn_new_reminder${showButton}`}
            onClick={this.openModal}
          >
            <i className="fas fa-plus-circle" />
          </button>
          <button
            className={`btn_caledar btn_delete_reminders${showButton}`}
            onClick={() => deleteAllReminders(day)}
          >
            <i className="far fa-trash-alt" />
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
  allReminders: state.calendar.reminders,
  monthIndex: state.calendar.currentMonth.monthIndex
});

export default connect(
  mapStateToProps,
  { deleteAllReminders }
)(CalendarDay);
