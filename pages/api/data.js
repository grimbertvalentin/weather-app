import config from "../../config.json";
import { getWeatherInfo } from "../../services/weatherCodes";

export default async function handler(req, res) {
  const url =
    "https://api.open-meteo.com/v1/forecast" +
    `?latitude=${config.latitude}&longitude=${config.longitude}` +
    "&current=temperature_2m,apparent_temperature,relative_humidity_2m," +
    "weather_code,is_day,wind_speed_10m,wind_direction_10m,visibility" +
    "&daily=sunrise,sunset" +
    "&wind_speed_unit=ms&timeformat=unixtime&timezone=auto&forecast_days=1";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Open-Meteo error: ${response.status}`);
    }
    const data = await response.json();
    const { description, icon } = getWeatherInfo(
      data.current.weather_code,
      data.current.is_day
    );

    // On renvoie les données dans le format que les composants attendent déjà
    res.status(200).json({
      name: config.city,
      sys: {
        country: config.country,
        sunrise: data.daily.sunrise[0],
        sunset: data.daily.sunset[0],
      },
      weather: [{ description, icon }],
      main: {
        temp: data.current.temperature_2m,
        feels_like: data.current.apparent_temperature,
        humidity: data.current.relative_humidity_2m,
      },
      wind: {
        speed: data.current.wind_speed_10m,
        deg: data.current.wind_direction_10m,
      },
      visibility: data.current.visibility,
      dt: data.current.time,
      timezone: data.utc_offset_seconds,
    });
  } catch (error) {
    res.status(200).json({ message: "Weather data unavailable" });
  }
}