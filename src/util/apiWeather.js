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
