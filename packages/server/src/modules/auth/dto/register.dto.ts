import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class RegisterDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Length(6)
  username: string;

  @IsNotEmpty()
  @Length(6)
  password: string;
}
