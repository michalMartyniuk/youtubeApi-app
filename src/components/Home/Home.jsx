import React, { useContext } from 'react';
import { StateContext } from '../../App';
import { makeStyles } from '@material-ui/styles';
import HomeSearch from './HomeSearch';
import { Typography, Box, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: 700,
    margin: "auto",
    marginTop: theme.spacing(7),
    color: theme.palette.common.white,
  },
  header: {
    fontSize: "5rem",
    textAlign: "center",
    marginBottom: "5rem"
  },
  paper: {
    backgroundColor: "#313339",
    width: "80%",
    margin: "auto",
    marginTop: 70,
    padding: 32,
    color: theme.palette.common.white
  },
  paperTitle: {
    fontSize: "3.5rem",
    marginBottom: "1.5rem"
  },
  paperText: {
    fontSize: "2rem",
  }
}));


export default function Home() {
  const classes = useStyles();
  const [state, dispatch] = useContext(StateContext);

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Typography className={classes.header} variant="h1">Welcome to YoutubeApp</Typography>
        <HomeSearch />
      </div>
      <Paper className={classes.paper}>
        <Typography className={classes.paperTitle} variant="h3">Title</Typography>
        <Typography className={classes.paperText} variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dignissimos, praesentium perferendis animi neque cum voluptate officia ab, corrupti deleniti aperiam provident odio expedita reiciendis dolore repellendus? Voluptate, delectus reiciendis.</Typography>
      </Paper>
    </div>
  )
}