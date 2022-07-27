import { useState } from 'react';
import { Container, FlexContainer, Loader, Section } from '../../../../components/ui/ui.styles';
import { useAuth } from '../../../../hooks/useAuth';
import { useGetCharactersListQuery } from '../../../../redux/characters/character.api';
import { CharacterCard } from '../../components/character-card/character-card.component';
import { Pagination } from '../../components/pagination/pagination.component';
import { checkIsFavorite } from '../../helpers/check-is-favorite.helper';
import { CharacterGrid } from './characters.styles';

export const Characters = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetCharactersListQuery(page);
  const { user } = useAuth();

  if (isFetching)
    return (
      <FlexContainer fullHeight>
        <Loader size="lg" />
      </FlexContainer>
    );

  return (
    <Container>
      <Section>
        <CharacterGrid>
          {data?.data.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              isFavorite={checkIsFavorite(user?.favorites || [], character.id)}
            />
          ))}
        </CharacterGrid>
        <Pagination currentPage={page} totalPages={data!.meta.pages} onPageChange={setPage} />
      </Section>
    </Container>
  );
};
