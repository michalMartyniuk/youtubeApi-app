import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import YouTube from 'react-youtube';

export default function Player() {
  const opts = {
    height: '500',
    width: '800',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  };
  function onReady(event) {
    console.log(event)
    event.target.stopVideo();
  }
  return (
    <YouTube
      videoId="2g811Eo7K8U"
      opts={opts}
      onReady={onReady}
    />
  );
}