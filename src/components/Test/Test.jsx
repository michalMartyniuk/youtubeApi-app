import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    background: theme.background,
    border: 0,
    fontSize: 16,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}));

export default function Theming() {
  const classes = useStyles();

  return (
    <Button>Theming</Button>
  );
}



