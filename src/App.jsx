import React, { useEffect, useReducer, createContext } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header/Header';
import Content from './components/Content';
import { rootReducer } from './store/reducers/rootReducer';
import { theme } from './theme';
import { gapiConfig } from './gapi.config';
import { searchYT } from './store/actions';
import { scrollEvent } from './scrollFunction';
import Snackbar from './components/Notification/Notification';
import Playlist from './components/Playlist/Playlist';

export const StateContext = createContext();

export default function App() {
  const initialState = {
    ui: {
      player_state: true,
      snackbar_state: true,
      playlist_state: true,
      dialog_state: true
    },
    video: {
      searchValue: "",
      nextPage: false,
      items: [],
      nextPageToken: null,
      selected: null,
      player: null,
      actions: {
        pause: false,
        play: false,
        previous: false,
        next: false
      }
    },
    playlist: {
      items: [],
    }
  }
  const [state, dispatch] = useReducer(rootReducer, initialState)

  useEffect(() => {
    const { nextPageToken } = state.video
    scrollEvent(nextPageToken, dispatch)
    const ytConfig = () => gapiConfig(() => {
      searchYT("moby", dispatch)
    })
    window.gapi.load('client', ytConfig)
  }, [window.gapi.load])

  return (
    <ThemeProvider theme={theme}>
      <StateContext.Provider value={[state, dispatch]}>
        <div className="App">
          <Header />
          <Content />
          <Snackbar
            isOpen={state.ui.snackbar_state}
            message="Siema co tam ?"
          />
          {state.ui.playlist_state ? <Playlist /> : null }
        </div>
      </StateContext.Provider>
    </ThemeProvider>
  );
}

