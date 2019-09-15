import React, { useEffect, useReducer, createContext } from 'react';
import { gapiConfig } from './gapi.config';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/Header/Header';
import Content from './components/Content';
import { rootReducer } from './store/reducers/rootReducer';
import { theme } from './theme';
import { searchYT } from './store/actions';
import Snackbar from './components/Notification/Notification';
import CustomDialog from './components/Dialog/Dialog';
import { Typography } from '@material-ui/core';

export const StateContext = createContext();

export default function App () {
  const initialState = {
    ui: {
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

  useEffect(() => {
    const ytConfig = () => gapiConfig(() => {
      searchYT("moby", dispatch)
    })
    window.gapi.load('client', ytConfig)
  }, [window.gapi.load])

  const dialogContent = <React.Fragment>
    <Typography gutterBottom>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </Typography>
    <Typography gutterBottom>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
      lacus vel augue laoreet rutrum faucibus dolor auctor.
    </Typography>
    <Typography gutterBottom>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla.
    </Typography>
  </React.Fragment>

  return (
    <ThemeProvider theme={theme}>
      <StateContext.Provider value={[state, dispatch]}>
        <div className="App">
          {/* <CustomDialog title="siema" content={dialogContent}/> */}
          {/* <Header /> */}
          <Content />
          {/* <Snackbar
            isOpen={ state.ui.snackbar_state }
            message="Siema co tam ?"
          /> */}
        </div>
      </StateContext.Provider>
    </ThemeProvider>
  );
}