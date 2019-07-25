import React from "react";
import './VideoItem.scss';

export default function VideoItem ({video}) {
    console.log(video)
    return (
        <div key={video.etag} className='video'>
            <img src={video.snippet.thumbnails.medium.url} alt="video thumbnail"/>
            <p className='video__title'>{video.snippet.title}</p>
            <p className='video__description'>{video.snippet.description}</p>
        </div>
    )
}