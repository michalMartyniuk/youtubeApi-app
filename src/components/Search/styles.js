import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    button: {
        backgroundColor: ({ bg }) => bg,
    },
});