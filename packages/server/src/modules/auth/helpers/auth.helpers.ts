import config from 'config';
import { Request, CookieOptions, Response } from 'express';

export function getAccessTokenFromRequest(req: Request): string | null {
  let token = null;

  if (req.cookies && req.cookies.accessToken) {
    token = req.cookies.accessToken;
  } else if (req.headers.authorization && req.headers.authorization.includes('Bearer')) {
    token = req.headers.authorization.replace('Bearer ', '');
  }

  return token;
}

export function setCookie(response: Response, cookieName: string, payload: string) {
  const isProd = config.get('nodeEnv') === 'production';
  const cookieOptions: CookieOptions = {
    httpOnly: true,
    domain: config.get('serverDomain'),
    sameSite: isProd ? 'none' : 'strict',
    secure: isProd,
  };

  response.cookie(cookieName, payload, cookieOptions);
}
