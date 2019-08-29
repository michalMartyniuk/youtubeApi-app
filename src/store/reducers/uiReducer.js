import { actionTypes } from '../actionTypes';

export const uiReducer = ( state, action ) => {
  const { ui } = actionTypes
  switch ( action.type ) {
    case ui.SET_NOTIFICATION_STATE:
      return {
        ...state,
        snackbar_state: action.snackbar_state
      }
    case ui.SET_PLAYLIST_STATE:
      return {
        ...state,
        playlist_state: action.playlist_state
      }
    case ui.SET_DIALOG_STATE:
      return {
        ...state,
        dialog_state: action.dialog_state
      }
    default:
      return state
  }
}