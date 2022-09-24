import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import {createApi} from "unsplash-js";
import * as nodeFetch from "node-fetch";

const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
  fetch: nodeFetch as unknown as typeof fetch,
});

const searchPhotos = async (query: string) => {
  try {
    const result = await serverApi.search.getPhotos({
      query,
    });
    return result;
  } catch (error) {
    console.error("Klarte ikke søke etter bilder", error);
  }
};

export {searchPhotos};
