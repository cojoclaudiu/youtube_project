import { api } from 'api/base';
import { getRandomAPI } from 'helpers/getRandomApiKey';
import { ChannelSchema } from 'schema/channel.schema';

export const channelApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getChannel: builder.query<ChannelSchema, { id: string }>({
      query: ({ id }) => {
        const apiKey = getRandomAPI();

        return {
          url: 'channels',
          params: {
            part: 'snippet',
            id: id,
            key: apiKey,
          },
          method: 'GET',
        };
      },
    }),

    getChannels: builder.query<ChannelSchema, { ids: string }>({
      query: ({ ids }) => {
        const apiKey = getRandomAPI();

        return {
          url: 'channels',
          params: {
            part: 'snippet',
            id: ids,
            key: apiKey,
          },
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetChannelQuery, useGetChannelsQuery } = channelApi;
