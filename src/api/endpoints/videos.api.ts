import { api } from 'api/base';
import { getRandomAPI } from 'helpers/getRandomApiKey';
import { VideosSchema } from 'schema/videos.schema';

interface APIArgs {
  videoIds: string;
}

export const videosApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query<VideosSchema, APIArgs | void>({
      query: (args) => {
        const apiKey = getRandomAPI();

        const ids = args?.videoIds ? { id: args.videoIds } : {};

        return {
          url: 'videos',
          params: {
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            maxResults: 50,
            regionCode: 'US',
            key: apiKey,
            ...ids,
          },
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetVideosQuery, useLazyGetVideosQuery } = videosApi;
