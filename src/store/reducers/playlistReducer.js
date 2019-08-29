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
<<<<<<< HEAD:src/store/reducers/playlistReducer.js
=======

>>>>>>> 2e247d5260a46c9b83770313647e0fabb2c2ae9d:src/components/store/reducers/playlistReducer.js
    default:
      return state
  }
}