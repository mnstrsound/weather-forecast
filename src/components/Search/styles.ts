import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    root: {
    },
    controls: {
        margin: '12px -6px 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    controlsItem: {
        margin: '0 6px',
        flexBasis: '50%',
    },
}));
