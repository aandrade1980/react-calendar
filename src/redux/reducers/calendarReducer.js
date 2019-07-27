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
    days: moment(curMonth).daysInMonth(),
    weeks: calendar
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
