import { baseApi } from './baseApi';

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (productData) => {
        return {
          url: '/products',
          method: 'POST',
          body: productData,
        };
      },
      invalidatesTags: ['products'],
    }),
    getProducts: builder.query({
      query: (query) => {
        return {
          url: `/products?${query}`,
          method: 'GET',
        };
      },
      providesTags: ['products'],
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: 'GET',
        };
      },
      providesTags: ['product'],
    }),
    deleteAProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['products'],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetProductsQuery,
  useGetSingleProductQuery,
  useDeleteAProductMutation,
} = productApi;
