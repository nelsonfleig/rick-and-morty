import nodeFetch, { RequestInfo, RequestInit } from 'node-fetch';
import { HttpError } from 'routing-controllers';

/**
 * Wrapper around node-fetch to allow generics and throw an http error
 */
export const fetch = <T>(url: RequestInfo, init?: RequestInit): Promise<T> =>
  nodeFetch(url, init)
    .then((res) =>
      !res.ok ? Promise.reject(new HttpError(503, 'Rick and Morty API is unavailable')) : res
    )
    .then((res) => res.json() as Promise<T>);
