import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'ryohei-blog',
  apiKey: process.env.API_KEY,
});
