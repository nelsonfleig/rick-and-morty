import { Redirect } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FlexContainer, Loader } from '../ui/ui.styles';

type AuthGuardProps = {
  children: JSX.Element;
};

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const { isAuthenticated, loading } = useAuth();

  if (!loading && !isAuthenticated) {
    return <Redirect to="/not-authorized" />;
  }

  if (loading)
    return (
      <FlexContainer fullHeight>
        <Loader size="lg" />
      </FlexContainer>
    );

  return children;
};
