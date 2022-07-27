import { Service } from 'typedi';
import config from 'config';
import { fetch } from '@/lib/fetch';
import { Character, CharacterListResponse } from '@/ts/rick-morty-api.type';

@Service()
export class CharacterService {
  protected baseUrl: string;

  constructor() {
    this.baseUrl = config.get('apiBaseUrl');
  }

  async findAll(page: number) {
    const { info, results } = await fetch<CharacterListResponse>(`${this.baseUrl}?page=${page}`);

    return {
      meta: {
        page,
        pages: info.pages,
      },
      data: results,
    };
  }

  findById(id: number) {
    return fetch<Character>(`${this.baseUrl}/${id}`);
  }
}
