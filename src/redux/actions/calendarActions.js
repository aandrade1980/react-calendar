import { getWeatherByCityAndDate } from "../../util/util";

export const addReminder = (day, reminderData) => dispatch => {
  getWeatherByCityAndDate(reminderData.city, day).then(res => {
    reminderData.weatherForecast = res.value;
    dispatch(
      createReminderAction({
        day: day.date(),
        month: day.month(),
        ...reminderData
      })
    );
  });
};

export const createReminderAction = reminder => {
  return {
    type: "SET_REMINDER",
    payload: reminder
  };
};
