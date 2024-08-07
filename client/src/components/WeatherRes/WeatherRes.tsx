import { useWeather } from '../../context/Weather';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import styles from './WeatherRes.module.css';



export default function WeatherRes() {
  const { resMode } = useWeather();

  const renderContent = () => {
    switch (resMode) {
      case 0:
        return (
          <>
            <h1 className={styles.firstH1}>No search result</h1>
            <h1 className={styles.secH1}>Please enter a city name</h1>
          </>
        );
      case 1:
        return (
          <section className={styles.container}>
            <WeatherInfo />
          </section>
        );
      case 2:
        return (
          <h1 className={styles.firstH1}>Please enter a valid city</h1>
        );
      case 3:
        return (
          <h1 className={styles.firstH1}>Sorry, we can't find your city</h1>
        );
      default:
        return null;
    }
  }

  return (
    <section className={styles.container}>
      {renderContent()}
    </section>
  );
}

