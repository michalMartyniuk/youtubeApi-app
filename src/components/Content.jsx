import React from 'react';
import { Grid, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Video from './Video/Video';
import Menu from './Menu/Menu';
import Player from './Player/Player';

const styles = {
  container: makeStyles(theme => ({
    root: {
      marginTop: theme.spacing(12),
    },
    maxWidthLg: { maxWidth: "none" }
  }))
}

export default function Content({ videos, selectVideo, selectedVideo }) {
  return (
    <Container classes={styles.container()}>
      <Grid container>
        <Grid item xs={9}>
          <Player selectedVideo={selectedVideo} />
        </Grid>
        <Grid item xs={3}>
          <Menu videos={videos} />
        </Grid>
      </Grid>
      <Video videos={videos} selectVideo={selectVideo} />
    </Container >
  )
}