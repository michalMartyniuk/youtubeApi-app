import React, { useContext } from 'react';
import VideoItem from './VideoItem';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { StateContext } from '../../App';

const styles = makeStyles(theme => ({
  container: {
    margin: "0 85px",
    marginTop: theme.spacing(12)
  },
  resultsHeading: {
  },
  navigation: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3rem",
    marginBottom: "3rem"
  },
  arrow: {
    fontSize: "4rem"
  }
}))
const gridStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
  }
}))

export default function Video() {
  const [state, dispatch] = useContext(StateContext);
  const classes = styles()
  return (
    <div className={classes.container}>
      {/* <Typography
        variant="h2"
        className={classes.resultsHeading}
      >
        {state.video.searchName ? `Search results for "${state.video.searchName}"` : null}
      </Typography> */}
      <Grid container spacing={3} classes={gridStyles()}>
        {state.video.items
          ? state.video.items.map(video =>
            <Grid item key={video.etag}>
              <VideoItem
                video={video}
              />
            </Grid>)
          : null
        }
      </Grid>
    </div>
  )
}