import { useWeather } from '../../context/Weather';
import { useContext } from 'react';
import { LoadingContext } from '../../context/loading';
import WeatherInfo from '../WeatherInfo/WeatherInfo';
import styles from './WeatherRes.module.css';

export default function WeatherRes() {
  const { resMode } = useWeather();
  const { loading } = useContext(LoadingContext);



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
            {loading ? (
              <div className={styles.loader}></div>
            ) : (
              <WeatherInfo />
            )}
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
  };

  return (
    <section className={styles.container}>
      {renderContent()}
    </section>
  );
}
