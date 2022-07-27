import styled from 'styled-components';

export const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: ${({ theme }) => theme.spacing(4)};
`;
