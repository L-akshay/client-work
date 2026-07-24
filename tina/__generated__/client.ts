import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ cacheDir: 'D:/PR/pr/tina/__generated__/.cache/1784918854867', url: 'http://localhost:4001/graphql', token: 'undefined', queries,  });
export default client;
  