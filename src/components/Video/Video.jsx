import React from 'react';
import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const styles = {
  grid: makeStyles(theme => ({
    root: {
      paddingTop: theme.spacing(12)
    }
  }))
}

export default function Video({ videos, selectVideo }) {
  return (
    <Grid container spacing={3} classes={styles.grid()}>
      {videos
        ? videos.map(video =>
          <Grid item>
            <VideoItem
              key={video.etag}
              video={video}
              videoId={video.id.videoId}
              snippet={video.snippet}
              selectVideo={() => selectVideo(video.id.videoId)}
            />
          </Grid>)
        : null
      }
    </Grid>
  )
}