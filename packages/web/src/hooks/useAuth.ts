import {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useRegisterMutation,
} from '../redux/auth/auth.api';
import { LoginRequest, RegisterRequest } from '../ts/auth.type';

export const useAuth = () => {
  const [login] = useLoginMutation();
  const [logout] = useLogoutMutation();
  const [register] = useRegisterMutation();
  const { data: user, refetch: refetchMe, isFetching } = useMeQuery();

  const handleLogin = async (credentials: LoginRequest) => {
    try {
      await login(credentials).unwrap();
      refetchMe();
    } catch (error: any) {
      throw new Error(`Could not log you in: ${error.data.message}`);
    }
  };

  const handleRegister = async (credentials: RegisterRequest) => {
    try {
      await register(credentials).unwrap();
    } catch (error: any) {
      throw new Error(`Could not register you: ${error.data.message}`);
    }
  };

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      refetchMe();
    } catch (error: any) {
      throw new Error(`Could not log you out: ${error.data.message}`);
    }
  };

  return {
    login: handleLogin,
    logout: handleLogout,
    register: handleRegister,
    isAuthenticated: Boolean(user),
    refetchMe,
    loading: isFetching,
    user,
  };
};
