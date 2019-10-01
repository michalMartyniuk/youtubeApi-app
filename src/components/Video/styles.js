import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250,
  },
  media: {
    height: 24,
    width: 250,
    paddingTop: '56.25%', // 16:9
    cursor: "pointer"
  },
  cardActions: {
    backgroundColor: theme.palette.customDarkBlue.main,
    '&:hover': {
      backgroundColor: theme.palette.customDarkBlue.hover
    },
    padding: 0,
  },
  actionIcon: {
    fontSize: "1.5rem",
    borderRadius: 0,
    margin: 0,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: "#d27d18"
    }
  },
  imageOverlay: {
    backgroundColor: "black",
  }
}));


export const styles = {
  moreIcon: makeStyles(theme => ({
    root: {
      padding: theme.spacing(1),
      margin: 0,
    }

  })),

  header: makeStyles(theme => ({
    root: {
      boxSizing: "border- box",
      width: "auto",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      padding: 16,
    },
    title: {
      ...theme.typography.h5,
    },
  }))
}