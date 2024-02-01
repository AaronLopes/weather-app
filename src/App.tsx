import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { WeatherData } from './models/WeatherData';
import LocationInputForm from './components/LocationInputForm/LocationInputForm';
import WeatherDataView from './components/WeatherDataView/WeatherDataView';

function App() {

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const fetchWeatherData = async (locationKey: string) => {
    const apiKey = process.env.REACT_APP_WEATHER_KEY;
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data[0]); // Assuming you want the first result
    } catch (error) {
      console.error("Error fetching weather data:", error);
      // Handle errors appropriately
    }
  };

  const handleLocationSubmit = (locationKey: string) => {
    // Handle the submitted location key here
    // For example, fetch weather data based on the location key
    fetchWeatherData(locationKey);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2 className='weatherAppTitle'>
          Sepol Weather App
        </h2>
        <LocationInputForm onLocationSubmit={handleLocationSubmit} />
        <WeatherDataView data={weatherData} />
      </header>
    </div>
  );
}

export default App;
