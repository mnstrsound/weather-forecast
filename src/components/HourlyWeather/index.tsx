import React from 'react';

import { WeatherResult, WeatherResults } from '../../types';
import { HourlyWeatherItem } from '../HourlyWeatherItem';
import { isTodayWeather } from '../../utils';

import { useStyles } from './styles';

interface WeatherResultTableProps {
    currentDT?: number;
    results: WeatherResults;
    onItemClick: (result: WeatherResult) => void;
}

export const HourlyWeather = (props: WeatherResultTableProps) => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            {props.results.map((result) => isTodayWeather(result.dt) && (
                <div
                    key={result.dt}
                    className={classes.item}
                >
                    <HourlyWeatherItem
                        result={result}
                        isActive={props.currentDT === result.dt}
                        onClick={props.onItemClick}
                    />
                </div>
            ))}
        </div>
    );
};
