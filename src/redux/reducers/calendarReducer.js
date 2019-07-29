import { getCurrentMonth, getNextMont, getPrevMont } from "../../util/util";

const initialState = getCurrentMonth();

export default function(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_REMINDER":
      return {
        ...state,
        reminders: state.reminders.map(reminder => {
          if (reminder.id !== action.payload.id) {
            return reminder;
          }
          return {
            ...action.payload
          };
        })
      };
    case "SET_REMINDER":
      return {
        ...state,
        reminders: [...state.reminders, action.payload]
      };
    case "DELETE_REMINDERS":
      return {
        ...state,
        reminders: state.reminders.filter(
          reminder => reminder.day !== action.payload
        )
      };
    case "DELETE_REMINDER":
      return {
        ...state,
        reminders: state.reminders.filter(
          reminder => reminder.id !== action.payload
        )
      };
    case "GET_NEXT_MONTH":
      const nexMonthData = getNextMont(state.currentMonth.monthIndex + 1);
      return {
        ...state,
        ...nexMonthData
      };
    case "GET_PREV_MONTH":
      const prevMonthData = getPrevMont(state.currentMonth.monthIndex - 1);
      return {
        ...state,
        ...prevMonthData
      };
    default:
      return state;
  }
}
