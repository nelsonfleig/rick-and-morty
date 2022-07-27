import { toast } from 'react-toastify';
import { useAuth } from '../../../hooks/useAuth';
import {
  NavContent,
  NavHeader,
  NavLink,
  NavLinks,
  NavLogin,
  NavLogo,
  NavLogout,
} from './navbar.styles';

export const Navbar = () => {
  const { logout, isAuthenticated } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('You are logged out');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Could not log you out: ${error.message}`);
      }
    }
  };

  return (
    <NavHeader>
      <NavContent>
        <NavLogo to="/">
          <h1>Rick and Morty</h1>
        </NavLogo>
        <NavLinks>
          {isAuthenticated ? (
            <NavLink>
              <NavLogout onClick={handleLogout}>Logout</NavLogout>
            </NavLink>
          ) : (
            <NavLink>
              <NavLogin to="/login">Login</NavLogin>
            </NavLink>
          )}
        </NavLinks>
      </NavContent>
    </NavHeader>
  );
};
