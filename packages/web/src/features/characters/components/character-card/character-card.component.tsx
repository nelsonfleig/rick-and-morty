import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useFavorite } from '../../../../hooks/useFavorite';
import { Character } from '../../../../ts/character.type';
import { CharacterStatus } from '../character-status/character-status.component';
import {
  CharacterContainer,
  CharacterContent,
  CharacterImage,
  CharacterImageWrapper,
  CharacterInfo,
  FavoriteButton,
} from './character-card.styles';

type CharacterCardProps = {
  character: Character;
  isFavorite?: boolean;
};

export const CharacterCard = ({ character, isFavorite = false }: CharacterCardProps) => {
  const { favorite, unfavorite } = useFavorite();

  const handleFavorite = async () => {
    try {
      await favorite(character.id);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  const handleUnfavorite = async () => {
    try {
      await unfavorite(character.id);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <CharacterContainer>
      <CharacterImageWrapper to={`/characters/${character.id}`}>
        <CharacterImage src={character.image} alt={character.name} />
      </CharacterImageWrapper>
      <CharacterContent>
        <CharacterInfo>
          <div className="name">
            <h3>{character.name}</h3>
          </div>
          <CharacterStatus character={character} />
        </CharacterInfo>
        <FavoriteButton onClick={isFavorite ? handleUnfavorite : handleFavorite}>
          {isFavorite ? (
            <AiFillHeart fontSize={24} color="red" />
          ) : (
            <AiOutlineHeart fontSize={24} color="red" />
          )}
        </FavoriteButton>
      </CharacterContent>
    </CharacterContainer>
  );
};
