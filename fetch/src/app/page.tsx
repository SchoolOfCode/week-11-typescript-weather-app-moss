"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header/header"
import Footer from "./Footer/footer";
import SearchBar from "./Hero/Hero";
import WeatherCard from "./WeatherDisplay/weather_display";

export default function Home() {


   // Define the onSearch handler
   const onSearch = (city: string) => {
    // Add your search logic here
    console.log('Searching for city:', city);
    // You might want to update WeatherCard with the weather data
  };

  return (
    <div>
    <Header />
    <SearchBar onSearch={onSearch} />
    <WeatherCard />
    <Footer />
    </div>
  );
}
