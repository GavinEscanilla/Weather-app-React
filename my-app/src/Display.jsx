const apiKey = import.meta.env.VITE_API_KEY;
import { useEffect } from "react";
const Display = ({searchTerm}) => {
    useEffect(() => {
        const fetchWeatherData = async () => {
        try{
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?zip=${earchTerm},us&appid=${apikey}`
            );
            if(!res.ok){
                throw new Error("Network response was not ok");
            }
            const data = await res.json();
            console.log(data);
        }catch(error){
            console.error(error);
        }
    };
    fetchWeatherData();
}, []);
    
    return (
        <div>
            


        </div>
    );
};

export default Display;