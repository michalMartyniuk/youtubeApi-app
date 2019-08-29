import React, { useContext } from 'react';
import {
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import clsx from 'clsx';
import { StateContext } from '../../App';
import { useStyles } from './styles';

export default function Playlist() {
  const classes = useStyles();
  const [state, dispatch] = useContext(StateContext);
  return (
    <List
      className={classes.root}
      component="nav"
      aria-labelledby="playlist"
    > {state.playlist.items
      ? state.playlist.items.map((item, index) => {
        let { title } = item.snippet
        if (title.length > 40) {
          title = title.slice(0,40) + "..."
        }
        return (
          <ListItem
            button
            divider
            key={item.etag}
            classes={{
              divider: clsx({ [classes.divider]: index !== state.playlist.items.length - 1, }),
              button: classes.itemButton
            }} >
            <ListItemText primary={title} />
          </ListItem>
        )
      })
      : null}
    </List>
  );
}
