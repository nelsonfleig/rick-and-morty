import { PrismaClient } from '@prisma/client';
import { Service } from 'typedi';

@Service()
export class PrismaService extends PrismaClient {
  // Required to use a useless constructor because PrismaClient's constructor can't be instantiated with arguments passed from Typedi
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }
}
