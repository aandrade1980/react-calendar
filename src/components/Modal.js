import React, { Component } from "react";

import "./Modal.css";

// Redux
import { connect } from "react-redux";
import { addReminder } from "../redux/actions/calendarActions";

class Modal extends Component {
  state = {
    description: this.props.reminder.description || "",
    time: this.props.reminder.time || "",
    city: this.props.reminder.city || "",
    color: this.props.reminder.color || "#e66465",
    id: this.props.reminder.id || ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.id === "") {
      this.setState({ id: `_${new Date().getTime()}` }, () =>
        this.props.addReminder(this.props.day, this.state)
      );
    } else {
      this.props.addReminder(this.props.day, this.state);
    }
    setTimeout(() => {
      this.props.closeModal();
    }, 0);
  };

  render() {
    const { open, closeModal } = this.props;
    return (
      open && (
        <div className="modal_container">
          <div className="modal_content">
            <form style={{ minWidth: "450px", minHeight: "200px" }}>
              <div>
                <textarea
                  className="description"
                  placeholder="Reminder"
                  maxLength="30"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={this.state.time}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <input
                  type="color"
                  id="color"
                  name="color"
                  value={this.state.color}
                  onChange={this.handleChange}
                />
              </div>
            </form>
            <button onClick={closeModal}>Cancel</button>
            <button onClick={this.handleSubmit}>Save</button>
          </div>
        </div>
      )
    );
  }
}

export default connect(
  null,
  { addReminder }
)(Modal);
