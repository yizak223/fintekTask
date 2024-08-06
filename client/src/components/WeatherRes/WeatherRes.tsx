import styles from './WeatherRes.module.css';

export default function WeatherRes() {
  return (
    <section className={styles.container}>
        <h1 className={styles.firstH1}>No search result</h1>
        <h1 className={styles.secH1}>Please enter a city name</h1>
    </section>
    
  )
}
