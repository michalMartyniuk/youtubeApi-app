import { actionTypes } from '../actionTypes';

export const authReducer = (state, action) => {
  const { auth } = actionTypes
  switch (action.type) {
    case auth.SET_EMAIL_VALUE:
      return {
        ...state,
        email_value: action.value
      }
    case auth.SET_PASSWORD_VALUE:
      return {
        ...state,
        password_value: action.value
      }
    case auth.SIGNUP:
      return {
        ...state,
        user: action.user,
        loggedIn: true
      }
    case auth.LOGIN:
      return {
        ...state,
        user: action.user,
        loggedIn: true
      }
    case auth.LOGOUT:
      return {
        ...state,
        loggedIn: false
      }
    default:
      return state
  }
}