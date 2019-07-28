import React, { useState, useEffect } from 'react';
import { gapiConfig } from './gapi.config';
import Search from './components/Search';
import VideoList from './components/Video/VideoList';
import Player from './components/Video/Player';
import StyledComponent from './components/StyledComponent';

function App() {
  const [videos, setVideos] = useState(null)
  const [selected_video, select_video] = useState(null)

  useEffect(() => {
    window.gapi.load('client', gapiConfig)   
  })

  useEffect(()=> console.log(selected_video))

  return (
    <div className="App">
      <StyledComponent />
      <Search setVideos={setVideos}/>
      <Player selected_video={selected_video}/>
      <VideoList videos={videos} select_video={select_video}/>
    </div>
  );
}

export default App;
