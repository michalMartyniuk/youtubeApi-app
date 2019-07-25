import React from "react"
import VideoItem from "./VideoItem";

export default function VideoList ({videos}) {
    return (
        <div className="video-list">
            { videos ? 
                videos.map(video => {
                    return <VideoItem key={video.etag} video={video} /> 
                })
                : null 
            }
        </div>
    )
}