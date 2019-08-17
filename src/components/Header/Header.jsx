import React, { useState, useContext } from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, ButtonGroup } from '@material-ui/core';
import Search from '../Search/Search';
import { makeStyles } from '@material-ui/styles';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { StateContext } from '../../App';

const useStyles = makeStyles(theme => ({
  playlistButton: {
    backgroundColor: theme.palette.customOrange.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.customOrange.hover,
    }
  }
}))

export default function Header() {
  const classes = useStyles();
  const [state, setState] = useContext(StateContext);

  function handlePlaylistToggle() {
    setState(state => ({
      ...state,
      playlist: {
        ...state.playlist,
        state: !state.playlist.state
      }
    }
    ))
  }

  return (
    <AppBar >
      <Toolbar>
        <Grid container alignItems="center" spacing={7} wrap="nowrap" >
          <Grid item xs={2} md={1}>
            <Typography variant="h6">
              Appname
            </Typography>
          </Grid>
          <Grid item xs={8} >
            <Search />
          </Grid>
        </Grid>
        <Grid item xs={2} >
          <ButtonGroup variant="contained" color="primary" aria-label="split button">
            <Button
              className={classes.playlistButton}
              onClick={handlePlaylistToggle}
            >
              Playlist
            </Button>
            <Button
              className={classes.playlistButton}
              variant="contained"
              size="small"
              onClick={handlePlaylistToggle}
            >
              {state.playlist.state
                ? <ArrowDropUp />
                : <ArrowDropDown />
              }
            </Button>
          </ButtonGroup>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}