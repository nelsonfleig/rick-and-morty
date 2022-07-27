import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LoginRequest, RegisterRequest } from '../../ts/auth.type';
import { User } from '../../ts/user.type';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    credentials: 'include',
  }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    me: builder.query<User | null, void>({
      query: () => `/auth/me`,
    }),
    login: builder.mutation<User, LoginRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    register: builder.mutation<User, RegisterRequest>({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useLoginMutation, useMeQuery, useLogoutMutation, useRegisterMutation } = authApi;
