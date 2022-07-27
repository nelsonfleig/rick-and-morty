import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../../ts/user.type';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    credentials: 'include',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    favorite: builder.mutation<User, number>({
      query: (id) => ({
        url: `user/favorite/${id}`,
        method: 'PUT',
      }),
    }),
    unfavorite: builder.mutation<User, number>({
      query: (id) => ({
        url: `user/unfavorite/${id}`,
        method: 'PUT',
      }),
    }),
  }),
});

export const { useFavoriteMutation, useUnfavoriteMutation } = userApi;
