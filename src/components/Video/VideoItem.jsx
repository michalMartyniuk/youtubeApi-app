import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { Add, ExpandMore, ExpandLess } from '@material-ui/icons';
import { CardContent } from '@material-ui/core';
import { StateContext } from '../App';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 250,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    cursor: "pointer"
  },
  cardActions: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.customDarkBlue.main,
    '&:hover': {
      backgroundColor: theme.palette.customDarkBlue.hover
    }
  },
  actionIcon: {
    color: theme.palette.common.white
  }
}));

const styles = {
  moreIcon: makeStyles(theme => ({
    root: {
      padding: theme.spacing(1),
    }
  })),

  header: makeStyles(theme => ({
    root: { paddingBottom: 0 },
    title: { ...theme.typography.subtitle2, fontSize: '1rem' },
  }))
}

export default function VideoItem({ video }) {
  const classes = useStyles();
  const [headerExpand, setHeaderExpand] = useState(false);
  const [state, setState] = useContext(StateContext);

  function handle_add_to_playlist({ videoId, snippet }) {
    setState(state => ({
      ...state,
      playlist: {
        ...state.playlist,
        content: [
          ...state.playlist.content,
          { videoId, snippet }
        ]
      }
    }))
  }
  function handle_video_select(id) {
    setState(state => ({
      ...state,
      video: { ...state.video, selected: id }
    }))
  }
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={video.snippet.thumbnails.medium.url}
        title={video.snippet.title}
        onClick={() => handle_video_select(video.id.videoId)}
      />
      <CardHeader
        classes={styles.header()}
        title={video.snippet.title}
      />
      {headerExpand
        ? <CardContent> <h5>Content</h5> </CardContent>
        : null
      }
      <CardActions className={classes.cardActions}>
        <IconButton
          className={classes.actionIcon}
          onClick={() => handle_add_to_playlist(video.id.videoId, video.snippet)}
        >
          <Add />
        </IconButton>
        <IconButton
          className={classes.actionIcon}
          aria-label="expand header"
          onClick={() => setHeaderExpand(!headerExpand)}
        >
          {headerExpand
            ? <ExpandLess />
            : <ExpandMore />
          }
        </IconButton>
      </CardActions>
    </Card>
  );
}