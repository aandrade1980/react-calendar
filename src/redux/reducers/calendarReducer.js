import { getCurrentMonth } from "../../util/util";

const initialState = getCurrentMonth();

export default function(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_REMINDER":
      return {
        ...state,
        currentMonth: {
          ...state.currentMonth,
          reminders: state.currentMonth.reminders.map(reminder => {
            if (reminder.id !== action.payload.id) {
              return reminder;
            }
            return {
              ...action.payload
            };
          })
        }
      };
    case "SET_REMINDER":
      return {
        ...state,
        currentMonth: {
          ...state.currentMonth,
          reminders: [...state.currentMonth.reminders, action.payload]
        }
      };
    default:
      return state;
  }
}
