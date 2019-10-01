import { uiReducer } from './uiReducer';
import { playlistReducer } from './playlistReducer';
import { videoReducer } from './videoReducer';
import { authReducer } from './authReducer';

export const rootReducer = ({ ui, playlist, video, auth }, action) => {
  return {
    ui: uiReducer(ui, action),
    playlist: playlistReducer(playlist, action),
    video: videoReducer(video, action),
    auth: authReducer(auth, action)
  }
}