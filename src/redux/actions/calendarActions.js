import { getWeatherByCityAndDate } from "../../util/util";

export const addReminder = (day, reminderData) => dispatch => {
  getWeatherByCityAndDate(reminderData.city, day)
    .then(res => {
      reminderData.weatherForecast = res.value;
      reminderData.id = `_${new Date().getTime()}`;
      dispatch(
        createReminderAction({
          day: day.date(),
          month: day.month(),
          year: day.year(),
          ...reminderData
        })
      );
    })
    .catch(err => console.error("addReminder action error => ", err));
};

export const updateReminder = (day, reminderData) => dispatch => {
  const updatedReminder = {
    day: day.date(),
    month: day.month(),
    ...reminderData
  };

  dispatch({
    type: "UPDATE_REMINDER",
    payload: updatedReminder
  });
};

export const createReminderAction = reminder => {
  return {
    type: "SET_REMINDER",
    payload: reminder
  };
};

export const deleteAllReminders = day => dispatch => {
  return dispatch({
    type: "DELETE_REMINDERS",
    payload: day.date()
  });
};

export const deleteReminder = reminderId => dispatch => {
  return dispatch({
    type: "DELETE_REMINDER",
    payload: reminderId
  });
};

export const getNextMonth = () => dispatch => {
  return dispatch({
    type: "GET_NEXT_MONTH"
  });
};

export const getPrevMonth = () => dispatch => {
  return dispatch({
    type: "GET_PREV_MONTH"
  });
};
