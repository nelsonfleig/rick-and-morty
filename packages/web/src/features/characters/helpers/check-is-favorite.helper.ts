import { User } from '../../../ts/user.type';

export const checkIsFavorite = (favorites: User['favorites'], id: number) => favorites.includes(id);
