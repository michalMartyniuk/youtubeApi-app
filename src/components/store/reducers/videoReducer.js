import { actionTypes } from '../actionTypes';

export const videoReducer = (state, action) => {
  const { video } = actionTypes;
  switch (action.type) {
    case video.SET:
      return { ...state, items: action.videos }
    case video.SELECT:
      return {...state, selected: action.video }
    default:
      return state
  }
}