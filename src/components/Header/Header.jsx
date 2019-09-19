import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, ButtonGroup } from '@material-ui/core';
import Search from '../Search/Search';
import { StateContext } from '../../App';
import { styles } from './styles';
import { set_playlist_state } from '../../store/actions';
import AppBarPlayer from '../Player/AppBarPlayer';


export default function Header () {
  const classes = styles();
  const [ state, dispatch ] = useContext( StateContext );
  return (
    <AppBar >
      <Toolbar>
        <Grid container alignItems="center" spacing={ 7 } wrap="nowrap" >
          <Grid item xs={ 2 }>
            <Typography variant="h6">
              Appname
            </Typography>
          </Grid>
          <Grid item xs={ 6 } >
            <Search />
          </Grid>
          <AppBarPlayer
            title="Some title"
            image={ state.video.selected }
            playlist_state={state.ui.playlist_state}
            playlist_toggle={ () => set_playlist_state( !state.ui.playlist_state, dispatch ) }
          />
        </Grid>
      </Toolbar>
    </AppBar >
  )
}