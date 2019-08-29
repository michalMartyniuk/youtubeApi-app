import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { Add, ExpandMore, ExpandLess } from '@material-ui/icons';
import { CardContent } from '@material-ui/core';
import { StateContext } from '../../App';
<<<<<<< HEAD
import {
  add_to_playlist,
  video_select,
  set_notification_state
} from '../../store/actions';
=======
import { set_notification, add_to_playlist, video_select } from '../store/actions';
>>>>>>> 2e247d5260a46c9b83770313647e0fabb2c2ae9d
import { useStyles, styles } from './styles';

export default function VideoItem ( { video } ) {
  const classes = useStyles();
<<<<<<< HEAD
  const [ headerExpand, setHeaderExpand ] = useState( false );
  const [ state, dispatch ] = useContext( StateContext );
=======
  const [state, dispatch] = useContext(StateContext);
>>>>>>> 2e247d5260a46c9b83770313647e0fabb2c2ae9d

  return (
    <Card className={ classes.card }>
      <CardMedia
        className={ classes.media }
        image={ video.snippet.thumbnails.medium.url }
        title={ video.snippet.title }
        onClick={ () => video_select( video, dispatch ) }
      />
      <CardHeader
        classes={ styles.header() }
        title={ video.snippet.title }
      />
<<<<<<< HEAD
      { headerExpand
        ? <CardContent> <h5>Content</h5> </CardContent>
        : null
      }
      <CardActions className={ classes.cardActions }>
        <IconButton
          className={ classes.actionIcon }
          onClick={ () => {
            add_to_playlist( video, dispatch )
            set_notification_state( true, dispatch )
          } }
=======
      <CardActions className={classes.cardActions}>
        <IconButton
          className={classes.actionIcon}
          onClick={() => {
            add_to_playlist(video, dispatch)
            set_notification({
              isActive: true,
              variant: "success",
              message: "Successfully added to playlist"
            }, dispatch)
          }}
>>>>>>> 2e247d5260a46c9b83770313647e0fabb2c2ae9d
        >
          <Add />
        </IconButton>
        <IconButton
          className={ classes.actionIcon }
          aria-label="expand header"
<<<<<<< HEAD
          onClick={ () => setHeaderExpand( !headerExpand ) }
        >
          { headerExpand
            ? <ExpandLess />
            : <ExpandMore />
          }
=======
        >
          <ExpandMore />
>>>>>>> 2e247d5260a46c9b83770313647e0fabb2c2ae9d
        </IconButton>
      </CardActions>
    </Card>
  );
}