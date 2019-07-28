import React from "react"
import VideoItem from "./VideoItem";

export default function VideoList ({ videos, select_video }) {

    const videoList = videos ? videos.map(video => {
        return <VideoItem key={video.etag} video={video} select_video={select_video}/> 
    }) : null 
            
    return (
        <div className="video-list">
           {videoList} 
        </div>
    )
}