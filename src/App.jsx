import React, { useState, useEffect } from 'react';
import { gapiConfig } from './gapi.config';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { orange, blue } from '@material-ui/core/colors';
import Video from './components/Video/Video';
import Header from './components/Header/Header';
import Player from './components/Player';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: orange
  },
  status: {
    danger: 'orange',
  },
});

function App() {
  const [videos, setVideos] = React.useState([]);
  const [selectedVideo, selectVideo] = React.useState(null);

  useEffect(() => {
    window.gapi.load('client', gapiConfig)
  })

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header setVideos={setVideos} />
        <Player selected_video={selectedVideo}/>
        <Video vidoes={videos} selectVideo={selectVideo}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
