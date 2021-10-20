import fs from 'node:fs/promises';

export default async function randomSong() {
    const albums = JSON.parse(await fs.readFile('data/albums.json'));
    const songs = albums.reduce((acc, cur) => {
        return [...acc, ...cur.songs];
    }, []);

    return songs[Math.floor(Math.random() * songs.length)];
}