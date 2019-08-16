import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListSubheader, ListItem, ListItemText } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 360,
    backgroundColor: "rgb(66, 71, 88)",
    color: theme.palette.common.white,
    paddingBottom: 0
  },
  sticky: {
    backgroundColor: "rgb(210, 125, 24)",
    color: theme.palette.common.white,
    fontSize: '1rem'
  },
  divider: {
    borderBottom: "1px solid rgba(255, 255, 255, 0.63)"
  },
  itemButton: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.28)'
    }
  }
}));

export default function Menu({ videos }) {
  const classes = useStyles();

  return (
    <List
      className={classes.root}
      component="nav"
      aria-labelledby="playlist"
      subheader={
        <ListSubheader classes={{
          sticky: classes.sticky
        }}
          component="div" id="playlist">
          Playlist
        </ListSubheader>
      }
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
