import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { createExpressServer } from 'routing-controllers';
import config from 'config';
import { corsOptions } from '@/utils/corsOptions';
import { CharacterController } from '@/modules/character/character.controller';
import logger from '@/utils/logger';

/**
 * Creates express app, registers all controllers and loads express middlewares
 */
export const expressLoader = () => {
  const app = createExpressServer({
    cors: corsOptions,
    routePrefix: '/api',
    controllers: [CharacterController],
  });

  // Apply express middleware
  app.use(morgan('tiny'));
  app.use(express.json());
  app.use(cookieParser());
  const port = config.get('port');
  app.listen(port, () => {
    logger.info(`🚀 Server started on port ${port}`);
  });
};
