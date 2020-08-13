import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    icon: {
        width: '100px',
        height: '100px',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'inline-block',
        verticalAlign: 'middle',
    },
    title: {
        marginBottom: '8px',
    },
}));
