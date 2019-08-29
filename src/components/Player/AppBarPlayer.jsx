import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardContent, CardMedia,
  IconButton, Typography, Button, CardActionArea
} from '@material-ui/core';
import {
  SkipPrevious, SkipNext, PlayArrow,
  ArrowDropDown, ArrowDropUp
} from '@material-ui/icons';

const styles = makeStyles(theme => ({
  card: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 0,
    width: 800,
    position: "absolute",
    top: 0,
    right: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
  },
  controls: {
    backgroundColor: theme.palette.customDarkBlue.main,
    display: "flex",
    flex: 1,
  },
  iconButton: {
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.customOrange.hover,
    },
    borderRadius: 0,
    padding: theme.spacing(1)
  },
}));

const PlayerIcon = (props) => {
  const classes = styles();
  return (
    <IconButton
      className={classes.iconButton}
    >
      {props.children}
    </IconButton>
  )
}

export default function AppBarPlayer (props) {
  const classes = styles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.title}>
        <Typography variant="h6">
          {props.title}
        </Typography>
      </CardContent>
      <div className={classes.controls}>
        <PlayerIcon aria-label="previous">
          <SkipPrevious />
        </PlayerIcon>
        <PlayerIcon aria-label="play/pause">
          <PlayArrow className={classes.playIcon} />
        </PlayerIcon>
        <PlayerIcon aria-label="next">
          <SkipNext />
        </PlayerIcon>
        <PlayerIcon
          className={classes.playlistButton}
          onClick={props.playlist_toggle}
        >
          {props.playlist_state
            ? <ArrowDropUp />
            : <ArrowDropDown />
          }
        </PlayerIcon>
      </div>

      {props.image
        ?
        <CardMedia
          className={classes.cover}
          image={props.image.snippet.thumbnails.medium.url}
          title={props.title}
        />
        : null
      }
    </Card>
  );
}
