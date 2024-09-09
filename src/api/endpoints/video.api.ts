import { api } from 'api/base';
import { getRandomAPI } from 'helpers/getRandomApiKey';
import { VideoDetailSchema } from 'schema/videoDetail.schema';

export const videoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getVideoDetails: builder.query<VideoDetailSchema, { videoId: string }>({
      query: ({ videoId }) => {
        const apiKey = getRandomAPI();

        return {
          url: 'videos',
          params: {
            part: 'snippet,contentDetails,statistics',
            id: videoId,
            key: apiKey,
          },
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetVideoDetailsQuery } = videoApi;
