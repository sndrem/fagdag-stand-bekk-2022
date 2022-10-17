import { createApi } from "unsplash-js";
import type { ApiResponse } from "unsplash-js/dist/helpers/response";
import type { Full } from "unsplash-js/dist/methods/photos/types";

const serverApi = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY!,
});

const searchPhotos = async (query: string) => {
    try {
        const result = await serverApi.search.getPhotos({
            query,
            perPage: 28,
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
        await triggerDownloadToUnsplash(result);
        return result;
    } catch (error) {
        console.error(`Klarte ikke finne bilde med id: ${id}`, error);
    }
};

const triggerDownloadToUnsplash = async (
    unsplashPhoto: ApiResponse<Full>
): Promise<void> => {
    const downloadLocation = unsplashPhoto.response?.links.download_location;
    if (!downloadLocation) return;

    try {
        const res = await serverApi.photos.trackDownload({
            downloadLocation,
        });
        if (res.type === "success") {
            console.log(
                `Triggered download to Unsplash for image with id: ${unsplashPhoto.response?.id}`
            );
        }
    } catch (error) {
        console.log(
            "Klarte ikke trigge download til Unsplash...Det er ingen krise."
        );
    }
};

export { searchPhotos, getPhotoById };
