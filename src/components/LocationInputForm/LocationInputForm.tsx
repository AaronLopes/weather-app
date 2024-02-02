import React, { useState } from 'react';
import styles from './LocationInputForm.module.css';

interface LocationInputFormProps {
  onLocationSubmit: (locationKey: string) => void;
}

const LocationInputForm = ({ onLocationSubmit } : LocationInputFormProps) => {
    const [location, setLocation] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!location) return;

        // Call the AccuWeather API to get the location key
        const locationKey = await fetchLocationKey(location);
        onLocationSubmit(locationKey);
    };

    const fetchLocationKey = async (query: string): Promise<string> => {
        const apiKey = process.env.REACT_APP_WEATHER_KEY;
        const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${query}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data[0].Key; // Assuming the first result is the desired one
        } catch (error) {
            console.error("Error fetching location key:", error);
            return '';
        }
    };

    return (
        <div className={styles.formContainer}>
            <h3 className={styles.title}>Location</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className={styles.input}
                    placeholder="Enter Location"
                />
                <button type="submit" className={styles.button}>Search</button>
            </form>
        </div>
    );
};

export default LocationInputForm;
