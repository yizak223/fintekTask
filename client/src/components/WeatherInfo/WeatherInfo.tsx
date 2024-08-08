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
            <div className={styles.containerTimeZone}>
                <p className={styles.city}>{location?.name}</p>
                <p className={styles.countryTime}>{location?.country}</p>
                <p className={styles.countryTime}>{formatDateTime(location?.localtime)}</p>
            </div>
            <div className={styles.containerMainTemp}>
                <span className={styles.mainTemp}>{String(weather?.temp_c).slice(0, 2)}°</span>
                <span className={styles.conditionText}>{weather?.condition.text}</span>
            </div>
            <div className={styles.containerDetails}>
                <div className={styles.itemDetails}>
                    <p className={styles.titleItem}>precipitation</p>
                    <p className={styles.detailItem}>{weather?.precip_mm} mm</p>
                </div>
                <div className={styles.itemDetails}>
                    <p className={styles.titleItem}>humidity</p>
                    <p className={styles.detailItem}>{weather?.humidity}%</p>
                </div>
                <div className={styles.itemDetails}>
                    <p className={styles.titleItem}>wind</p>
                    <p className={styles.detailItem}>{String(weather?.wind_kph).slice(0, 2)} km/h</p>
                </div>
            </div>
            <div className={styles.hourly}>
                {relevantHours?.map((hour, index) => (
                    <div className={styles.itemDetails} key={index}>
                        <p className={styles.titleItem}>{hour.time.slice(11, 16)} </p>
                        <p className={styles.detailItem}>{String(hour.temp_c).slice(0, 2)}°</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
