import { getCurrentMonth } from "../../util/util";

const initialState = getCurrentMonth();

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_REMINDER":
      const index = state.currentMonth.reminders.findIndex(
        reminder => reminder.id === action.payload.id
      );
      if (index !== -1) {
        state.currentMonth.reminders[index] = action.payload;
        return {
          ...state
        };
      }

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
