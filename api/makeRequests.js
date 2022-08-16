import axios from "axios";

const API_KEY = '79309a34f5a673793477ea0a1f82854e'

export const fetchForecastData = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  )
  const lat = Math.floor(response?.data?.[0]?.lat * 100) / 100;
  const lon = Math.floor(response?.data?.[0]?.lon * 100) / 100;
  const forecastResponse = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )
  return forecastResponse
}