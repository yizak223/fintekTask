import { Request, Response } from 'express';
import { getWeatherByCity } from '../services/weatherService';
import isValidCity from '../validators/validateCity';

export const getWeather = async (req: Request, res: Response) => {
  const city = req.query.city as string;
  if (!city) {
    return res.status(400).json({ error: 'City is required' });
  }

  if (!isValidCity(city)) {
    return res.status(400).json({ error: 'Invalid city name. Please enter a valid city.' });
  }

  try {
    const weatherData = await getWeatherByCity(city);
    return res.json(weatherData);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};
