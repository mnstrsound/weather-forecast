import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: '20%',
    },
}));
