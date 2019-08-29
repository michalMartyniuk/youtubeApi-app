import { makeStyles } from '@material-ui/styles';

export const styles = makeStyles(theme => ({
  card: {
    position: "absolute",
    top: 0,
    right: 0,
    borderRadius: 0,
    maxWidth: 600,
    minWidth: 450,
    color: theme.palette.common.white,
    backgroundColor: "#2f2f3a",
    display: 'flex',
  },
  title: {
    fontSize: "1.2rem",
  },
  subtitle: {
    fontSize: ".9rem"
  },
  content: {
    paddingLeft: 25,
    flex: '1',
  },
  controls: {
    display: 'flex',
    flex: "1",
    justifyContent: "flex-end",
    alignItems: 'center',
    paddingRight: 20
  },
  controlIcon: {
    color: theme.palette.common.white,
    height: 30,
    width: 30,
    padding: 5,
  },
  playlistToggle: {
    backgroundColor: theme.palette.primary.main
  }
}));