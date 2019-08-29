import { actionTypes } from './actionTypes';
const types = actionTypes;

export async function searchYT(query, dispatch) {
  const { result } = await window.gapi.client.youtube.search.list({
    "part": "id, snippet",
    "q": query
  });
  const videos = result.items;
  dispatch({ type: 'SET', videos })
}

export const add_to_playlist = (video, dispatch) => {
  dispatch({ type: types.playlist.ADD, video })
  dispatch({ type: types.ui.SET_NOTIFICATION, messsage: "Video added to playlist" })

}
export const video_select = (video, dispatch) => {
  dispatch({
    type: types.video.SELECT,
    video
  })
}
export const set_notification = (config, dispatch) => {
  dispatch({
    type: types.ui.SET_NOTIFICATION,
    config
  })
}
export const set_playlist = (playlist_state, dispatch) => {
  dispatch({
    type: types.ui.SET_PLAYLIST,
    playlist_state
  })
}