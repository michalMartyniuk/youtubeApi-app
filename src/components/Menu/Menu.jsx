import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Fab
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import clsx from 'clsx';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    bottom: 32,
    left: 32,
    minWidth: 360,
    backgroundColor: "rgb(66, 71, 88)",
    color: theme.palette.common.white,
    paddingTop: 0,
    paddingBottom: 0
  },
  divider: {
    borderBottom: "1px solid rgba(255, 255, 255, 0.63)"
  },
  itemButton: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.28)'
    }
  },
  playlistFab: {
    width: 30,
    height: 30,
    minHeight: 30,
    marginLeft: "auto",
    boxShadow: "none"
  }
}));

export default function Menu({ videos }) {
  const classes = useStyles();

  return (
    <List
      className={classes.root}
      component="nav"
      aria-labelledby="playlist"
    > {videos
      ? videos.map((video, index) => {
        return (
          <ListItem
            button
            divider
            classes={{
              divider: clsx({ [classes.divider]: index !== videos.length - 1, }),
              button: classes.itemButton
            }} >
            <ListItemText primary={video.snippet.title} />
          </ListItem>
        )
      })
      : null}
    </List>
  );
}
