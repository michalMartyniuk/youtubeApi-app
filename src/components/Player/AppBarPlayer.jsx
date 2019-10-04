import React, { useContext, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, IconButton, Typography, Button } from '@material-ui/core';
import { SkipPrevious, SkipNext, PlayArrow, Pause, ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { StateContext } from '../../App';
import { video_pause, video_play, video_previous, video_next, set_playlist_state, set_logIn_state, set_signUp_state, set_notification, auth_log_out } from '../../store/actions';

const styles = makeStyles(theme => ({
  container: {
    display: "flex",
    marginLeft: "auto",
  },
  card: {
    padding: "0px 15px",
    backgroundColor: theme.palette.customDarkBlue.main,
    height: 64,
    color: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    borderRadius: 0
  },
  title: {
    flex: 1,
  },
  controls: {
    display: "flex",
  },
  header: {
    display: "flex",
    marginLeft: "auto"
  },
  headerText: {
    padding: 15,
    margin: "auto 0",
    marginLeft: "auto"
  },
  headerText2: {
    padding: 15,
    margin: "auto 0",
  },
  iconButton: {
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.customOrange.hover,
    },
    borderRadius: 0,
    padding: 14
  },
  authButtons: {
    display: "flex",
    alignItems: "center",
    width: 200,
    margin: "auto",
    marginLeft: 12
  },
  authButton: {
    border: "1px solid white",
    borderRadius: 0,
    padding: "6px 16px",
    margin: "auto",
    color: theme.palette.common.white,
  }
}));

export default function AppBarPlayer(props) {
  const [state, dispatch] = useContext(StateContext);
  const classes = styles({ playlist: state.ui.playlist_state });
  const PlayIcon = () => {
    if (state.video.actions.play) {
      return (
        <IconButton
          className={classes.iconButton}
          onClick={() => video_pause(state.video.player, dispatch)}
        > <Pause /> </IconButton>
      )
    } else { return null }
  }
  const PauseIcon = () => {
    if (state.video.actions.pause) {
      return (
        <IconButton
          className={classes.iconButton}
          onClick={() => video_play(state.video.player, dispatch)}
        > <PlayArrow /> </IconButton>
      )
    } else { return null }
  }
  const VideoTitle = ({ title }) => {
    if (!title) {
      title = "No video selected"
    }
    if (title.length > 40) {
      title = title.slice(0, 40) + "..."
    }
    return <Typography variant="h4">{title}</Typography>
  }
  const videoTitle = state.video.selected ?
    state.video.selected.snippet.title : null
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardContent className={classes.title}>
          <VideoTitle title={videoTitle} />
        </CardContent>
        <div className={classes.controls}>
          {state.playlist.items.length > 0 ?
            <IconButton
              className={classes.iconButton}
              onClick={() => video_previous(state.video.selected, state.playlist.items, dispatch)}
            >
              <SkipPrevious />
            </IconButton> : null}
          <PlayIcon />
          <PauseIcon />
          {state.playlist.items.length > 0 ?
            <IconButton
              className={classes.iconButton}
              onClick={() => video_next(state.video.selected, state.playlist.items, dispatch)}
            >
              <SkipNext />
            </IconButton> : null}
          <div className={classes.header}>
            <Typography
              variant="h4"
              classes={{ root: classes.headerText2 }}
              component="span"
              align="center"
            >
              {state.playlist.items.length} videos in playlist
            </Typography>
            {state.playlist.items.length > 0 ?
              <IconButton
                className={classes.iconButton}
                onClick={() => set_playlist_state(!state.ui.playlist_state, dispatch)}
              >
                {state.ui.playlist_state ?
                  <ArrowUpward /> : <ArrowDownward />}
              </IconButton> : null}
          </div>
        </div>
      </Card>
      {/* <div className={classes.authButtons}>
        {state.auth.loggedIn
          ? <Button
            onClick={() => auth_log_out(dispatch)}
            className={classes.authButton}
          >Log out</Button>
          : <Fragment>
            <Button
              onClick={() => set_logIn_state(true, dispatch)}
              className={classes.authButton}
            >Log in</Button>
            <Button
              onClick={() => set_signUp_state(true, dispatch)}
              className={classes.authButton}
            >Sign up</Button>
          </Fragment>
        }
      </div> */}
    </div>
  );
}
