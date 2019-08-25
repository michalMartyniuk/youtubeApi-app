import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles(theme => ({
  playlistButton: {
    backgroundColor: theme.palette.customOrange.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.customOrange.hover,
    }
  }
}))
