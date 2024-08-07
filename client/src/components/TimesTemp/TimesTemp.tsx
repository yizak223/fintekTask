import { useWeather } from '../../context/Weather';
import { formatDateTime } from '../../utils/formatDate';
import styles from './TimesTemp.module.css';



export default function TimesTemp() {
    
    const { location } = useWeather();

    if (!location) {
        return null;
    }
    return (
        <div className={styles.container}>
            <p>latitude {location.lat} <span>longitude {location.lon}</span></p>
            <p>accurate to {formatDateTime(location.localtime)}</p>
        </div>
    )
}

