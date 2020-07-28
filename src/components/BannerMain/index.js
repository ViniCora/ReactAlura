import React from 'react';
import {
  BannerMainContainer,
  ContentAreaContainer,
  WatchButton,
} from './styles';

export default function BannerMain({ videoTitle, videoDescription, url }) {
  const bgUrl = `https://thumbs.gfycat.com/ReflectingNeglectedBug-size_restricted.gif`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>{videoTitle}</ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <WatchButton>Assistir</WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
