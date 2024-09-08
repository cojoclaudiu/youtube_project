import { useCurrentVideo } from './useCurrentVideo';
import { useSearchFeedResults } from './useSearchFeedResults';

const useRelatedVideos = () => {
  const { currentVideo } = useCurrentVideo();
  const tags = currentVideo?.snippet.title;

  const { searchFeedResults } = useSearchFeedResults(tags ? { keyword: tags } : undefined);

  return {
    relatedVideos: searchFeedResults,
  };
};

export { useRelatedVideos };
