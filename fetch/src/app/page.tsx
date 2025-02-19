import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header/header.tsx"

import WeatherCard from "./WeatherDisplay/weather_display";

export default function Home() {
  return (
    <div>
    <Header />
      <WeatherCard />
    </div>
  );
}
