import React, { useContext } from 'react';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Video from './Video/Video';
import Playlist from './Playlist/Playlist';
import Player from './Player/Player';
import { StateContext } from '../App';

const styles = {
  container: makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(12),
    },
    maxWidthLg: { maxWidth: "none" }
  }))
}

export default function Content() {
  const [state, dispatch] = useContext(StateContext);
  return (
    <Container classes={styles.container()}>
      <Grid container>
        <Grid item xs={9}>
          {state.ui.player_state ? <Player /> : null}
        </Grid>
        <Grid item xs={3}>
          {state.ui.playlist_state ? <Playlist /> : null}
        </Grid>
      </Grid>
      <Video />
    </Container >
  )
}