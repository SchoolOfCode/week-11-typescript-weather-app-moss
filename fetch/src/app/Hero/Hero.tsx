import React, { useState } from 'react';
import styles from './Hero.module.css';

interface SearchBarProps {
    onSearch: (city: string) => void;
}

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
