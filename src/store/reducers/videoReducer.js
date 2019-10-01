import { actionTypes } from '../actionTypes';

export const videoReducer = (state, action) => {
  const { video } = actionTypes;
  switch (action.type) {
    case video.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.value
      }
    case video.SET_VIDEOS:
      const { results } = action
      const { nextPageToken } = results
      const videos = results.items.filter(video => {
        let contains = false
        for (let stateVideo of state.items) {
          if (stateVideo.etag === video.etag) {
            contains = true
          }
        }
        return !contains
      })
      let items
      if (!action.query) {
        items = [...state.items, ...videos]
      } else {
        items = [...videos]
      }
      //Global var on window to stop fetching new videos on scroll event if there are none.
      window.noMoreResults = videos.length < 20 ? true : false
      return {
        ...state,
        items,
        searchName: state.searchValue,
        nextPageToken: nextPageToken ? nextPageToken : null,
        totalResults: results.pageInfo.totalResults
      }
    case video.SELECT:
      return { ...state, selected: action.video }
    case video.GET_PLAYER:
      return { ...state, player: action.player }
    case video.PAUSE:
      return {
        ...state,
        actions: {
          pause: true,
          play: false,
        }
      }
    case video.PLAY:
      return {
        ...state,
        actions: {
          pause: false,
          play: true,
        }
      }
    case video.PREVIOUS:
      let previousVideo = action.playlist.filter((video, index, arr) => {
         if(arr[index + 1] === action.selectedVideo) {
           return video
         }
      })
      if (previousVideo.length !== 1) {
        previousVideo = action.playlist[0]
      } else {
        previousVideo = previousVideo[0]
      }
      return {
        ...state,
        selected: previousVideo
      }
    case video.NEXT:
      let nextVideo = action.playlist.filter((video, index, arr) => {
         if(arr[index - 1] === action.selectedVideo) {
           return video
         }
      })
      if (nextVideo.length !== 1) {
        nextVideo = action.playlist[0]
      } else {
        nextVideo = nextVideo[0]
      }
      return {
        ...state,
        selected: nextVideo
      }
    case video.REPLAY:
      return {
        ...state,
        replay: action.replayBool
      }
    default:
      return state
  }
}