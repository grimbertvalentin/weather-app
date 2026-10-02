const WEATHER_CODES = {
  0: { description: "clear sky", icon: "01" },
  1: { description: "mainly clear", icon: "02" },
  2: { description: "partly cloudy", icon: "03" },
  3: { description: "overcast", icon: "04" },
  45: { description: "fog", icon: "50" },
  48: { description: "rime fog", icon: "50" },
  51: { description: "light drizzle", icon: "09" },
  53: { description: "drizzle", icon: "09" },
  55: { description: "dense drizzle", icon: "09" },
  56: { description: "freezing drizzle", icon: "09" },
  57: { description: "dense freezing drizzle", icon: "09" },
  61: { description: "light rain", icon: "10" },
  63: { description: "rain", icon: "10" },
  65: { description: "heavy rain", icon: "10" },
  66: { description: "freezing rain", icon: "10" },
  67: { description: "heavy freezing rain", icon: "10" },
  71: { description: "light snow", icon: "13" },
  73: { description: "snow", icon: "13" },
  75: { description: "heavy snow", icon: "13" },
  77: { description: "snow grains", icon: "13" },
  80: { description: "light rain showers", icon: "09" },
  81: { description: "rain showers", icon: "09" },
  82: { description: "violent rain showers", icon: "09" },
  85: { description: "light snow showers", icon: "13" },
  86: { description: "heavy snow showers", icon: "13" },
  95: { description: "thunderstorm", icon: "11" },
  96: { description: "thunderstorm with hail", icon: "11" },
  99: { description: "thunderstorm with heavy hail", icon: "11" },
};

export const getWeatherInfo = (code, isDay) => {
  const info = WEATHER_CODES[code] ?? { description: "unknown", icon: "03" };
  return {
    description: info.description,
    icon: info.icon + (isDay ? "d" : "n"),
  };
};