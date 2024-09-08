import { skipToken } from '@reduxjs/toolkit/query';
import { useGetChannelsQuery } from 'api/endpoints/channel.api';
import { useGetSearchResultsQuery } from 'api/endpoints/search.api';
import { useSearchParams } from 'react-router-dom';

interface SearchFeedResultsArgs {
  keyword: string;
}

const useSearchFeedResults = (args?: SearchFeedResultsArgs) => {
  const [searchParams] = useSearchParams();
  const category_query = searchParams.get('category_query');
  const search_query = searchParams.get('search_query');
  const keyword = args?.keyword || category_query || search_query || null;

  const { data } = useGetSearchResultsQuery(keyword ? { keyword } : skipToken);
  const videos = data?.items;

  const uniqueChannelIds = [...new Set(videos?.map((item) => item.snippet.channelId))].join(',');

  const { data: channels } = useGetChannelsQuery(
    uniqueChannelIds ? { ids: uniqueChannelIds } : skipToken,
  );

  const channelMap = new Map(channels?.items.map((channel) => [channel.id, channel]));

  const videosWithChannelImages = videos?.map((video) => {
    const channel = channelMap.get(video.snippet.channelId);

    return {
      ...video,
      channel,
    };
  });

  return {
    searchFeedResults: videosWithChannelImages,
    channels,
  };
};

export { useSearchFeedResults };
