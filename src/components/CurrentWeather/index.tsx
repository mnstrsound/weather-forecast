import React from 'react';
import { Typography } from '@material-ui/core';

import { WeatherResult } from '../../types';
import {formatDayOfWeekWeatherDate, formatHourlyWeatherDate, getWeatherIconUrl} from '../../utils';
import { useStyles } from './styles';

interface CurrentWeatherProps {
    address: string;
    weather: WeatherResult;
}

export const CurrentWeather = (props: CurrentWeatherProps) => {
    const classes = useStyles();
    
    return (
        <div>
            <Typography variant='h4' className={classes.title}>
                {props.address}
            </Typography>
            <Typography
                variant='body1'
                color='textSecondary'
            >
                {formatDayOfWeekWeatherDate(props.weather.dt)}&nbsp;{formatHourlyWeatherDate(props.weather.dt)}
            </Typography>
            <Typography
                variant='body1'
                color='textSecondary'
            >
                {props.weather.weather[0].description}
            </Typography>
            <Typography variant='h2'>
                <span
                    className={classes.icon}
                    style={{
                        backgroundImage: `url(${getWeatherIconUrl(props.weather.weather[0].icon)})`
                    }}
                />
                {Math.round(props.weather.temp)}&nbsp;℃
            </Typography>
            <Typography
                variant='body2'
                color='textSecondary'
            >
                Влажность&nbsp;{props.weather.humidity}&nbsp;%
            </Typography>
            <Typography
                variant='body2'
                color='textSecondary'
            >
                Скорость ветра&nbsp;{props.weather.wind_speed}&nbsp;м/с
            </Typography>
            <Typography
                variant='body2'
                color='textSecondary'
            >
                Давление&nbsp;{props.weather.pressure}&nbsp;мм. рт. ст.
            </Typography>
        </div>
    );
};
