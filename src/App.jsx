import React, { useEffect, useReducer, createContext } from 'react';
import { gapiConfig } from './gapi.config';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header/Header';
import Content from './components/Content';
import Notification from './components/Notification';
import { rootReducer } from './components/store/reducers/rootReducer';
import { theme } from './theme';
import TopPlayer from './components/Player/TopPlayer';

export const StateContext = createContext();

export default function App() {
  const initialState = {
    ui: {
      notification: {
        isActive: false,
        variant: "success | info | warning | error",
        message: "message"
      },
      playlist_state: true,
    },
    video: {
      items: [],
      selected: null,
    },
    playlist: {
      items: [],
    }
  }
  const [state, dispatch] = useReducer(rootReducer, initialState)

  useEffect(() => {
    window.gapi.load('client', gapiConfig)
  }, [window.gapi.load])

  return (
    <ThemeProvider theme={theme}>
      <StateContext.Provider value={[state, dispatch]}>
        <div className="App">
          <TopPlayer />
          {/* <Header />
          <Content />
          <Notification
            active={state.ui.notification.isActive}
            variant={state.ui.notification.variant}
            message={state.ui.notification.message}
          /> */}
        </div>
      </StateContext.Provider>
    </ThemeProvider>
  );
}