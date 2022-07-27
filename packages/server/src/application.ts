// import helmet from 'helmet';
import { Service } from 'typedi';
// import { AppDataSource } from './data-source';
import { expressLoader } from './loaders/expressLoader';
import { iocLoader } from './loaders/iocLoader';

/**
 * Express application singleton
 */
@Service()
export class Application {
  async start(): Promise<void> {
    iocLoader();
    expressLoader();
  }
}
