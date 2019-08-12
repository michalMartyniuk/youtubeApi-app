import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import Search from '../Search/Search';

export default function Header({ setVideos }) {
  return (
    <AppBar>
      <Toolbar>
        <Grid container alignItems="center" spacing={7} wrap="nowrap" >
          <Grid item xs={3} md={1}>
            <Typography variant="h6">
              Appname
            </Typography>
          </Grid>
          <Grid item xs={10} >
            <Search setVideos={setVideos} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}