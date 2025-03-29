import React, { useState, useEffect } from "react";

const Display = ({ searchTerm }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const apiKey = import.meta.env.VITE_API_KEY;
  
    useEffect(() => {
      const fetchWeatherData = async () => {
        if (!searchTerm) return;
  
        setLoading(true);
        setError(null);
  
        try {
          
  
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?zip=${searchTerm},us&appid=${apiKey}&units=metric`
          );
  
          console.log("Response:", res);
  
          if (!res.ok) {
            throw new Error(`Error ${res.status}: ${res.statusText}`);
          }
  
          const data = await res.json();
          setWeatherData(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchWeatherData();
    }, [searchTerm]);
  
    return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-900">Error: {error}</p>}
        {weatherData && (
          <div>
            <h2>Weather in {weatherData.name}</h2>
            {weatherData.main.temp  >=30 ?(<p className="text-red-500">Temperature: {weatherData.main.temp}°C</p>):(<p className="text-green-900">Temperature: {weatherData.main.temp}°C</p>) }
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Condition: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    );
  };

export default Display;
