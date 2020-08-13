import React, {useEffect, useState} from 'react';
import {FormHelperText, LinearProgress} from '@material-ui/core';

import { SearchResult, WeatherResult, WeatherResultsResponse } from '../../types';
import { LocationService, WeatherService } from '../../services';
import {CurrentWeather, HourlyWeather, Search} from '../../components';
import {formatAddress, getRecommendation} from '../../utils';

import { useStyles } from './styles';


const REQUEST_ERROR = 'Произошла ошибка во время запроса';
const SEARCH_ERROR = 'По вашему запросу ничего не найдено';

export const MainPage = () => {
    const classes = useStyles();
    const [address, setAddress] = useState('');
    const [searchResult, setSearchResult] = useState<SearchResult>();
    const [searchError, setSearchError] = useState<string>();

    const [isFetching, setIsFetching] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isFinding, setIsFinding] = useState(false);

    const [weatherResults, setWeatherResults] = useState<WeatherResultsResponse>();
    const [currentWeather, setCurrentWeather] = useState<WeatherResult>();
    const [weatherError, setWeatherError] = useState<string>();

    const handleSearchInputChange = (search: string) => {
        if (searchError) {
            setSearchError(undefined);
        }
        setAddress(search);
    };

    const handleSearchFormSubmit = () => {
        if (isSubmitting || isFinding) return;

        setIsSubmitting(true);

        LocationService.getAddressBySearch(address).then(({ data }) => {
            setIsSubmitting(false);
            // Устанавливаем наиболее релевантный адрес адрес
            if (!data.length) {
                setSearchError(SEARCH_ERROR);
            } else {
                setSearchResult(data[0]);
            }
        }).catch(() => {
            setIsSubmitting(false);
            setSearchError(REQUEST_ERROR);
        });
    };

    const handleFindButtonClick = (latitude: number, longitude: number) => {
        if (isSubmitting || isFinding) return;

        setSearchError(undefined);
        setIsFinding(true);

        LocationService.getAddressByCoordinates(latitude, longitude).then(({ data }) => {
            // Возвращается единственный экземпляр
            setIsFinding(false);
            setSearchResult(data);
            setAddress(formatAddress(data));
        }).catch(() => {
            setIsFinding(false);
            setSearchError(REQUEST_ERROR);
        });

    };

    const handleHourlyWeatherItemClick = (result: WeatherResult) => {
        setCurrentWeather(result);
    };

    useEffect(() => {
        if (searchResult) {
            setIsFetching(true);
            setWeatherError(undefined);

            WeatherService.getWeather(searchResult.lat, searchResult.lon).then(({ data }) => {
                setIsFetching(false);
                setWeatherResults(data);
                setCurrentWeather(data.hourly[0]);
            }).catch(() => {
                setIsFetching(false);
                setWeatherError(REQUEST_ERROR);
            });
        }
    }, [searchResult]);

    return (
        <div className={classes.root}>
            <div className={classes.search}>
                <Search
                    error={searchError}
                    value={address}
                    isSubmitting={isSubmitting}
                    isFinding={isFinding}
                    onChange={handleSearchInputChange}
                    onSubmit={handleSearchFormSubmit}
                    onFindButtonClick={handleFindButtonClick}
                />
            </div>
            { isFetching && <LinearProgress className={classes.progress}/> }
            { weatherError && (
                <FormHelperText className={classes.additional}>
                    { weatherError }
                </FormHelperText>
            )}
            { searchResult && currentWeather && (
                <div className={classes.currentWeather}>
                    <CurrentWeather
                        address={formatAddress(searchResult)}
                        weather={currentWeather}
                    />
                </div>
            )}
            { weatherResults && (
                <FormHelperText
                    className={classes.additional}>
                    { getRecommendation(weatherResults.hourly) }
                </FormHelperText>
            )}
            { weatherResults && (
                <div className={classes.hourlyWeather}>
                    <HourlyWeather
                        currentDT={currentWeather?.dt}
                        results={weatherResults.hourly}
                        onItemClick={handleHourlyWeatherItemClick}
                    />
                </div>
            ) }
        </div>
    );
};
