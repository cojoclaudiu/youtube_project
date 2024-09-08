import { api } from 'api/base';
import { getRandomAPI } from 'helpers/getRandomApiKey';
import { SearchFeedSchema } from 'schema/searchFeed.schema';

export const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSearchResults: builder.query<SearchFeedSchema, { keyword: string }>({
      query: ({ keyword }) => {
        const apiKey = getRandomAPI();

        return {
          url: 'search',
          params: {
            part: 'snippet',
            maxResults: 30,
            q: keyword,
            key: apiKey,
          },
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetSearchResultsQuery } = searchApi;
