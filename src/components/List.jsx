import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import {List, ListItem, ListItemText, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 360,
    backgroundColor: "rgba(66, 71, 88, 0.16)",
    color: theme.palette.common.black
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  sticky: {
    backgroundColor: "rgb(66, 71, 88)",
    color: theme.palette.common.white,
    fontSize: '1rem'
  },
  divider: {
    borderBottom: "1px solid rgba(66, 71, 88, 0.46)"
  }
}));

export default function NestedList() {
  const classes = useStyles();

  return (
    <Box justifyContent="flex-end" display="flex">
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
      >
        <ListItem button divider classes={{ divider: classes.divider }}>
          <ListItemText primary="Sent mail" />
        </ListItem>


        <ListItem button divider classes={{ divider: classes.divider }}>
          <ListItemText primary="Drafts" />
        </ListItem>

        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
      </List>
    </Box>
  );
}
