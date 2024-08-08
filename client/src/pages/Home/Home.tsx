import WeatherReq from '../../components/WeatherReq/WeatherReq'
import WeatherRes from '../../components/WeatherRes/WeatherRes'
import { LoadingProvider } from '../../context/loading'
import styles from './home.module.css'


export default function Home() {

    return (
        <section className={styles.container}>
            <WeatherReq />
            <LoadingProvider>
                <WeatherRes />
            </LoadingProvider>

        </section>
    )
}
