import { getWeatherByCityAndDate } from "../../util/apiWeather";

export const addReminder = (day, reminderData) => dispatch => {
  getWeatherByCityAndDate(reminderData.city, day).then(res => {
    reminderData.weatherForecast = res.value;
    dispatch({
      type: "SET_REMINDER",
      payload: { day: day.date(), ...reminderData }
    });
  });
};
