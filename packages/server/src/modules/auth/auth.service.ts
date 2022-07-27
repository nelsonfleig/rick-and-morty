import argon2 from 'argon2';
import { Response } from 'express';
import { HttpError } from 'routing-controllers';
import { Service } from 'typedi';
import { JwtService } from '../core/jwt/jwt.service';
import { UserService } from '../user/user.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { setCookie } from './helpers/auth.helpers';

@Service()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async me(id: number) {
    return this.userService.findById(id);
  }

  async login(data: LoginDTO, res: Response) {
    const user = await this.userService.findByUsernameOrEmail(data.usernameOrEmail.toLowerCase());
    if (!user) {
      throw new HttpError(401, 'Invalid credentials');
    }

    const isValidPassword = await argon2.verify(user.password, data.password);
    if (!isValidPassword) {
      throw new HttpError(401, 'Invalid credentials');
    }

    const token = this.jwtService.signJwt({ id: user.id }, 'accessTokenSecret');
    setCookie(res, 'accessToken', token);
    return token;
  }

  async register(data: RegisterDTO) {
    const password = await argon2.hash(data.password);
    return this.userService.create({
      ...data,
      email: data.email.toLowerCase(),
      username: data.username.toLowerCase().trim(),
      password,
    });
  }
}
