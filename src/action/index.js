import axios from 'axios';

const API_KEY='b2b3dc05eb3055dd3d32ca28886b02ae';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER='FETCH_WEATHER';
export function fetchWeather(city){
    const url=`${ROOT_URL}&q=${city},in`
    let req=axios.get(url);
    console.log(req);
    return {
        type:FETCH_WEATHER,
        payload:req
    }
}