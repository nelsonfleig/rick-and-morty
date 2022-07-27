import { useFavoriteMutation, useUnfavoriteMutation } from '../redux/user/user.api';
import { useAuth } from './useAuth';

export const useFavorite = () => {
  const { refetchMe } = useAuth();
  const [favorite] = useFavoriteMutation();
  const [unfavorite] = useUnfavoriteMutation();

  const handleFavorite = async (id: number) => {
    try {
      await favorite(id).unwrap();
      refetchMe();
    } catch (error: any) {
      let errorMsg = 'An unknown error occured';
      if (error.originalStatus === 401) {
        errorMsg = 'You must be logged in to favorite';
      }
      throw new Error(errorMsg);
    }
  };

  const handleUnfavorite = async (id: number) => {
    try {
      await unfavorite(id).unwrap();
      refetchMe();
    } catch (error: any) {
      let errorMsg = 'An unknown error occured';
      if (error.originalStatus === 401) {
        errorMsg = 'You must be logged in to favorite';
      }
      throw new Error(errorMsg);
    }
  };

  return {
    favorite: handleFavorite,
    unfavorite: handleUnfavorite,
  };
};
