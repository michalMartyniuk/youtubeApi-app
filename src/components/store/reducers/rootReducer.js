import { uiReducer } from './uiReducer';
import { playlistReducer } from './playlistReducer';
import { videoReducer } from './videoReducer';

export const rootReducer = ({ ui, playlist, video }, action) => {
  return {
    ui: uiReducer(ui, action),
    playlist: playlistReducer(playlist, action),
    video: videoReducer(video, action)
  }
}