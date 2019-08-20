import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    cursor: "pointer"
  },
  cardActions: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.customDarkBlue.main,
    '&:hover': {
      backgroundColor: theme.palette.customDarkBlue.hover
    }
  },
  actionIcon: {
    color: theme.palette.common.white
  }
}));

export const styles = {
  moreIcon: makeStyles(theme => ({
    root: {
      padding: theme.spacing(1),
    }
  })),

  header: makeStyles(theme => ({
    root: { paddingBottom: 0 },
    title: { ...theme.typography.subtitle2, fontSize: '1rem' },
  }))
}