import { HourlyWeather } from '../types/types';

export const getRelevantHours = (hourlyWeather: HourlyWeather[]): HourlyWeather[] => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const day = String(now.getDate()).padStart(2, '0');
  const hour = String(now.getHours()).padStart(2, '0');

  const currentTime = `${year}-${month}-${day} ${hour}:00`;

  const currentHourIndex = hourlyWeather.findIndex(hour => hour.time === currentTime);

  if (currentHourIndex === -1) return [];

  const start = Math.max(0, currentHourIndex - 3);
  const end = currentHourIndex + 2;

  return hourlyWeather.slice(start, end);
};
