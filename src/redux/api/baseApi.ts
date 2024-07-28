import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../../lib/axiosBaseQuery';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL as string,
  }),
  endpoints: () => ({}),
  tagTypes: ['user'],
});

export const {} = baseApi;
