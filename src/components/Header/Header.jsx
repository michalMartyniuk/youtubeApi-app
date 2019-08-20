import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, ButtonGroup } from '@material-ui/core';
import Search from '../Search/Search';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { StateContext } from '../../App';
import { useStyles } from './styles';

export default function Header() {
  const classes = useStyles();
  const [state, dispatch] = useContext(StateContext);
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
              {state.playlist.toggleState
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