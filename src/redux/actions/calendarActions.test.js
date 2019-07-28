import { createReminderAction } from "./calendarActions";

const reminderData = {
  day: 27,
  month: 6,
  time: "12:50",
  city: "Montevideo",
  color: "#3e23e6",
  id: "_1564264548624",
  weatherForecast: "Partly cloudy"
};

describe("add reminder action", () => {
  it("it should create a action to add a reminder", () => {
    const expectedAction = {
      type: "SET_REMINDER",
      payload: reminderData
    };

    expect(createReminderAction(reminderData)).toEqual(expectedAction);
  });
});
