import React from 'react';
import { Button, TextField, CircularProgress } from '@material-ui/core';
import { ExploreOutlined, SearchOutlined } from '@material-ui/icons';

import { useStyles } from './styles';

interface SearchProps {
    error?: string;
    value: string;
    isFinding: boolean;
    isSubmitting: boolean;
    onChange: (search: string) => void;
    onSubmit: () => void;
    onFindButtonClick: (latitude: number, longitude: number) => void;
}

export const Search = (props: SearchProps) => {
    const classes = useStyles();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.target.value);
    };

    const handleFormSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        props.onSubmit();
    };

    const handleFindButtonClick = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude }  = position.coords;
            props.onFindButtonClick(latitude, longitude);
        }, () => {
            console.log('Необходимо разрешение');
        });
    };

    return (
        <form
            className={classes.root}
            onSubmit={handleFormSubmit}
        >
            <TextField
                error={Boolean(props.error)}
                helperText={props.error}
                fullWidth={true}
                size='small'
                label='Введите адрес'
                value={props.value}
                variant='outlined'
                onChange={handleInputChange}
            />
            <div className={classes.controls}>
                <div className={classes.controlsItem}>
                    <Button
                        variant='contained'
                        color='primary'
                        size='large'
                        disabled={!props.value}
                        title='Найти'
                        type='submit'
                        fullWidth={true}
                    >
                        { props.isSubmitting ? <CircularProgress size={24} color='secondary' /> : <SearchOutlined/> }
                    </Button>
                </div>
                <div className={classes.controlsItem}>
                    <Button
                        variant='contained'
                        color='secondary'
                        size='large'
                        title='Определить местоположение'
                        type='button'
                        onClick={handleFindButtonClick}
                        fullWidth={true}
                    >
                        { props.isFinding ? <CircularProgress size={24}/> : <ExploreOutlined/> }
                    </Button>
                </div>
            </div>
        </form>
    );
};
