import styled from 'styled-components';
import { flex } from '../../../../theme';

export const InfoItemWrapper = styled.div`
  ${flex('column', 'center', 'flex-start')}
  margin-top: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  span {
    color: ${({ theme }) => theme.colors.label};
    margin-bottom: ${({ theme }) => theme.spacing(1.5)};
    font-size: 14px;
  }
`;
