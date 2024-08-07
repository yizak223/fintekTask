import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Location, Weather, HourlyWeather } from '../types/types';
import { getRelevantHours } from '../utils/getRelevantHours';

interface WeatherContextType {
    weather: Weather | null;
    location: Location | null;
    resMode: number;
    hourlyWeather: HourlyWeather[];
    relevantHours: HourlyWeather[];
    setWeather: (weather: Weather) => void;
    setLocation: (location: Location) => void;
    setResMode: (mode: number) => void;
    setHourlyWeather: (hourlyWeather: HourlyWeather[]) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [weather, setWeather] = useState<Weather | null>(null);
    const [location, setLocation] = useState<Location | null>(null);
    const [resMode, setResMode] = useState<number>(0);
    const [hourlyWeather, setHourlyWeather] = useState<HourlyWeather[]>([]);
    const [relevantHours, setRelevantHours] = useState<HourlyWeather[]>([]);

    useEffect(() => {
        if (hourlyWeather.length > 0) {
            const relevantData = getRelevantHours(hourlyWeather);
            setRelevantHours(relevantData);
        }
    }, [hourlyWeather]);

    return (
        <WeatherContext.Provider value={{ weather, location, resMode, hourlyWeather, relevantHours, setWeather, setLocation, setResMode, setHourlyWeather }}>
            {children}
        </WeatherContext.Provider>
    );
};

const useWeather = () => {
    const context = useContext(WeatherContext);
    if (context === undefined) {
        throw new Error('useWeather must be used within a WeatherProvider');
    }
    return context;
};

export { WeatherProvider, useWeather };
