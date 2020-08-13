import { WeatherResults } from '../types';
import { isTodayWeather } from './isTodayWeather';

const SUMMER_MIN_TEMPERATURE = 15;
const SUMMER_MAX_TEMPERATURE = 25;
const RAIN_ATTRIBUTES = ['Thunderstorm', 'Rain', 'Drizzle'];

const COLD_RECOMMENDATION = 'На улице холодно 🥶. Оденьтесь теплее. ';
const HOT_RECOMMENDATION = 'На улице очень жарко 🥵. Возьмите с собой прохладительные напитки 🥤. ';
const RAIN_RECOMMENDATION = 'На улице дождь 🌧. Не забудьте взять зонт ☂️! ';
const DEFAULT_RECOMMENDATION = 'На улице отличная погода 🌞! Возьмите с собой хорошее настроение 🥳!';

const isColdToday = (items: WeatherResults) => {
    return items.some((item) => item.feels_like < SUMMER_MIN_TEMPERATURE);
};

const isHotToday = (items: WeatherResults) => {
    return items.some((item) => item.feels_like > SUMMER_MAX_TEMPERATURE);
};

const isRainToday = (items: WeatherResults) => {
    return items.some((item) => RAIN_ATTRIBUTES.includes(item.weather[0].main));
};

const getAttributes = (result: WeatherResults) => {
    const todayWeather = result.filter((item) => isTodayWeather(item.dt));
    const isCold = isColdToday(todayWeather);
    const isHot = isHotToday(todayWeather);
    const isRain = isRainToday(todayWeather);

    return {
        isCold,
        isHot,
        isRain,
    };
};

export const getRecommendation = (result: WeatherResults) => {
    const attributes = getAttributes(result);
    let recommendation = '';

    attributes.isCold && (recommendation += COLD_RECOMMENDATION);
    attributes.isHot && (recommendation += HOT_RECOMMENDATION);
    attributes.isRain && (recommendation += RAIN_RECOMMENDATION);

    return recommendation ? recommendation : DEFAULT_RECOMMENDATION;
};

