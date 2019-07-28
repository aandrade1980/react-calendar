import React, { Component } from "react";

import "./Reminder.css";

// Component
import Modal from "./Modal";

class Reminder extends Component {
  state = {
    openModal: false
  };

  openModal = () => this.setState({ openModal: true });

  closeModal = () => this.setState({ openModal: false });

  render() {
    const { day, reminder } = this.props;
    return (
      <>
        <div
          className="reminder_container"
          style={{ backgroundColor: `${reminder.color}` }}
        >
          <p className="description ellipsis">{reminder.description}</p>
          <span>{`${reminder.city} - ${reminder.time}`}</span>
          <span>{reminder.weatherForecast}</span>
          <button onClick={this.openModal}>
            <i className="far fa-edit" />
          </button>
        </div>
        {this.state.openModal && (
          <Modal
            open={this.state.openModal}
            closeModal={this.closeModal}
            day={day}
            reminder={reminder}
          />
        )}
      </>
    );
  }
}

export default Reminder;
