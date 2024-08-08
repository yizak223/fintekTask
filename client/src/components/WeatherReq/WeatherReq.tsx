import { useContext, useState } from 'react';
import logo from '../../assets/logo.svg';
import TimesTemp from '../TimesTemp/TimesTemp';
import styles from './wehatherReq.module.css';
import { useWeather } from '../../context/Weather';
import baseURL from '../../config/baseUrl';
import { LoadingContext } from '../../context/loading';



export default function WeatherReq() {
    const { setResMode, setWeather, setLocation, setHourlyWeather } = useWeather();
    const { setLoading } = useContext(LoadingContext);

    const [city, setCity] = useState('');

    const fetchWeather = async () => {
        if (!city) {
            alert('Please enter a city name');
            return;
        }

        setLoading(true);
        console.log("Loading started"); // Debugging log

        const response = await fetch(`${baseURL}/api/weather?city=${city}`);
        try {
            const data = await response.json();

            setLocation(data.location);
            setWeather(data.current);
            setHourlyWeather(data.forecast.forecastday[0].hour);
            setResMode(1);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            if (response.status === 400) {
                setResMode(2);
            } else if (response.status === 500) {
                setResMode(3);
            }
        } finally {
            setLoading(false);
            console.log("Loading ended"); // Debugging log
        }
    };

    return (
        <section className={styles.container}>
            <img className={styles.logo} src={logo} alt="fintek" />
            <div className={styles.secContainer}>
                <div className={styles.welcomeInputContainer}>
                    <h1 className={styles.welcomeSentence}>
                        Use our weather app to see the weather around the world
                    </h1>
                    <div className={styles.containerLabelInput}>
                        <label className={styles.label} htmlFor="city">City name</label>
                        <div className={styles.inputContainer}>
                            <input
                                id='city'
                                className={styles.inputField}
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                            <button className={styles.button} onClick={fetchWeather}>
                                Check
                            </button>
                        </div>
                    </div>
                </div>
                <TimesTemp />
            </div>
        </section>
    );
}
