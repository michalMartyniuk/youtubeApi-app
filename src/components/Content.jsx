import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Video from './Video/Video';
import Player from './Player/Player';
import { StateContext } from '../App';
import { set_homepage_state } from '../store/actions';

const styles = makeStyles(theme => ({
  contentContainer: {
    marginTop: theme.spacing(12),
  },
  maxWidthLg: { maxWidth: "none" }
}))

export default function Content() {
  const [state, dispatch] = useContext(StateContext);
  const classes = styles();
  return (
    <div className={classes.contentContainer}>
      {state.ui.player_state && state.video.selected ? <Player /> : null}
      <Video />
    </div>
  )
}