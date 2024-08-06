import apiClient from '../utils/apiClient';
import { WeatherResponse } from '../types/weatherTypes';

export const getWeatherByCity = async (city: string): Promise<WeatherResponse> => {
  const response = await apiClient.get('/current.json', {
    params: {
      q: city,
      aqi: 'no'
    }
  });
  return response.data;
};
