import React from 'react';
import { Cloud, Sun, Wind, Droplets } from 'lucide-react';
import styles from "./weather_display.module.css"

interface WeatherData {
    location: string,
    temperature: number,
    condition: string,
    high: number,
    low: number,
    windSpeed: any,
    rain: boolean
}

export default function WeatherCard () {
    
    // Mock data - replace with your actual data
    const weatherData: WeatherData = {
        location: "London",
        temperature: 22,
        condition: "Cloudy",
        high: 24,
        low: 18,
        windSpeed: 12,
        rain: false
    };

    // Gets correct weather icon from lucide-react icon library 
    const getWeatherIcon = (condition: string) => {
        switch(condition.toLowerCase()) {
            case 'cloudy':
                return <Cloud className="weather-icon cloudy" />;
            case 'sunny':
                return <Sun className="weather-icon sunny" />;
            default:
                return <Sun className="weather-icon sunny" />;
        }
    };

    return (
        <div className={styles["weather-card"]}>
            <div className={styles["weather-header"]}>
                <h2 className={styles.location}>{weatherData.location}</h2>
                {getWeatherIcon(weatherData.condition)}
            </div>
            {/* temperature container */}
            <div className={styles["temperature-container"]}>
                <div className={styles["current-temperature"]}>
                    {weatherData.temperature}°C
                </div>
                <div className={styles.condition}>
                    {weatherData.condition}
                </div>
            </div>
            {/* weather details container */}
            <div className={styles["weather-details"]}>
                <div className={styles["detail-item"]}>
                    <Droplets className={styles["detail-info"]} />
                    <div className={styles["detail-info"]}>
                        <div className={styles["detail-label"]}>Wind</div>
                        <div className={styles["detail-value"]}>{weatherData.windSpeed} km/h</div>
                    </div>
                </div>
    
                {weatherData.rain && (
                    <div className={styles["detail-item"]}>
                        <Droplets className={`${styles["detail-icon"]} ${styles.rain}`} />
                        <div className={styles["detail-info"]}>
                            <div className={styles["detail-label"]}>Rain</div>
                            <div className={styles["detail-value"]}>Expected</div>
                        </div>
                    </div>
                )}
            </div>
    
            <div className={styles["temperature-range"]}>
                <div className={styles["range-item"]}>
                    <span className={styles["range-label"]}>High: </span>
                    <span className={styles["range-value"]}>{weatherData.high}°C</span>
                </div>
                <div className={styles["range-item"]}>
                    <span className={styles["range-label"]}>Low: </span>
                    <span className={styles["range-value"]}>{weatherData.low}°C</span>
                </div>
            </div>
        </div>
    );
}