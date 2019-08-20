import { globalReducer } from './globalReducer';
import { playlistReducer } from './playlistReducer';
import { videoReducer } from './videoReducer';

export const rootReducer = ({ global, playlist, video }, action) => {
  return {
    global: globalReducer(global, action),
    playlist: playlistReducer(playlist, action),
    video: videoReducer(video, action)
  }
}