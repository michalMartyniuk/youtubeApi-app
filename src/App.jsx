import React, { useState, useEffect, createContext } from 'react';
import { gapiConfig } from './gapi.config';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { orange, blue } from '@material-ui/core/colors';
import Header from './components/Header/Header';
import Content from './components/Content';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    secondary: orange,
    customOrange: {
      main: '#d27d18',
      hover: '#d29b5a'
    },
    customDarkBlue: {
      main: 'rgb(66, 71, 88)',
      hover: 'rgb(66, 71, 88)'
    }
  },
  status: {
    danger: 'orange',
  },
});

export const StateContext = createContext();

export default function App() {
  const [state, setState] = useState({
    video: {
      items: [],
      selected: null
    },
    playlist: {
      items: [],
      state: false
    }
  })

  console.log(state.video.items)
  useEffect(() => {
    window.gapi.load('client', gapiConfig)
  })

  return (
    <ThemeProvider theme={theme}>
      <StateContext.Provider value={[state, setState]}>
        <div className="App">
          <Header />
          <Content />
        </div>
      </StateContext.Provider>
    </ThemeProvider>
  );
}