import { Response } from 'express';
import { Body, Delete, Get, HttpCode, JsonController, Post, Res } from 'routing-controllers';
import { Service } from 'typedi';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';

@Service()
@JsonController('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/me')
  me(@Res() res: Response) {
    return this.authService.me(res.locals.user?.id);
  }

  @Post('/login')
  login(@Body() body: LoginDTO, @Res() res: Response) {
    return this.authService.login(body, res);
  }

  @HttpCode(201)
  @Post('/register')
  register(@Body() body: RegisterDTO) {
    return this.authService.register(body);
  }

  @HttpCode(204)
  @Delete('/logout')
  logout(@Res() res: Response) {
    return this.authService.logout(res);
  }
}
