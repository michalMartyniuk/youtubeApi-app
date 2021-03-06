import { actionTypes } from '../actionTypes';

export const uiReducer = (state, action) => {
  const { ui } = actionTypes
  switch (action.type) {
    case ui.SET_HOMEPAGE_STATE:
      return {
        ...state,
        homepage_state: action.state
      }
    case ui.SET_SIGNUP_STATE:
      return {
        ...state,
        signUp_state: action.state
      }
    case ui.SET_LOGIN_STATE:
      return {
        ...state,
        logIn_state: action.state
      }
    case ui.SET_NOTIFICATION_STATE:
      return {
        ...state,
        notification: {
          state: action.state,
          message: action.message,
          variant: action.variant
        }
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
    case ui.SET_PLAYER_STATE:
      return {
        ...state,
        player_state: action.player_state
      }
    default:
      return state
  }
}