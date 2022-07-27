import { Character } from '../../../../ts/character.type';
import { CharacterStatusWrapper, Circle } from './character-status.styles';

type CharacterStatusProps = {
  character: Character;
};

export const CharacterStatus = ({ character }: CharacterStatusProps) => (
  <CharacterStatusWrapper>
    <Circle status={character.status} />{' '}
    <p>
      {character.status} - {character.species}
    </p>
  </CharacterStatusWrapper>
);
