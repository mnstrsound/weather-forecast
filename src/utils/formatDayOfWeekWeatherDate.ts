import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { parseWeatherDate } from './parseWeatherDate';

export const formatDayOfWeekWeatherDate = (date: number) => {
    return format(parseWeatherDate(date), 'EEEE', { locale: ru });
};
