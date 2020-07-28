import React from 'react';
import { VideoCardContainer } from './styles';

function VideoCard({ imagemTitle, videoTitle, videoURL, categoryColor }) {
  return (
    <VideoCardContainer
      url={imagemTitle}
      href={videoURL}
      target="_blank"
      style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
    />
  );
}

export default VideoCard;
