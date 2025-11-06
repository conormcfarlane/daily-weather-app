import { useState,useEffect } from "react";

export function useWeatherApi() {
    const [data,setData] = useState("");
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    useEffect(() => {
        let search = "Madrid"
        const fetchGeoLocationData = async () => {
            try{
                const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${search}&count=1&language=en&format=json`);
                
                if(!geoResponse.ok){
                    throw new Error(`HTTP error! status: ${geoResponse.status}`);
                }
                const geoResult = await  geoResponse.json();
                console.log('georesult - ' , geoResult)
                const {latitude,longitude} = geoResult.results[0];
                fetchWeatherData(latitude,longitude);

            }catch(error){            
            setError(error)
        }finally{
            setLoading(false)
        }
        }
        fetchGeoLocationData();

        const fetchWeatherData = async (latitude,longitude) => {
            try{
                const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
                if(!weatherResponse.ok){
                    throw new Error(`HTTP error! status: ${weatherResponse.status}`)
                }
                const weatherResult = await weatherResponse.json();
                console.log('The weather ', weatherResult);
            }catch{
                setError(error);
            }finally{
                setLoading(false);
            }
        }
    },[])


}