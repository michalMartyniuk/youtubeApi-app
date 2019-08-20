import React, { useEffect, useReducer, createContext } from 'react';
import { gapiConfig } from './gapi.config';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header/Header';
import Content from './components/Content';
import { rootReducer } from './components/store/reducers/rootReducer';
import { theme } from './theme';

export const StateContext = createContext();

export default function App() {
  const initialState = {
    global: {
      snackbar: true
    },
    video: {
      items: [],
      selected: null,
    },
    playlist: {
      msg: "Example msg",
      items: [],
      toggleState: true,
    }
  }
  const [state, dispatch] = useReducer(rootReducer, initialState)

  useEffect(() => {
    window.gapi.load('client', gapiConfig)
  })

  return (
    <ThemeProvider theme={theme}>
      <StateContext.Provider value={[state, dispatch]}>
        <div className="App">
          <Header />
          <Content />
        </div>
      </StateContext.Provider>
    </ThemeProvider>
  );
}