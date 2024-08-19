import { axiosBaseQuery } from '@/lib/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL as string,
  }),
  endpoints: () => ({}),
  tagTypes: ['users', 'user', 'products', 'product'],
});

export const {} = baseApi;
