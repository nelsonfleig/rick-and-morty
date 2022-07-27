import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  min-height: 100vh;
`;

export const Main = styled.main`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
