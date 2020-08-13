import React from 'react';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

import { WeatherResult } from '../../types';
import { formatHourlyWeatherDate, getWeatherIconUrl } from '../../utils';
import { useStyles } from './styles';

interface HourlyWeatherItemProps {
    result: WeatherResult;
    isActive: boolean;
    onClick: (result: WeatherResult) => void;
}

export const HourlyWeatherItem = (props: HourlyWeatherItemProps) => {
    const classes = useStyles();
    const handleClick = () => props.onClick(props.result);

    return (
        <div
            className={clsx(classes.root, props.isActive && classes.rootActive)}
            onClick={handleClick}
        >
            <Typography variant='body2'>
                {formatHourlyWeatherDate(props.result.dt)}
            </Typography>
            <span
                className={classes.icon}
                style={{
                    backgroundImage: `url(${getWeatherIconUrl(props.result.weather[0].icon)})`
                }}
            />
        </div>
    );
};
