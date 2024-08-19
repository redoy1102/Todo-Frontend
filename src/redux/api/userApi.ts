import { baseApi } from './baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => {
        return {
          url: `/auth/get-profile`,
          method: 'GET',
        };
      },
      providesTags: ['user'],
    }),
  }),
});

export const { useGetProfileQuery } = userApi;
