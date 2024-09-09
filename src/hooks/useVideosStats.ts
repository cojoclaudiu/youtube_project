import { useCurrentVideo } from './useCurrentVideo';

const useVideoStats = () => {
  const { currentVideo } = useCurrentVideo();

  return {
    info: {
      title: currentVideo?.snippet.title || '',
      likes: Number(currentVideo?.statistics.likeCount) || 0,
      views: Number(currentVideo?.statistics.viewCount) || 0,
    },
  };
};

export { useVideoStats };
