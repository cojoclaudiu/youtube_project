import { useGetVideoDetailsQuery } from 'api/endpoints/video.api';
import { useVideoId } from './useVideoId';
import { skipToken } from '@reduxjs/toolkit/query';

const useCurrentVideo = () => {
  const { videoId } = useVideoId();
  const { data } = useGetVideoDetailsQuery(videoId ? { videoId } : skipToken);

  return {
    currentVideo: data?.items[0],
  };
};

export { useCurrentVideo };
