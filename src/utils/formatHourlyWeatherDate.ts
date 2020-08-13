import { format } from 'date-fns';
import { parseWeatherDate } from './parseWeatherDate';

export const formatHourlyWeatherDate = (date: number) => {
    return format(parseWeatherDate(date), 'HH:mm');
};
