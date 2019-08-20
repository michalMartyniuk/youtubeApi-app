import { actionTypes } from '../actionTypes';

export const globalReducer = (state, action) => {
  const { global } = actionTypes
  switch (action.type) {
    case global.NOTIFY:
      return {
        ...state,
        snackbar: true
      }
    default:
      return state
  }
}