import config from 'config';
import cookieParser from 'cookie-parser';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { useExpressServer } from 'routing-controllers';
import logger from '@/utils/logger';
import { corsOptions } from '@/utils/corsOptions';
import { DeserializeUser } from '@/middleware/deserialize-user.middleware';

/**
 * Creates express app, loads express middlewares
 * and registers all routing-controllers
 */
export const expressLoader = () => {
  const app = express();
  // Apply express middleware
  app.use(morgan('tiny'));
  app.use(cookieParser());

  // register created express server in routing-controllers
  useExpressServer(app, {
    cors: corsOptions,
    routePrefix: '/api',
    controllers: [path.join(__dirname, '../modules/**/*.controller.ts')],
    middlewares: [DeserializeUser],
  });

  const port = config.get('port');
  app.listen(port, () => {
    logger.info(`🚀 Server started on port ${port}`);
  });
};
