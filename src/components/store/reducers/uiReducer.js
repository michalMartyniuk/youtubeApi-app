import { actionTypes } from '../actionTypes';

export const uiReducer = (state, action) => {
  const { ui } = actionTypes
  switch (action.type) {
    case ui.SET_NOTIFICATION:
      return {
        ...state,
        notification: {...action.config} //action.config: { isActive:bool, variant:string, message:string }
      }
    case ui.SET_PLAYLIST:
      return {
        ...state,
        playlist_state: action.playlist_state
      }
    default:
      return state
  }
}