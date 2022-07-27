import { IsNotEmpty } from 'class-validator';

export class LoginDTO {
  @IsNotEmpty()
  usernameOrEmail: string;

  @IsNotEmpty()
  password: string;
}
