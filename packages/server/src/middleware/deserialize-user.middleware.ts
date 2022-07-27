import { NextFunction, Request, Response } from 'express';
import { ExpressMiddlewareInterface, Middleware } from 'routing-controllers';
import { Service } from 'typedi';
import { UserJwt } from '@/ts/user-jwt';
import { JwtService } from '@/modules/core/jwt/jwt.service';

@Service()
@Middleware({ type: 'before' })
export class DeserializeUser implements ExpressMiddlewareInterface {
  constructor(private jwtService: JwtService) {}

  use(request: Request, response: Response, next: NextFunction): any {
    const decoded = this.jwtService.verifyJwt<UserJwt>(
      request.cookies?.accessToken,
      'accessTokenSecret'
    );

    if (decoded) {
      response.locals.user = decoded;
    }

    next();
  }
}
