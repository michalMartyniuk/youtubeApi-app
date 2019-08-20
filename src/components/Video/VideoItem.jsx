import React, { useState, useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { Add, ExpandMore, ExpandLess } from '@material-ui/icons';
import { CardContent } from '@material-ui/core';
import { StateContext } from '../../App';
import { add_to_playlist, video_select } from '../store/actions';
import {useStyles, styles} from './styles';

export default function VideoItem({ video }) {
  const classes = useStyles();
  const [headerExpand, setHeaderExpand] = useState(false);
  const [state, dispatch] = useContext(StateContext);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={video.snippet.thumbnails.medium.url}
        title={video.snippet.title}
        onClick={() => video_select(video, dispatch)}
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
          onClick={() => add_to_playlist(video, dispatch)}
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