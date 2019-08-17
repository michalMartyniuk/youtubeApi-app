import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(12)
  }
}))

export default function Player() {
  const classes = useStyles();

  return <iframe
      id="yt-iframe"
      width="1020"
      height="560"
      src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"
      frameBorder="0">
    </iframe>
}