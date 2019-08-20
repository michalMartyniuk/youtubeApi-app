import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    right: 0,
    top: 64,
    minWidth: 360,
    backgroundColor: "rgb(66, 71, 88)",
    color: theme.palette.common.white,
    paddingTop: 0,
    paddingBottom: 0
  },
  divider: {
    borderBottom: "1px solid rgba(255, 255, 255, 0.63)"
  },
  itemButton: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.28)'
    }
  },
  playlistFab: {
    width: 30,
    height: 30,
    minHeight: 30,
    marginLeft: "auto",
    boxShadow: "none"
  }
}));