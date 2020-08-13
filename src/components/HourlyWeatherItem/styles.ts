import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    root: {
        cursor: 'pointer',
        padding: '4px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '4px',
        border: '1px solid transparent',
    },
    rootActive: {
        border: '1px solid #eee',
    },
    icon: {
        width: '30px',
        height: '30px',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        display: 'inline-block',
        verticalAlign: 'middle',
    },
}));
