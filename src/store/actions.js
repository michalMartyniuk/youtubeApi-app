import { actionTypes } from './actionTypes';
import firebase from '../config/firebase';

const types = actionTypes;
const db = firebase.firestore();
const auth = firebase.auth();

export const getFirestoreData = () => {
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc)
    });
  });
}

export const set_signUp_state = (state, dispatch) => {
  return dispatch({
    type: types.ui.SET_SIGNUP_STATE,
    state
  })
}
export const set_logIn_state = (state, dispatch) => {
  return dispatch({
    type: types.ui.SET_LOGIN_STATE,
    state
  })
}
export const set_email_value = (value, dispatch) => {
  return dispatch({
    type: types.auth.SET_EMAIL_VALUE,
    value
  })
}
export const set_password_value = (value, dispatch) => {
  return dispatch({
    type: types.auth.SET_PASSWORD_VALUE,
    value
  })
}
export const auth_sign_up = (email, password, dispatch) => {
  auth.createUserWithEmailAndPassword(email, password).then(user => {
    return dispatch({
      type: types.auth.SIGNUP,
      user
    })
  })
}
export const auth_log_in = (email, password, dispatch) => {
  auth.signInWithEmailAndPassword(email, password).then(user => {
    return dispatch({
      type: types.auth.LOGIN,
      user
    })
  })
}
export const auth_log_out = (dispatch) => {
  auth.signOut().then(() => {
    return dispatch({
      type: types.auth.LOGOUT,
    })
  })
}

export async function searchYT(query, dispatch, token = null, callback = null) {
  const config = {
    part: "id, snippet",
    q: query,
    type: ["video"],
    maxResults: 20,
    order: "viewCount"
  }
  if (token) config.pageToken = token
  const { result } = await window.gapi.client.youtube.search.list(config);
  const results = result
  dispatch({ type: types.video.SET_VIDEOS, query, results })
  if (callback) callback()
}

export const set_search_value = (value, dispatch) => {
  dispatch({ type: types.video.SET_SEARCH_VALUE, value })
}

export const add_to_playlist = (video, dispatch) => {
  dispatch({ type: types.playlist.ADD, video })
  dispatch({ type: types.ui.NOTIFY, messsage: "Video added to playlist" })
}

export const remove_from_playlist = (video, dispatch) => {
  dispatch({ type: types.playlist.REMOVE, video })
}

export const set_notification_state = (snackbar_state, dispatch) => {
  dispatch({
    type: types.ui.SET_NOTIFICATION_STATE,
    snackbar_state
  })
}
export const set_playlist_state = (playlist_state, dispatch) => {
  dispatch({
    type: types.ui.SET_PLAYLIST_STATE,
    playlist_state
  })
}

export const set_dialog_state = (dialog_state, dispatch) => {
  dispatch({
    type: types.ui.SET_DIALOG_STATE,
    dialog_state
  })
}

export const set_player_state = (player_state, dispatch) => {
  dispatch({
    type: types.ui.SET_PLAYER_STATE,
    player_state
  })
}
export const video_get_player = (player, dispatch) => {
  dispatch({
    type: types.video.GET_PLAYER,
    player
  })
}
export const video_select = (video, dispatch) => {
  dispatch({
    type: types.video.SELECT,
    video
  })
}
export const video_pause = (player, dispatch) => {
  player.pauseVideo()
  dispatch({
    type: types.video.PAUSE,
  })
}
export const video_play = (player, dispatch) => {
  player.playVideo()
  dispatch({
    type: types.video.PLAY,
  })
}
export const video_previous = (selectedVideo, playlist, dispatch) => {
  dispatch({
    type: types.video.PREVIOUS,
    selectedVideo,
    playlist
  })
}
export const video_next = (selectedVideo, playlist, dispatch) => {
  dispatch({
    type: types.video.NEXT,
    selectedVideo,
    playlist
  })
}
export const video_replay = (replayBool, dispatch) => {
  dispatch({
    type: types.video.REPLAY,
    replayBool,
  })
}