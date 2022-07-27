import { HttpError } from 'routing-controllers';
import { Service } from 'typedi';
import { LoginDTO } from '../auth/dto/login.dto';
import { RegisterDTO } from '../auth/dto/register.dto';
import { PrismaService } from '../core/prisma/prisma.service';
import { userSelectFields } from './helpers/user-select-fields.helper';

@Service()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  create(data: RegisterDTO) {
    return this.prismaService.user.create({
      data,
      select: userSelectFields,
    });
  }

  findById(id: number) {
    return this.prismaService.user.findFirst({
      where: {
        id,
      },
      select: userSelectFields,
    });
  }

  findByUsernameOrEmail(data: LoginDTO['usernameOrEmail']) {
    return this.prismaService.user.findFirst({
      where: {
        OR: [
          {
            username: data,
          },
          {
            email: data,
          },
        ],
      },
      select: userSelectFields,
    });
  }

  async addToFavorites(userId: number, characterId: number) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) throw new HttpError(400, 'Something went wrong. Please try again.');

    // If already favorited, ignore.
    if (user.favorites.includes(characterId)) return user;

    return this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: {
        favorites: {
          set: [...user.favorites, characterId],
        },
      },
      select: userSelectFields,
    });
  }

  async removeFromFavorites(userId: number, characterId: number) {
    const user = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) throw new HttpError(400, 'Something went wrong. Please try again.');

    // If not in favorites, ignore.
    if (!user.favorites.includes(characterId)) return user;

    return this.prismaService.user.update({
      where: {
        id: user.id,
      },
      data: {
        favorites: {
          set: user.favorites.filter((id) => id !== characterId),
        },
      },
      select: userSelectFields,
    });
  }
}
