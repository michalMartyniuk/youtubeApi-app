import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import YouTube from 'react-youtube';
import { video_get_player, video_next, video_select } from '../../store/actions';
import { StateContext } from '../../App';
import { actionTypes } from '../../store/actionTypes';

const styles = makeStyles(theme => ({
  player: {
    display: "flex",
    margin: "auto",
    width: 800,
    height: 500
  },
}))
export default function Player() {
  const [state, dispatch] = useContext(StateContext);
  const classes = styles();
  const opts = {
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  function onReady(event) {
    video_get_player(event.target, dispatch);
  }

  function stateChangeHandler({ data }) {
    console.log(state.video.player)
    switch (data) {
      case 1:
        if (state.video.actions.play !== true) {
          dispatch({ type: actionTypes.video.PLAY })
        }
        break
      case 2:
        if (state.video.actions.pause !== true) {
          dispatch({ type: actionTypes.video.PAUSE })
        }
        break
      case 0:
        if (state.video.replay) {
          console.log("replay")
          video_select(state.video.selected, dispatch)
        }
        video_next(state.video.selected, state.playlist.items, dispatch)
      default:
        return
    }
  }
  return (
    <YouTube
      className={classes.player}
      videoId={state.video.selected.id.videoId}
      opts={opts}
      onReady={onReady}
      onStateChange={(event) => stateChangeHandler(event)}
    />
  );
}