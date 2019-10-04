import React, { useEffect, useReducer, createContext, Fragment } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header/Header';
import Content from './components/Content';
import { rootReducer } from './store/reducers/rootReducer';
import { theme } from './theme';
import { gapiConfig } from './gapi.config';
import { searchYT, set_notification, set_homepage_state } from './store/actions';
import Notification from './components/Notification/Notification';
import Playlist from './components/Playlist/Playlist';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';

export const StateContext = createContext();

export default function App() {
  const initialState = {
    ui: {
      player_state: true,
      notification: {
        state: false,
        message: "",
        variant: "",
      },
      playlist_state: true,
      dialog_state: true,
      signUp_state: false,
      logIn_state: false,
      homepage_state: false
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

  useEffect(() => {
    // set_homepage_state(true, dispatch)
    const ytConfig = () => gapiConfig(() => {
      searchYT("web development", dispatch)
    })
    window.gapi.load('client', ytConfig)
  }, [window.gapi.load])

  return (
    <ThemeProvider theme={theme}>
      <StateContext.Provider value={[state, dispatch]}>
        <div className="App">
          {state.ui.homepage_state ? <Home />
            : <Fragment>
              <Header />
              <Content />
              <SignUp />
              <LogIn />
              {state.ui.notification.state ?
                <Notification
                  isOpen={state.ui.notification.state}
                  message={state.ui.notification.message}
                  variant={state.ui.notification.variant}
                /> : null}
              {state.ui.playlist_state ? <Playlist /> : null}
            </Fragment>}
        </div>
      </StateContext.Provider>
    </ThemeProvider>
  );
}

