import { AuthGuard } from '../../../../components/auth-guard/auth-guard.component';

export const MyFavorites = () => (
  <AuthGuard>
    <div>
      <h1>MY FAVORITES</h1>
    </div>
  </AuthGuard>
);
