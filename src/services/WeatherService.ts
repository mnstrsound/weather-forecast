import axios from 'axios';

export const WeatherService = {
    getWeather(lat: number | string, lon: number | string) {
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,daily&appid=e5cf54c45847ba3bf104ec1e526063e4&lang=ru&units=metric`);
    },
};
