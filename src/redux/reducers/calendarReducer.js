import moment from "moment";

const curMonth = moment().format("YYYY-MM");

const startWeek = moment()
  .startOf("month")
  .week();
const endWeek = moment()
  .endOf("month")
  .week();

let calendar = [];
for (let week = startWeek; week <= endWeek; week++) {
  calendar.push({
    week,
    days: Array(7)
      .fill(0)
      .map((n, i) =>
        moment()
          .week(week)
          .startOf("week")
          .clone()
          .add(n + i, "day")
      )
  });
}

const initialState = {
  currentMonth: {
    date: curMonth,
    name: moment(curMonth).format("MMMM YYYY"),
    weeks: calendar,
    reminders: []
  }
};

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
