import moment from "moment";

export function getWeatherByCityAndDate(city, day) {
  const apiKey = "bd8bcde3e6a3444b95e202424192707";
  const date = `${day.year().toString()}-${(
    day.month() + 1
  ).toString()}-${day.date().toString()}`;
  const url = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${apiKey}&q=${city}&format=json&date=${date}`;

  return fetch(url)
    .then(res => res.json())
    .then(jsonRes => {
      // Weahter api supports only next 15 day...
      // If there isn't a weather property then the date is to far in the future
      if (jsonRes.data.weather) {
        return jsonRes.data.weather[0].hourly[0].weatherDesc[0];
      }
      // If date is more than 15 days show current conditions...
      return jsonRes.data.current_condition[0].weatherDesc[0];
    });
}

export function getCurrentMonth() {
  const curMonth = moment().format("YYYY-MM");

  const startWeek = moment()
    .startOf("month")
    .week();
  const endWeek = moment()
    .endOf("month")
    .week();

  const calendar = getCalendar(startWeek, endWeek);

  return {
    currentMonth: {
      date: curMonth,
      monthIndex: moment().month(),
      name: moment(curMonth).format("MMMM YYYY"),
      weeks: calendar
    },
    reminders: []
  };
}

export function getNextMont(nextMonthIndex) {
  const add = nextMonthIndex - moment().month();
  const startWeek = moment()
    .startOf("month")
    .add(add, "month")
    .week();
  const endWeek = moment()
    .endOf("month")
    .add(add, "month")
    .week();

  const calendar = getCalendar(startWeek, endWeek);

  return {
    currentMonth: {
      date: moment()
        .add(add, "month")
        .format("YYYY-MM"),
      monthIndex: moment()
        .add(add, "month")
        .month(),
      name: moment()
        .add(add, "month")
        .format("MMMM YYYY"),
      weeks: calendar
    }
  };
}

export function getPrevMont(prevMonthIndex) {
  const subtract = moment().month() - prevMonthIndex;
  const startWeek = moment()
    .startOf("month")
    .subtract(subtract, "month")
    .week();
  const endWeek = moment()
    .endOf("month")
    .subtract(subtract, "month")
    .week();

  const calendar = getCalendar(startWeek, endWeek);

  return {
    currentMonth: {
      date: moment()
        .subtract(subtract, "month")
        .format("YYYY-MM"),
      monthIndex: moment()
        .subtract(subtract, "month")
        .month(),
      name: moment()
        .subtract(subtract, "month")
        .format("MMMM YYYY"),
      weeks: calendar
    }
  };
}

function getCalendar(startWeek, endWeek) {
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
  return calendar;
}
