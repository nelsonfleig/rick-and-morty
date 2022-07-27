import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, CharacterListResponse } from '../../ts/character.type';

export const characterApi = createApi({
  reducerPath: 'characterApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
  }),
  endpoints: (builder) => ({
    getCharactersList: builder.query<CharacterListResponse, number | void>({
      query: (page = 1) => `/characters?page=${page}`,
    }),
    getCharacterById: builder.query<Character, number | void>({
      query: (id) => `/characters/${id}`,
    }),
  }),
});

export const { useGetCharactersListQuery, useGetCharacterByIdQuery } = characterApi;
