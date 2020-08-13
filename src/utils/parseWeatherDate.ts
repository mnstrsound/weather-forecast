import { parse } from 'date-fns';

export const parseWeatherDate = (date: number) => {
    return parse(date.toString(), 't', new Date());
};
