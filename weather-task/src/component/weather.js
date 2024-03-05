import {useState} from "react";
import axios from "axios";

function Weather()
{
    const [city, setcity] = useState("")

    const [weather, setweather] = useState("")
    const [temp, settemp] = useState("")
    const [desc, setdesc] = useState("")

    function handleCity(evt){
        setcity(evt.target.value)
    }

    function getWeather(){
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9eabb1a5af9673c83f2890c970962a0e`);
        weatherData.then(function(success){
            console.log(success.data);
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)
        })
    }

    return(
        <div className="bg-black p-20">
            <div className="bg-green-400 p-10 rounded-md">
                <h1 className="text-2xl font-medium">Weather Report</h1>
                <p>I can give you a weather report about your city!</p>
                <div className="flex flex-col md:flex-row">
                    <input onChange={handleCity} type="text" className="mt-2 md:mr-2 border border-black rounded p-2"/>
                    <button onClick={getWeather} className="bg-black text-white p-2 rounded-md mt-2 md:mt-0">Get
                        Report
                    </button>
                </div>
                <div className="mt-2">
                    <h1><b>Weather: </b>{weather}</h1>
                    <p><b>Temperature: </b>{temp}</p>
                    <p><b>Description: </b>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Weather