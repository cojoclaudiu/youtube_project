import { api } from 'api/base';
import { getRandomAPI } from 'helpers/getRandomApiKey';
import { AvatarSchema } from 'schema/avatar.schema';

export const avatarApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAvatar: builder.query<AvatarSchema, { id: string }>({
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
  }),
});

export const { useGetAvatarQuery } = avatarApi;
