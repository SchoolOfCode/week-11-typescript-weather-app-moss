"use client";

import React, { useState } from 'react';
import SearchBar from "@/app/components/SearchBar/SearchBar";
import WeatherCard from "../WeatherDisplay/weather_display";
import { WeatherData } from '@/types';




export function Hero() {

    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const handleWeatherData = (data: WeatherData) => {
        setWeatherData(data);
    };

    return(
        <div >
            <SearchBar onSearch={handleWeatherData} />
            {weatherData && <WeatherCard data={weatherData} />}
        </div>

    )
}



export default Hero;