import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { flex } from '../../../../theme';

export const DetailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DetailImage = styled.img`
  object-fit: cover;
  object-position: center;
  flex-grow: 1;
`;

export const DetailInfo = styled.div`
  flex-grow: 3;
  color: ${({ theme }) => theme.colors.offWhite};
  padding: ${({ theme }) => theme.spacing(4)};

  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
`;

export const DetailBackButton = styled(Link)`
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  ${flex('row', 'flex-start', 'center')}
  gap: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.colors.offWhite};
  font-weight: 500;
  font-size: 18px;
`;
