import { actionTypes } from '../actionTypes';

export const playlistReducer = (state, action) => {
  const { playlist } = actionTypes

  switch (action.type) {
    case playlist.ADD:
      // If video is already in playlist return state unchanged
      if (state.items
        .filter(item => item === action.video)
        .length > 0) {
        return state
      }
      return {
        ...state,
        items: [
          ...state.items,
          action.video
        ]
      }
    case playlist.REMOVE:
      const videos = state.items.filter(item => item !== action.video)
      return {
        ...state,
        items: videos
      }
    default:
      return state
  }
}
