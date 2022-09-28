import download from 'image-downloader';

export async function downloadImage(url: string, filepath: string) {
    try {
        const result = await download.image({
            url,
            dest: filepath,
            maxHeaderSize: undefined,
        });

        console.log(`Resultat fra nedlasting og lagring av bilde: ${result.filename}`);
    } catch (error) {
        console.log('Klarte ikke lagre bilde', error);
    }
}
