"use client"

import React, { useState } from 'react';
import Header from "./Header/header"
import Footer from "./Footer/footer";
import SearchBar from "./Hero/Hero";
import WeatherCard from "./WeatherDisplay/weather_display";
import { WeatherData } from '@/types';

const WeatherPage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleWeatherData = (data: WeatherData) => {
      setWeatherData(data);
  };

  return (
      <div >
          <Header />
          <SearchBar onSearch={handleWeatherData} />
          {weatherData && <WeatherCard data={weatherData} />}
          <Footer />
      </div>
  );
};

export default WeatherPage;
