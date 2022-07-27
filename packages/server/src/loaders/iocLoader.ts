import { useContainer } from 'routing-controllers';
import Container from 'typedi';

/**
 * Loads IoC container for use with router-controllers
 */
export const iocLoader = () => {
  useContainer(Container);
};
