import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Search from '../Search/Search';
import AppBarPlayer from '../Player/AppBarPlayer';
import { StateContext } from '../../App';

export default function Header() {
  const [state, dispatch] = useContext(StateContext);
  return (
    <AppBar >
      <Toolbar>
        <Typography variant="h1">
          YoutubeApp
        </Typography>
        <Search />
        <AppBarPlayer />
      </Toolbar>
    </AppBar >
  )
}