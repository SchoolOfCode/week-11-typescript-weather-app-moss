"use client"

import React, { useState } from 'react';
import styles from './Hero.module.css';

//Create an interface for the search bar props
// The component should accept a single argument of type string (the city).
//The component does not return anything (void means it has no return value).
interface SearchBarProps {
    onSearch: (city: string) => void;
}

// create search bar component 
//set initial state as empty
// take in an input value of city 
//create event for when "fetch" button is clicked 

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };

    const handleSearch = () => {
        onSearch(city.trim());
    };

    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                value={city}
                onChange={handleInputChange}
                placeholder="Enter city name"
                className={styles.input}
            />
            <button onClick={handleSearch} className={styles.button}>
                Fetch!
            </button>
        </div>
    );
};

export default SearchBar;
