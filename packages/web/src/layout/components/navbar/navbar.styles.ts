import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { flex } from '../../../theme';

export const NavHeader = styled.header`
  height: 80px;
  width: 100%;
  box-shadow: ${(props) => props.theme.styles.boxShadow};
  background: white;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.surface};
  ${flex('row', 'center', 'center')}
`;

export const NavContent = styled.nav`
  ${flex('row', 'center', 'center')}
  max-width: 1200px;
  width: 100%;
  padding: 0 ${(props) => props.theme.layout.section};
  & > a {
    margin-right: auto;
  }
`;

export const NavLogo = styled(Link)`
  ${flex('row', 'center', 'center')}
  cursor: pointer;
  h1 {
    margin-left: 5px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.offWhite};
  }
`;

export const NavLinks = styled.ul`
  ${flex('row', 'center', 'center')}
`;

export const NavLink = styled.li`
  margin-left: 20px;
  a {
    color: ${({ theme }) => theme.colors.offWhite};
  }
`;

export const NavLogin = styled(Link)`
  display: block;
  background: ${(props) => props.theme.colors.primary};
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.offWhite};
  border-radius: ${(props) => props.theme.styles.borderRadius};
  transition: ${(props) => props.theme.styles.transition};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  &:hover {
    background: ${(props) => props.theme.colors.primaryHover};
    cursor: pointer;
  }
`;

export const NavLogout = styled.button`
  display: block;
  background: ${(props) => props.theme.colors.primary};
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.offWhite};
  border-radius: ${(props) => props.theme.styles.borderRadius};
  transition: ${(props) => props.theme.styles.transition};
  border: none;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  &:hover {
    background: ${(props) => props.theme.colors.primaryHover};
    cursor: pointer;
  }
`;
