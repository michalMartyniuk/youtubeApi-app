import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, IconButton, Typography, Button } from '@material-ui/core';
import { SkipPrevious, SkipNext, PlayArrow, Pause } from '@material-ui/icons';
import { StateContext } from '../../App';
import { video_pause, video_play, set_playlist_state } from '../../store/actions';

const styles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.customDarkBlue.main,
    height: "100%",
    color: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "-22px",
    paddingRight: "10px",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
  },
  controls: {
    display: "flex",
    height: "100%",
  },
  iconButton: {
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.customOrange.hover,
    },
    borderRadius: 0,
    padding: theme.spacing(1)
  },
  playlistButton: {
    backgroundColor: props => props.playlist ? "green" : "inherit",
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.customOrange.hover,
    },
    borderRadius: 0,
    padding: theme.spacing(1)
  }
}));

export default function AppBarPlayer(props) {
  const [state, dispatch] = useContext(StateContext);
  const classes = styles({ playlist: state.ui.playlist_state });
  const PlayIcon = () => {
    if (state.video.actions.play) {
      return (
        <IconButton
          className={classes.iconButton}
          onClick={() => video_pause(dispatch)}
        > <Pause /> </IconButton>
      )
    } else { return null }
  }
  const PauseIcon = () => {
    if (state.video.actions.pause) {
      return (
        <IconButton
          className={classes.iconButton}
          onClick={() => video_play(dispatch)}
        > <PlayArrow /> </IconButton>
      )
    } else { return null }
  }
  return (
    <Card className={classes.card}>
      <CardContent className={classes.title}>
        <Typography variant="subtitle1">
          {state.video.selected.snippet.title}
        </Typography>
      </CardContent>
      <div className={classes.controls}>
        <IconButton className={classes.iconButton}>
          <SkipPrevious />
        </IconButton>
        <PlayIcon />
        <PauseIcon />
        <IconButton className={classes.iconButton}>
          <SkipNext />
        </IconButton>
        <Button
          className={classes.playlistButton}
          onClick={() => set_playlist_state(!state.ui.playlist_state, dispatch)}
        >
          Playlist
        </Button>
      </div>
    </Card>
  );
}
