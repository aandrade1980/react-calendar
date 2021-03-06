import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Modal.css";

// Redux
import { connect } from "react-redux";
import { addReminder, updateReminder } from "../redux/actions/calendarActions";

class Modal extends Component {
  state = {
    description: this.props.reminder ? this.props.reminder.description : "",
    time: this.props.reminder ? this.props.reminder.time : "",
    city: this.props.reminder ? this.props.reminder.city : "",
    color: this.props.reminder ? this.props.reminder.color : "#e66465",
    id: this.props.reminder ? this.props.reminder.id : "",
    weatherForecast: this.props.reminder
      ? this.props.reminder.weatherForecast
      : ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.id === "") {
      this.props.addReminder(this.props.day, this.state);
    } else {
      this.props.updateReminder(this.props.day, this.state);
    }
    this.props.closeModal();
  };

  render() {
    const { open, closeModal } = this.props;
    return (
      open && (
        <div className="modal_container">
          <div className="modal_content">
            <form className="reminder_form" onSubmit={this.handleSubmit}>
              <i className="far fa-bell" />
              <textarea
                placeholder="Reminder..."
                maxLength="30"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                required
              />
              <i className="far fa-clock" />
              <input
                type="time"
                id="time"
                name="time"
                value={this.state.time}
                onChange={this.handleChange}
              />
              <i className="fas fa-city" />
              <input
                placeholder="City..."
                type="text"
                id="city"
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
                required
              />
              <i className="fas fa-palette" />
              <input
                type="color"
                id="color"
                name="color"
                value={this.state.color}
                onChange={this.handleChange}
              />
              <div />
              <div className="reminder_from_buttons_container">
                <button type="button" onClick={closeModal}>
                  Cancel
                </button>
                <button type="submit" className="btn_save">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )
    );
  }
}

const mapActionsToProps = {
  addReminder,
  updateReminder
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  addReminder: PropTypes.func.isRequired,
  updateReminder: PropTypes.func.isRequired
};

export default connect(
  null,
  mapActionsToProps
)(Modal);
