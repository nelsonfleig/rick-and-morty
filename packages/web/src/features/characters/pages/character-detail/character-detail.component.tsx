import { useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Container, FlexContainer, Loader, Section } from '../../../../components/ui/ui.styles';
import { useGetCharacterByIdQuery } from '../../../../redux/characters/character.api';
import { CharacterStatus } from '../../components/character-status/character-status.component';
import { InfoItem } from '../../components/info-item/info-item.component';
import {
  DetailBackButton,
  DetailImage,
  DetailInfo,
  DetailWrapper,
} from './character-detail.styles';
import { useImagePreloader } from '../../../../hooks/useImagePreloader';

export const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isFetching } = useGetCharacterByIdQuery(parseInt(id, 10));
  const { imagesPreloaded } = useImagePreloader(data?.image ? [data.image] : []);

  if (!data || isFetching || !imagesPreloaded)
    return (
      <FlexContainer fullHeight>
        <Loader size="lg" />
      </FlexContainer>
    );

  return (
    <Container>
      <Section>
        <DetailBackButton to="/">
          <IoMdArrowRoundBack size={24} color="white" /> View All
        </DetailBackButton>
        <DetailWrapper>
          <DetailImage src={data?.image} />
          <DetailInfo>
            <h2> {data?.name}</h2>
            <CharacterStatus character={data} />
            <InfoItem label="Last known location:" content={data.location.name} />
            <InfoItem label="# of Appearances (Episodes)" content={data.episode.length} />
            {data.type && <InfoItem label="Type:" content={data.type} />}
          </DetailInfo>
        </DetailWrapper>
      </Section>
    </Container>
  );
};
