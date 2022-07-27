import { Login } from '../features/auth/pages/login.component';
import { Register } from '../features/auth/pages/register.component';
import { CharacterDetail } from '../features/characters/pages/character-detail/character-detail.component';
import { Characters } from '../features/characters/pages/characters/characters.component';
import { MyFavorites } from '../features/characters/pages/my-favorites/my-favorites.component';
import { Page401 } from '../features/error/pages/page-401.component';
import { Page404 } from '../features/error/pages/page-404.component';
import { RouteType } from '../ts/route.type';

export const routes: RouteType[] = [
  {
    component: Characters,
    path: '/',
    exact: true,
  },
  {
    component: CharacterDetail,
    path: '/characters/:id',
  },
  {
    component: Login,
    path: '/login',
  },
  {
    component: MyFavorites,
    path: '/my-favorites',
  },
  {
    component: Register,
    path: '/register',
  },
  {
    component: Page401,
    path: '/not-authorized',
  },
  {
    component: Page404,
  },
];
