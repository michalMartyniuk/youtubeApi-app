import React, { useEffect, useReducer, createContext } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header/Header';
import Content from './components/Content';
import { rootReducer } from './store/reducers/rootReducer';
import { theme } from './theme';
import { searchYT } from './store/actions';
import Snackbar from './components/Notification/Notification';

export const StateContext = createContext();

export default function App () {
  const initialState = {
    ui: {
      player_state: false,
      snackbar_state: true,
      playlist_state: true,
      dialog_state: true
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

  return (
    <ThemeProvider theme={theme}>
      <StateContext.Provider value={[state, dispatch]}>
        <div className="App">
          <Header />
          <Content />
          <Snackbar
            isOpen={ state.ui.snackbar_state }
            message="Siema co tam ?"
          />
        </div>
      </StateContext.Provider>
    </ThemeProvider>
  );
}