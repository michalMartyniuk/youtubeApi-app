import React from 'react';
import VideoItem from './VideoItem';

export default function Video({ videos, selectVideo }) {
  return (
    <div>
      {videos
        ? videos.map(video =>
          <VideoItem
            key={video.etag}
            video={video}
            videoId={video.id.videoId}
            snippet={video.snippet}
            onClick={() => selectVideo(video.id.videoId)}
          />)
        : null
      }
    </div>
  )
}