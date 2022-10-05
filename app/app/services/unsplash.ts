import { createApi } from "unsplash-js";

const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

const searchPhotos = async (query: string) => {
  try {
    const result = await serverApi.search.getPhotos({
      query,
      perPage: 8,
    });
    return result;
  } catch (error) {
    console.error("Klarte ikke søke etter bilder", error);
  }
};

const getPhotoById = async (id: string) => {
  try {
    const result = await serverApi.photos.get({
      photoId: id,
    });
    return result;
  } catch (error) {
    console.error(`Klarte ikke finne bilde med id: ${id}`, error);
  }
};

export { searchPhotos, getPhotoById };
