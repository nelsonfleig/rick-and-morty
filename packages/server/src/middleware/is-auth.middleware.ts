import { Request, Response, NextFunction } from 'express';
import { ExpressMiddlewareInterface, HttpError } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
export class IsAuth implements ExpressMiddlewareInterface {
  use(request: Request, response: Response, next: NextFunction): any {
    if (!response.locals.user) {
      throw new HttpError(401, 'Not Authorized');
    }
    next();
  }
}
