import moment from "moment";

export function getWeatherByCityAndDate(city, day) {
  const apiKey = "bd8bcde3e6a3444b95e202424192707";
  const date = `${day.year().toString()}-${(
    day.month() + 1
  ).toString()}-${day.date().toString()}`;
  const url = `http://api.worldweatheronline.com/premium/v1/weather.ashx?key=${apiKey}&q=${city}&format=json&date=${date}`;

  return fetch(url)
    .then(res => res.json())
    .then(jsonRes => jsonRes.data.weather[0].hourly[0].weatherDesc[0]);
}

export function getCurrentMonth() {
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

  return {
    currentMonth: {
      date: curMonth,
      name: moment(curMonth).format("MMMM YYYY"),
      weeks: calendar,
      reminders: []
    }
  };
}
