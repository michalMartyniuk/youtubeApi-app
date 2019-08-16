import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, ButtonGroup } from '@material-ui/core';
import Search from '../Search/Search';
import { makeStyles } from '@material-ui/styles';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  playlistButton: {
    backgroundColor: theme.palette.customOrange.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.customOrange.hover,
    }
  }
}))


export default function Header({ setVideos, playlist, togglePlaylist }) {
  const classes = useStyles();

  function handlePlaylistToggle() {
    togglePlaylist(!playlist)
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
            <Search setVideos={setVideos} />
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
              {playlist
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