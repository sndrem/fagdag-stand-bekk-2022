import download from "image-downloader";

export async function downloadImage(url: string, filepath: string) {
  try {
    const result = await download.image({
      url,
      dest: filepath,
      maxHeaderSize: undefined,
    });

    console.log(`Result from saved image: ${result.filename}`);
  } catch (error) {
    console.log("Klarte ikke lagre bilde", error);
  }
}
