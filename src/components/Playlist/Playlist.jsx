import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import clsx from 'clsx';
import { StateContext } from '../../App';

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

export default function Playlist() {
  const classes = useStyles();
  const [state, setState] = useContext(StateContext);

  return (
    <List
      className={classes.root}
      component="nav"
      aria-labelledby="playlist"
    > {state.playlist.content
      ? state.playlist.content.map((item, index) => {
        return (
          <ListItem
            button
            divider
            classes={{
              divider: clsx({ [classes.divider]: index !== state.playlist.content.length - 1, }),
              button: classes.itemButton
            }} >
            <ListItemText primary={item.snippet.title} />
          </ListItem>
        )
      })
      : null}
    </List>
  );
}
