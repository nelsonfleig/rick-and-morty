import styled from 'styled-components';
import { flex } from '../../../theme';

export const MessageContainer = styled.div`
  ${flex('column', 'center', 'center')}
  color: ${({ theme }) => theme.colors.offWhite};
  text-align: center;
  h2 {
    font-size: 80px;
    font-weight: 500;
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }
  p {
    line-height: 1.3rem;
  }
`;
