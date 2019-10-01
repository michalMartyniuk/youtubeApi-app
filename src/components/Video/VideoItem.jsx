import React, { useContext, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { Add, ExpandMore, ExpandLess } from '@material-ui/icons';
import { CardContent } from '@material-ui/core';
import { StateContext } from '../../App';
import {
  add_to_playlist,
  video_select,
  video_play,
  set_notification_state,
} from '../../store/actions';
import { useStyles, styles } from './styles';

export default function VideoItem({ video }) {
  const classes = useStyles();
  const [headerExpand, setHeaderExpand] = useState(false);
  const [state, dispatch] = useContext(StateContext);

  return (
    <Card className={classes.card}>
      <div className={classes.imageOverlay} style={{backgroundColor: "black"}}>
        <CardMedia
          className={classes.media}
          image={video.snippet.thumbnails.medium.url}
          title={video.snippet.title}
          onClick={() => {
            video_select(video, dispatch)
          }}
        />
      </div>
      <CardHeader
        classes={styles.header()}
        title={video.snippet.title.length > 40
          ? video.snippet.title.slice(0, 40) + "..."
          : video.snippet.title}
      />
      {headerExpand
        ? <CardContent> <h5>Content</h5> </CardContent>
        : null
      }
      <CardActions className={classes.cardActions}>
        <IconButton
          className={classes.actionIcon}
          onClick={() => {
            add_to_playlist(video, dispatch)
            set_notification_state(true, dispatch)
          }}
        >
          <Add />
        </IconButton>
        <IconButton
          className={classes.actionIcon}
          aria-label="expand header"
          onClick={() => setHeaderExpand(!headerExpand)}
        >
          {
            headerExpand
              ? <ExpandLess />
              : <ExpandMore />
          }
        </IconButton>
      </CardActions>
    </Card >
  );
}