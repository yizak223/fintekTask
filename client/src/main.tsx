import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { WeatherProvider } from './context/Weather.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <WeatherProvider>
    <App />
  </WeatherProvider>
)
