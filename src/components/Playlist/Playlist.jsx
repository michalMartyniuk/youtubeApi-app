import React, { useContext } from 'react';
import {
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import clsx from 'clsx';
import { StateContext } from '../../App';
import { IconButton } from '@material-ui/core';
import { Remove } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { video_select, remove_from_playlist } from '../../store/actions';

const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    right: 0,
    top: 64,
    minWidth: 430,
    backgroundColor: "rgb(66, 71, 88)",
    color: theme.palette.common.white,
    paddingTop: 0,
    paddingBottom: 0
  },
  listItem: {
    padding: 0
  },
  listItemText: {
    padding: "10px 16px",
    margin: 0
  },
  divider: {
    borderBottom: "1px solid rgba(255, 255, 255, 0.63)"
  },
  itemButton: {
    '&:hover': {
      backgroundColor: 'rgb(33, 33, 33)'
    }
  },
  itemButtonSelected: {
    backgroundColor: 'rgb(33, 33, 33)'
  },
  playlistFab: {
    width: 30,
    height: 30,
    minHeight: 30,
    marginLeft: "auto",
    boxShadow: "none"
  },
  iconButton: {
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: "#de4f4f",
    },
    borderRadius: 0,
    padding: 10
  },
}));

export default function Playlist() {
  const classes = useStyles();
  const [state, dispatch] = useContext(StateContext);
  return (
    <List
      className={classes.root}
      component="nav"
      aria-labelledby="playlist"
    >

      {state.playlist.items
        ? state.playlist.items.map((item, index) => {
          let { title } = item.snippet
          if (title.length > 40) {
            title = title.slice(0, 40) + "..."
          }
          return (
            <ListItem
              button
              divider
              key={item.etag}
              classes={{
                root: classes.listItem,
                divider: clsx({ [classes.divider]: index !== state.playlist.items.length - 1, }),
                button: clsx({
                  [classes.itemButtonSelected]: state.video.selected === item,
                  [classes.itemButton]: state.video.selected !== item.selected
                })
              }} >
              <ListItemText
                primary={title}
                className={classes.listItemText}
                onClick={() => video_select(item, dispatch)}
              />
              <IconButton
                onClick={() => remove_from_playlist(item, dispatch)}
                className={classes.iconButton}
              >
                <Remove />
              </IconButton>
            </ListItem>
          )
        })
        : null}
    </List>
  );
}
