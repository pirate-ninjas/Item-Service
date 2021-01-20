import nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';
import UNSPLASH_ACCESS_KEY from './credentials';

const unsplash = createApi({
  accessKey: UNSPLASH_ACCESS_KEY,
  fetch: nodeFetch,
});

