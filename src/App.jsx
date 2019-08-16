import React, { useState, useEffect } from 'react';
import { gapiConfig } from './gapi.config';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { orange, blue } from '@material-ui/core/colors';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import Player from './components/Player/Player';
import Content from './components/Content';
import NestedList from './components/List';

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

  console.log(videos)
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header setVideos={setVideos} />
        <Content
          videos={videos}
          selectVideo={selectVideo}
          selectedVideo={selectedVideo}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
