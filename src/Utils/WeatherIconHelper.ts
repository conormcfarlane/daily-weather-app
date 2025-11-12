import iconFog from "../assets/images/icon-fog.webp"
import iconDrizzle from "../assets/images/icon-drizzle.webp";
import iconOvercast from "../assets/images/icon-overcast.webp";
import iconPartlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import iconRain from "../assets/images/icon-rain.webp";
import iconSnow from "../assets/images/icon-snow.webp";
import iconStorm from "../assets/images/icon-storm.webp";
import iconSunny from "../assets/images/icon-sunny.webp";

type WeatherIconType = {
    src:string;
    alt:string;
}

export const weatherIconMap : Record<number, WeatherIconType> = {
    0 : {src:iconSunny,alt:"Clear Sky"},
    1 : {src:iconPartlyCloudy, alt:"Mainly Clear"},
    2 : {src:iconPartlyCloudy, alt:"Partly Cloudy"},
    3 : {src:iconOvercast, alt:"Overcast"},
    45 : {src:iconFog, alt:"Fog"},
    48 : {src:iconFog, alt:"fog"},
    51 : {src:iconDrizzle, alt:"Light drizzle"},
    53 : {src:iconDrizzle, alt:"Moderate drizzle"},
    55 : {src:iconDrizzle, alt:"Dense drizzle"},
    56 : {src:iconDrizzle, alt:"Freezing light drizzle"},
    57 : {src:iconDrizzle, alt:"Freezing dense drizzle"},
    61 : {src:iconRain, alt:"Slight rain"},
    63 : {src:iconRain, alt:"Moderate rain"},
    65 : {src:iconRain, alt:"Heavy rain"},
    66 : {src:iconDrizzle, alt:"Freezing light rain"},
    67 : {src:iconDrizzle, alt:"Freezing heavy rain"},
    71 : {src:iconSnow, alt:"Slight snow"},
    73 : {src:iconSnow, alt:"Moderate snow"},
    75 : {src:iconSnow, alt:"Heavy snow"},
    77 : {src:iconSnow, alt:"Snow"},
    80 : {src:iconRain, alt:"Slight showers"},
    81 : {src:iconRain, alt:"Moderate showers"},
    82 : {src:iconRain, alt:"Violent showers"},
    85 : {src:iconSnow, alt:"Slight snow showers"},
    86 : {src:iconSnow, alt:"Heavy snow showers"},
    95 : {src:iconStorm, alt:"Thunderstorm"},
    96 : {src:iconStorm, alt:"Slight thunderstorm"},
    99 : {src:iconStorm, alt:"Heavy thunderstorm"},

}

export function getWeatherIcon(code:number) : WeatherIconType | undefined{
    return weatherIconMap[code];
}