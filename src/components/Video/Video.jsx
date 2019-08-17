import React, { useContext } from 'react';
import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { StateContext } from '../App';

const styles = {
  grid: makeStyles(theme => ({
    root: {
      paddingTop: theme.spacing(12)
    }
  }))
}

export default function Video() {
  const [state, setState] = useContext(StateContext);
  return (
    <Grid container spacing={3} classes={styles.grid()}>
      {state.video.items
        ? state.video.items.map(video =>
          <Grid item>
            <VideoItem
              key={video.etag}
              video={video}
            />
          </Grid>)
        : null
      }
    </Grid>
  )
}