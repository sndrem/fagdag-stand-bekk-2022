import { createApi } from "unsplash-js";

const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
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

export { searchPhotos };
