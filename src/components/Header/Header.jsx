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
<<<<<<< HEAD
          <AppBarPlayer
            title="Some title"
            image={ state.video.selected }
            playlist_state={state.ui.playlist_state}
            playlist_toggle={ () => set_playlist_state( !state.ui.playlist_state, dispatch ) }
          />
=======
        </Grid>
        <Grid item xs={2} >
          <ButtonGroup variant="contained" color="primary" aria-label="split button">
            <Button
              className={classes.playlistButton}
              onClick={() => dispatch({ type: 'TOGGLE' })}
            >
              Playlist
            </Button>
            <Button
              className={classes.playlistButton}
              variant="contained"
              size="small"
              onClick={() => dispatch({ type: 'TOGGLE' })}
            >
              {state.ui.playlist_state
                ? <ArrowDropUp />
                : <ArrowDropDown />
              }
            </Button>
          </ButtonGroup>
>>>>>>> 2e247d5260a46c9b83770313647e0fabb2c2ae9d
        </Grid>
      </Toolbar>
    </AppBar >
  )
}