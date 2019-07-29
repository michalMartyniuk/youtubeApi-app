import React, { useState, useEffect } from 'react';
import { gapiConfig } from './gapi.config';
import Search from './components/Search/Search.jsx';
import VideoList from './components/Video/VideoList';
import Player from './components/Video/Player';
import Textfields from './components/Textfields/Textfields';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Navigation from './components/AppBar/AppBar';
import StyledComponent from './components/StyledComponent';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    another: "orange"
  },
  status: {
    danger: 'orange',
  },
});

function App() {
  const [videos, setVideos] = useState(null)
  const [selected_video, select_video] = useState(null)

  useEffect(() => {
    window.gapi.load('client', gapiConfig)   
  })

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <StyledComponent />
        {/* <Navigation />
        <Search setVideos={setVideos}/>
        <Player selected_video={selected_video}/>
        <VideoList videos={videos} select_video={select_video}/> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
