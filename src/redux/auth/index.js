import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authToken.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    sigUp: builder.mutation({
      query: data => ({
        url: `/users/signup`,
        method: 'POST',
        body: data,
      }),
    }),
    logIn: builder.mutation({
      query: data => ({
        url: `/users/login`,
        method: 'POST',
        body: data,
      }),
    }),
    getCurrentUser: builder.query({
      query: _ => '/users/current',
    }),
  }),
});

export const { useSigUpMutation, useLogInMutation, useGetCurrentUserQuery } =
  authApi;
