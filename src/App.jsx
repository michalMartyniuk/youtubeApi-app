import React, { useEffect, useReducer, createContext } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header/Header';
import Content from './components/Content';
import { rootReducer } from './store/reducers/rootReducer';
import { theme } from './theme';
import { gapiConfig } from './gapi.config';
import { searchYT, getFirestoreData } from './store/actions';
import { scrollEvent } from './scrollFunction';
import Snackbar from './components/Notification/Notification';
import Playlist from './components/Playlist/Playlist';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';

export const StateContext = createContext();

export default function App() {
  const initialState = {
    ui: {
      player_state: true,
      snackbar_state: true,
      playlist_state: true,
      dialog_state: true,
      signUp_state: false,
      logIn_state: false
    },
    video: {
      searchValue: "",
      searchName: "",
      nextPage: false,
      replay: true,
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
    },
    auth: {
      user: null,
      loggedIn: false,
      email_value: "",
      password_value: ""
    }
  }
  const [state, dispatch] = useReducer(rootReducer, initialState)

  // useEffect(() => {
    // getFirestoreData()
  //   const { nextPageToken } = state.video
  //   scrollEvent(nextPageToken, dispatch)
  //   const ytConfig = () => gapiConfig(() => {
  //     searchYT("web development", dispatch)
  //   })
  //   window.gapi.load('client', ytConfig)
  // }, [getFirestoreData])
  // }, [window.gapi.load])

  return (
    <ThemeProvider theme={theme}>
      <StateContext.Provider value={[state, dispatch]}>
        <div className="App">
          <Header />
          <Content />
          <SignUp />
          <LogIn />
          <Snackbar
            isOpen={state.ui.snackbar_state}
            message="Siema co tam ?"
          />
          {state.ui.playlist_state ? <Playlist /> : null}
        </div>
      </StateContext.Provider>
    </ThemeProvider>
  );
}

