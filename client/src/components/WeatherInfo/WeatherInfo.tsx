import { useWeather } from '../../context/Weather';
import { formatDateTime } from '../../utils/formatDate';
import styles from './WeatherInfo.module.css'


export default function WeatherInfo() {
    const { weather, location, relevantHours } = useWeather();


    if (!location) {
        return null;
    }
    return (
        <section className={styles.container}>
            <div>
                <h1>{location?.name}</h1>
                <h2>{location?.country}</h2>
                <h2>{formatDateTime(location?.localtime)}</h2>
            </div>
            <div>
                <h1>{weather?.temp_c}°</h1>
                <h2>{weather?.condition.text}</h2>
            </div>
            <div>
                <div><p>precipitation{weather?.precip_mm}</p></div>
                <div><p>humidity{weather?.humidity}</p></div>
                <div><p>wind{weather?.wind_kph}</p></div>
            </div>
            <div>
                {relevantHours?.map((hour, index) => (
                    <div key={index}>
                        <p>{hour.time.slice(11, 13)} </p>
                        <p>{String(hour.temp_c).slice(0, 2)}°</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
