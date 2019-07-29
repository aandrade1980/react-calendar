import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Reminder.css";

// Redux
import { connect } from "react-redux";
import { deleteReminder } from "../redux/actions/calendarActions";

// Component
import Modal from "./Modal";

class Reminder extends Component {
  state = {
    openModal: false
  };

  openModal = () => this.setState({ openModal: true });

  closeModal = () => this.setState({ openModal: false });

  render() {
    const { day, reminder, deleteReminder } = this.props;
    const { openModal } = this.state;
    return (
      <>
        <div
          className="reminder_container"
          style={{ backgroundColor: `${reminder.color}` }}
        >
          <p className="description ellipsis">{reminder.description}</p>
          <span>{`${reminder.city} - ${reminder.time}`}</span>
          <span>{reminder.weatherForecast}</span>
          <button className="btn_edit_reminder" onClick={this.openModal}>
            <i className="far fa-edit" />
          </button>
          <button
            className="btn_delete_reminder"
            onClick={() => deleteReminder(reminder.id)}
          >
            <i className="far fa-trash-alt" />
          </button>
        </div>
        {openModal && (
          <Modal
            open={openModal}
            closeModal={this.closeModal}
            day={day}
            reminder={reminder}
          />
        )}
      </>
    );
  }
}

Reminder.propTypes = {
  day: PropTypes.object.isRequired,
  reminder: PropTypes.object.isRequired,
  deleteReminder: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteReminder }
)(Reminder);
