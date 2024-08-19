import { baseApi } from './baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (loginData) => {
        return {
          url: '/auth/login',
          method: 'POST',
          data: loginData,
        };
      },
      invalidatesTags: ['user'],
    }),
    signup: builder.mutation({
      query: (signupData) => {
        return {
          url: '/auth/register',
          method: 'POST',
          data: signupData,
        };
      },
      invalidatesTags: ['user'],
    }),
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

export const { useGetProfileQuery, useLoginMutation, useSignupMutation } =
  userApi;
