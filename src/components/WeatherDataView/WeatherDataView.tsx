import React, { useState } from 'react';
import { WeatherData } from '../../models/WeatherData';
import styles from './WeatherDataView.module.css';

interface WeatherDataViewProps {
    data: WeatherData | null;
}

const WeatherDataView = ({ data } : WeatherDataViewProps) => {
    if (!data) {
        return <p>Loading...</p>;
      }
    
      return (
        <div>
          <h2>Weather Details</h2>
          <p>Temperature: {data.Temperature.Imperial.Value}°C</p>
          <p>Weather: {data.WeatherText}</p>
          <p>Raining: {data.PrecipitationType}</p>
        </div>
      );
};

export default WeatherDataView;
