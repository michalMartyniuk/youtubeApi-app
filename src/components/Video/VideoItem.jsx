import React from "react";

export default function VideoItem ({video, select_video}) {
    return (
        <div className='video' onClick={ () => select_video(video.id.videoId) }>
            <img src={video.snippet.thumbnails.medium.url} alt="video thumbnail"/>
            <p className='video__title'>{video.snippet.title}</p>
            <p className='video__description'>{video.snippet.description}</p>
        </div>
    )
}