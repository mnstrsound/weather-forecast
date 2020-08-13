import { isToday } from 'date-fns';
import { parseWeatherDate } from './parseWeatherDate';

export const isTodayWeather = (date: number) => {
    return isToday(parseWeatherDate(date));
};
