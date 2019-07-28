import calendarReducer from "./calendarReducer";
import { getCurrentMonth } from "../../util/util";

const reminderData = {
  day: 27,
  month: 6,
  time: "12:50",
  city: "Montevideo",
  color: "#3e23e6",
  id: "_1564264548624",
  weatherForecast: "Partly cloudy"
};

describe("calendar reducer", () => {
  it("should return the initial state", () => {
    expect(calendarReducer(undefined, {})).toEqual(getCurrentMonth());
  });

  it("should handle SET_REMINDER", () => {
    const state = {
      currentMonth: {
        reminders: []
      }
    };

    expect(
      calendarReducer(state, {
        type: "SET_REMINDER",
        payload: { ...reminderData }
      })
    ).toEqual({
      currentMonth: {
        reminders: [
          {
            ...reminderData
          }
        ]
      }
    });
  });

  it("should handle update SET_REMINDER", () => {
    const state = {
      currentMonth: {
        reminders: [
          {
            ...reminderData
          }
        ]
      }
    };

    expect(
      calendarReducer(state, {
        type: "SET_REMINDER",
        payload: {
          ...reminderData,
          city: "Buenos Aires"
        }
      })
    ).toEqual({
      currentMonth: {
        reminders: [
          {
            ...reminderData,
            city: "Buenos Aires"
          }
        ]
      }
    });
  });
});
