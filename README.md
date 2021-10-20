# dartajax-music

> Tool for discovering things about the San Francisco music legend [DartAjax](https://dartajax.bandcamp.com/)

![DartAjax Bandcamp Photo](https://f4.bcbits.com/img/0004640568_100.png)

## Install

```
$ npm install dartajax-music
```

## Usage

```js
import randomSong from 'dartajax-music/random-song';

console.log(await randomSong());
//=> 'First Noise'
```


## API

### randomSong()

Type: `string`

Random song name.


## CLI

```
$ npx dartajax-music random-song

  Examples
    $ dartajax-music random-song
    Exploding Dice
```

```
$ npx dartajax-music --help

  Examples
    $ dartajax-music random-song
    Fill In The Blank
```


