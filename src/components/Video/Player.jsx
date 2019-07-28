import React from 'react';
import YouTube from 'react-youtube';

export default function Player ({selected_video}) {
    console.log(selected_video)
    const opts = {
      height: '500',
      width: '70%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    const player = selected_video 
        ? <YouTube
            videoId={selected_video}
            opts={opts}
            onReady={onReady} /> 
        : null

    return player
}
 
function onReady (event) {
    // access to player in all event handlers via event.target
    console.log(event.target)
    // event.target.pauseVideo();
}
  