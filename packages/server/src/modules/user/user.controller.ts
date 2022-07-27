import { JsonController, Param, Put, Res, UseBefore } from 'routing-controllers';
import { Service } from 'typedi';
import { Response } from 'express';
import { IsAuth } from '@/middleware/is-auth.middleware';
import { UserService } from './user.service';

@Service()
@UseBefore(IsAuth)
@JsonController('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Put('/favorite/:id')
  favorite(@Param('id') id: number, @Res() res: Response) {
    return this.userService.addToFavorites(res.locals.user.id, id);
  }

  @Put('/unfavorite/:id')
  unfavorite(@Param('id') id: number, @Res() res: Response) {
    return this.userService.removeFromFavorites(res.locals.user.id, id);
  }
}
