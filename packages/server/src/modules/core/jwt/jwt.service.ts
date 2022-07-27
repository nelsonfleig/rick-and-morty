import { Service } from 'typedi';
import jwt from 'jsonwebtoken';
import config from 'config';

@Service()
export class JwtService {
  signJwt(object: Object, signingKey: 'accessTokenSecret') {
    return jwt.sign(object, config.get(signingKey));
  }

  verifyJwt<T>(token: string, signingKey: 'accessTokenSecret'): T | null {
    try {
      const decoded = jwt.verify(token, config.get(signingKey)) as T;

      return decoded;
    } catch (e) {
      return null;
    }
  }
}
