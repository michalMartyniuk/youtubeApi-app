import { actionTypes } from '../actionTypes';

export const playlistReducer = (state, action) => {
  const { playlist } = actionTypes

  switch (action.type) {
    case playlist.ADD:
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

    default:
      return state
  }
}