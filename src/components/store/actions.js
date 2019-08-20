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
  dispatch({ type: types.global.NOTIFY, messsage: "Video added to playlist" })
  
}


export const video_select = (video, dispatch) =>
  dispatch({
    type: types.video.SELECT,
    video
  })