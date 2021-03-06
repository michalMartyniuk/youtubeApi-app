import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AppBarPlayer from '../Player/AppBarPlayer';
import { StateContext } from '../../App';
import SearchAppBar from '../Search/Search';

export default function Header() {
  const [state, dispatch] = useContext(StateContext);
  return (
    <AppBar >
      <Toolbar>
        <Typography variant="h1">
          YoutubeApp
        </Typography>
        <SearchAppBar />
        <AppBarPlayer />
      </Toolbar>
    </AppBar >
  )
}