import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import YouTube from 'react-youtube';
import { video_get_player, video_play, video_pause } from '../../store/actions';
import { StateContext } from '../../App';

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
  const { actions, player } = state.video
  const action = Object.keys(actions).filter(action => actions[action] === true)[0]
  if (player) {
    switch (action) {
      case "play":
        player.playVideo()
        break;
      case "pause":
        player.pauseVideo()
    }
  }
  function stateChangeHandler({ data }) {
    switch (data) {
      case 1:
        if (state.video.actions.play !== true) {
          video_play(dispatch)
        }
        break
      case 2:
        if (state.video.actions.pause !== true) {
          video_pause(dispatch)
        }
        break
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