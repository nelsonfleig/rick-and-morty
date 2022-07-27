import { GlobalStyle } from '../../theme';
import { Navbar } from '../components/navbar/navbar.component';
import { Main } from './main-layout.styles';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <GlobalStyle />
    <Navbar />
    <Main>{children}</Main>
  </>
);
