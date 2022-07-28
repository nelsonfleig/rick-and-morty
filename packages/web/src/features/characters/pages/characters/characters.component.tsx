import { useState } from 'react';
import { Container, FlexContainer, Loader, Section } from '../../../../components/ui/ui.styles';
import { useAuth } from '../../../../hooks/useAuth';
import { useImagePreloader } from '../../../../hooks/useImagePreloader';
import { useGetCharactersListQuery } from '../../../../redux/characters/character.api';
import { CharacterCard } from '../../components/character-card/character-card.component';
import { Pagination } from '../../components/pagination/pagination.component';
import { checkIsFavorite } from '../../helpers/check-is-favorite.helper';
import { CharacterGrid } from './characters.styles';
import { ErrorMessage } from '../../../error/components/error-message.component';

export const Characters = () => {
  const [page, setPage] = useState(1);
  const { data, isFetching } = useGetCharactersListQuery(page);
  const { user } = useAuth();
  const { imagesPreloaded } = useImagePreloader(
    data?.data.length ? data.data.map((c) => c.image) : []
  );

  if (isFetching || !imagesPreloaded)
    return (
      <FlexContainer fullHeight>
        <Loader size="lg" />
      </FlexContainer>
    );

  if ((!data && !isFetching) || !data?.data.length) {
    return (
      <FlexContainer fullHeight>
        <ErrorMessage message="There are no items to show" />
      </FlexContainer>
    );
  }

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
        <Pagination currentPage={page} totalPages={data.meta.pages} onPageChange={setPage} />
      </Section>
    </Container>
  );
};
