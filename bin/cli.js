#!/usr/bin/env node
import meow from 'meow';
import randomSong from '../src/random-song.js';

const cli = meow(`
	Usage
	  $ dartajax-music <command>

	Examples
	  $ dartajax-music random-song
	  Fill In The Blank
`, {
	importMeta: import.meta,
});

const [ command ] = cli.input;
if (command === 'random-song') {
    process.stdout.write(await randomSong());
    process.exit(0);
}

process.stdout.write("Unkown Command. Use --help for a list of options" + '\n');
process.exit(1);