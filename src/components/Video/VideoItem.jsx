import React from 'react';
import { makeStyles } from '@material-ui/styles';

export default function VideoItem({ video, onClick }) {
  return (
    <button
      onClick={() => onClick(video)}
    >{video.id.kind}</button>
  )
}