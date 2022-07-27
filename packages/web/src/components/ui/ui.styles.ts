import styled from 'styled-components';
import { flex } from '../../theme';

type LoaderProps = {
  size?: 'lg' | 'sm';
  light?: boolean;
};

export const Loader = styled.div<LoaderProps>`
  border-radius: 50%;
  /* width: 24px; */
  width: ${(props) => (props.size === 'lg' ? '48px' : '24px')};
  height: ${(props) => (props.size === 'lg' ? '48px' : '24px')};
  border: 0.25rem solid
    ${(props) => (props.light ? `rgba(38, 70, 83, 0.2)` : `rgba(255,255,255, 0.2)`)};
  border-top-color: ${(props) => (props.light ? `rgb(38, 70, 83)` : `rgb(255,255,255)`)};
  animation: spin 1s infinite linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

type FlexContainerProps = {
  direction?: string;
  justify?: string;
  align?: string;
  fullHeight?: boolean;
};

export const FlexContainer = styled.div<FlexContainerProps>`
  ${({ direction = 'row', justify = 'center', align = 'center' }) =>
    flex(direction, justify, align)};
  height: ${({ fullHeight = false }) => (fullHeight ? '100%' : 'auto')};
`;

export const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: ${(props) => props.theme.layout.maxWidth};
`;

export const Section = styled.section`
  padding: ${(props) => props.theme.layout.section};
`;
