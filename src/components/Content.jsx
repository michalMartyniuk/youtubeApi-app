import React, { useContext } from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Video from './Video/Video';
import Playlist from './Playlist/Playlist';
import Player from './Player/Player';
import { StateContext } from '../App';

const styles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(12),
  },
  playerRoot: {
    marginTop: theme.spacing(12),
  },
  maxWidthLg: { maxWidth: "none" }
}))


export default function Content() {
  const [state, dispatch] = useContext(StateContext);
  const classes = styles();
  return (
    <div className={classes.playerRoot}>
      {state.ui.player_state && state.video.selected ? <Player /> : null}
      <Video />
    </div>
  )
}