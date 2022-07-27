import config from 'config';
import cors from 'cors';

// Cors options
const allowedDomains = [config.get('frontendUrl')];

export const corsOptions: cors.CorsOptions = {
  origin: (origin, cb) => {
    // bypass the requests with no origin (like curl requests, mobile apps, etc )
    if (!origin) return cb(null, true);

    // Pass listed allowed domains or server domain
    if (allowedDomains.indexOf(origin) === -1) {
      const msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
      return cb(new Error(msg), false);
    }
    return cb(null, true);
  },
  credentials: true,
};
