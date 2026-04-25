import * as dotenv from 'dotenv';

dotenv.config({
  path: `config/environments/${process.env.ENV || 'dev'}.env`,
});

export const ENV = {
  baseURL: process.env.BASE_URL!,
};