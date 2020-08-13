import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    root: {
        margin: '20px auto',
        maxWidth: '350px',
        padding: '12px',
        boxShadow: '0 2px 4px rgba(0,0,0,.1)',
        borderRadius: '4px',
        background: '#fff',
    },
    search: {
    },
    progress: {
        marginTop: '16px',
    },
    additional: {
        marginTop: '16px',
    },
    currentWeather: {
        marginTop: '16px',
    },
    hourlyWeather: {
        marginTop: '16px',
    }
}));
