import React, { useContext } from 'react';
import VideoItem from './VideoItem';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { StateContext } from '../../App';
import { NavigateNext, NavigateBefore } from '@material-ui/icons';

const styles = makeStyles(theme => ({
  container: {

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
    paddingTop: theme.spacing(12),
    justifyContent: "center"
  }
}))

export default function Video() {
  const [state, dispatch] = useContext(StateContext);
  const classes = styles()
  return (
    <div className={classes.container}>
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