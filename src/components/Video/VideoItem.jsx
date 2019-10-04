import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { Add } from '@material-ui/icons';
import { StateContext } from '../../App';
import {
  add_to_playlist,
  video_select,
  set_notification,
} from '../../store/actions';
import { useStyles, styles } from './styles';

export default function VideoItem({ video }) {
  const classes = useStyles();
  const [state, dispatch] = useContext(StateContext);

  return (
    <Card className={classes.card}>
      <div className={classes.imageOverlay} style={{ backgroundColor: "black" }}>
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
      <CardActions className={classes.cardActions}>
        <IconButton
          className={classes.actionIcon}
          onClick={() => {
            add_to_playlist(video, dispatch)
            set_notification(true, dispatch,
              "Video added to your playlist", "success")
          }}
        >
          <Add />
        </IconButton>
      </CardActions>
    </Card >
  );
}