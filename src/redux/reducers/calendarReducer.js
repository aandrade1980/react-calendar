import moment from "moment";

const curMonth = moment().format("YYYY-MM");

console.log("Current Month => ", curMonth);

const initialState = {
  currentMonth: {
    date: curMonth,
    name: moment(curMonth).format("MMMM YYYY"),
    days: moment(curMonth).daysInMonth()
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
