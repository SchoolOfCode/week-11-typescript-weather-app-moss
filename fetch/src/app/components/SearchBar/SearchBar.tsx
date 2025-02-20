"use client"

import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import { WeatherData } from '@/types';

//Create an interface for the search bar props
// The component should accept a single argument of type string (the city).
//The component does not return anything (void means it has no return value).
// create search bar component 
//set initial state as empty
// take in an input value of city 
//create event for when "fetch" button is clicked 

 //setiing up variables for the GET request
//  const testCity = "London"
//  const API_key = process.env.WEATHER_API_KEY;
//  const URLCelsuis = `https://api.openweathermap.org/data/2.5/weather?q=${testCity}&appid=${API_key}&units=metric`


interface SearchBarProps {
    onSearch: (data: WeatherData) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
        console.log("city", city)
    };
    console.log('API Key:', process.env.NEXT_PUBLIC_WEATHER_API_KEY);
    const handleSearch = async () => {
        if (!city.trim()) return;
        
        setLoading(true);
        setError("");
        
        try {
            const API_key = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
            const URLCelsius = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
            
            const response = await fetch(URLCelsius);
            console.log("response", response)
            if (!response.ok) {
                throw new Error('City not found');
            }
            
            const data: WeatherData = await response.json();
            onSearch(data);
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Failed to fetch weather data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                value={city}
                onChange={handleInputChange}
                placeholder="Enter city name"
                className={styles.input}
                disabled={loading}
            />
            <button 
                onClick={handleSearch} 
                className={styles.button}
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Fetch!'}
            </button>
            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};

export default SearchBar;