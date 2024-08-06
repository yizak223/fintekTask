import logo from '../../assets/logo.svg'
import TimesTemp from '../TimesTemp/TimesTemp'
import styles from './wehatherReq.module.css'

export default function WeatherReq() {
    return (
        <section className={styles.container}>
            <img className={styles.logo} src={logo} alt="fintek" />
            <div className={styles.secContainer}>
                <div className={styles.welcomeInputContainer}>
                    <h1 className={styles.welcomeSentence}>Use our weather app to see the weather around the world</h1>
                    <div className={styles.containerLabelInput}>
                        <label className={styles.label} htmlFor="city">City name</label>
                        <div className={styles.inputContainer}>
                            <input className={styles.inputField} type="text" />
                            <button className={styles.button}>Check</button>
                        </div>
                    </div>
                </div>
                <TimesTemp />
            </div>
        </section>
    )
}
