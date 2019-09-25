import { searchYT } from './store/actions';

export function scrollEvent(nextToken, dispatch) {
  let nextBool = false
  const condition = () => {
    //Check if body bottom position is visible(in viewport) and event hasn't been already fired
    // return true or false
    const elBottomPosition = window.document.body.getBoundingClientRect().bottom
    return window.innerHeight > elBottomPosition && nextBool === false && !window.noMoreResults
  }
  function eventFunc() {
    if (condition()) {
      nextBool = true
      searchYT(null, dispatch, nextToken, () => {
        nextBool = false
      })
    }
  }
  window.addEventListener("scroll", eventFunc)
}