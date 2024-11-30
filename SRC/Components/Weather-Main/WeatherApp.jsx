import React from "react";
import search_icon from "../Assets/search.png";
import "./WeatherApp.css";
//import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
//import drizzle_icon from "../Assets/drizzle.png";
//import snow_icon from "../Assets/snow.png";
import humidity_icon from "../Assets/humidity.png";
import wind_icon from "../Assets/wind.png";
const WeatherApp = () =>{  
        let api_key ="605172250aa10d8200efdb22a907a277";
        const search = async () => {
            const element = document.getElementsByClassName("cityInput")
            if(element[0].value===""){
                return 0;
            }
            let url =`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
            let response = await fetch(url);
            let data = await response.json();
            const humidity = document.getElementsByClassName("humidity-parcent")
            const wind = document.getElementsByClassName("wind-rate")
            const temprature = document.getElementsByClassName("weather-temp")
            const location = document.getElementsByClassName("weather-location")
            humidity[0].innerHTML = data.main.humidity+"%";
            wind[0].innerHTML = data.wind.speed+"km/h";
            temprature[0].innerHTML = data.main.temp+"C";
            location[0].innerHTML = data.name;
        }
    return(
        <div className="container">
            <div className="top-bar"> 
                <input type="text" className="cityInput" placeholder="search"/>
                <div className="search-icon" onClick={()=>{search()}}>
                    <img src={search_icon} alt=""/>
                </div>
            </div>
            <div className="weather-image">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="weather-temp">---</div>
            <div className="weather-location">---</div>
            <div className="data-container">
                <div className="element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-parcent">---</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className="element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">---</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default WeatherApp;   