import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flex } from '../../../../theme';

export const CharacterContainer = styled.article`
  border-width: 1px solid black;
  border-radius: ${({ theme }) => theme.styles.borderRadius};
  box-shadow: ${({ theme }) => theme.styles.boxShadow};
  padding: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.offWhite};
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const CharacterImageWrapper = styled(Link)`
  display: block;
  height: 250px;
  width: auto;
  overflow: hidden;

  & img {
    transition: ${({ theme }) => theme.styles.transition};
  }
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const CharacterImage = styled.img`
  object-fit: cover;
  object-position: center;
  height: auto;
  width: 100%;
`;

export const CharacterInfo = styled.div`
  padding: ${({ theme }) => theme.spacing(2)};
  .name {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: ${({ theme }) => theme.spacing(1.5)};
  }
`;

export const FavoriteButton = styled.button`
  background-color: transparent;
  ${flex('row', 'center', 'center')}
  align-self: center;
`;

export const CharacterContent = styled.div`
  ${flex('row', 'space-between', 'flex-start')}
`;
