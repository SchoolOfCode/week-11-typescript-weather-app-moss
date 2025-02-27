"use client"

import React from 'react';
import { WeatherData } from '@/types';
import styles from './weather_display.module.css';  // Import CSS module

interface WeatherCardProps {
    data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>{data.name}</h2>
            
            <div className={styles.cardContent}>
                <div className={styles.cardItem}>
                    <span className={styles.label}>Temperature:</span>
                    <span className={styles.value}>{data.main.temp}°C</span>
                </div>
                
                <div className={styles.cardItem}>
                    <span className={styles.label}>Feels like:</span>
                    <span className={styles.value}>{data.main.feels_like}°C</span>
                </div>
                
                <div className={styles.cardItem}>
                    <span className={styles.label}>Weather:</span>
                    <span className={`${styles.value} ${styles.capitalize}`}>
                        {data.weather[0].description}
                    </span>
                </div>
                
                <div className={styles.cardItem}>
                    <span className={styles.label}>Humidity:</span>
                    <span className={styles.value}>{data.main.humidity}%</span>
                </div>
                
                <div className={styles.cardItem}>
                    <span className={styles.label}>Pressure:</span>
                    <span className={styles.value}>{data.main.pressure} hPa</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;



// import React from 'react';
// import { WeatherData } from '@/types';
// import styles from "@"

// interface WeatherCardProps {
//     data: WeatherData;
// }

// const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
//     return (
//         <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
//             <h2 className="text-2xl font-bold mb-4">{data.name}</h2>
            
//             <div className="space-y-4">
//                 <div className="flex items-center justify-between">
//                     <span className="text-gray-600">Temperature:</span>
//                     <span className="font-semibold">{data.main.temp}°C</span>
//                 </div>
                
//                 <div className="flex items-center justify-between">
//                     <span className="text-gray-600">Feels like:</span>
//                     <span className="font-semibold">{data.main.feels_like}°C</span>
//                 </div>
                
//                 <div className="flex items-center justify-between">
//                     <span className="text-gray-600">Weather:</span>
//                     <span className="font-semibold capitalize">
//                         {data.weather[0].description}
//                     </span>
//                 </div>
                
//                 <div className="flex items-center justify-between">
//                     <span className="text-gray-600">Humidity:</span>
//                     <span className="font-semibold">{data.main.humidity}%</span>
//                 </div>
                
//                 <div className="flex items-center justify-between">
//                     <span className="text-gray-600">Pressure:</span>
//                     <span className="font-semibold">{data.main.pressure} hPa</span>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WeatherCard;




//     // // Gets correct weather icon from lucide-react icon library 
//     // const getWeatherIcon = (condition: string) => {
//     //     switch(condition.toLowerCase()) {
//     //         case 'cloudy':
//     //             return <Cloud className="weather-icon cloudy" />;
//     //         case 'sunny':
//     //             return <Sun className="weather-icon sunny" />;
//     //         default:
//     //             return <Sun className="weather-icon sunny" />;
//     //     }
//     // };