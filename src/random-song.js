export default async function randomSong() {
    const albums = await import('../data/albums.js');
    const songs = albums.default.reduce((acc, cur) => {
        return [...acc, ...cur.songs];
    }, []);

    return songs[Math.floor(Math.random() * songs.length)];
}