import axios from 'axios';
import { WeatherResponse } from '../types/weatherTypes';

const apiKey = '176bd7c97f134eae80c164903240508';
const baseUrl = 'http://api.weatherapi.com/v1';

export const getWeatherByCity = async (city: string): Promise<WeatherResponse> => {
  const response = await axios.get(`${baseUrl}/current.json`, {
    params: {
      key: apiKey,
      q: city,
      aqi: 'no'
    }
  });
  return response.data;
};
