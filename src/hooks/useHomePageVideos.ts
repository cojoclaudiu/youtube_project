import { useGetChannelsQuery } from 'api/endpoints/channel.api';
import { useVideos } from './useVideos';
import { skipToken } from '@reduxjs/toolkit/query';

const useHomePageVideos = () => {
  const { videos } = useVideos();

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

  return { videos: videosWithChannelImages };
};

export { useHomePageVideos };
