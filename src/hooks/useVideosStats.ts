import { useCurrentVideo } from './useCurrentVideo';

const useVideoStats = () => {
  const { currentVideo } = useCurrentVideo();

  return {
    info: {
      title: currentVideo?.snippet.title,
      likes: currentVideo?.statistics.likeCount,
      views: currentVideo?.statistics.viewCount,
    },
  };
};

export { useVideoStats };
