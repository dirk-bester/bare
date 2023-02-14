import { browser } from '$app/environment';
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import bigrams from './bigrams';
import code from './code';
import hexagrams from './hexagrams';
import { jsonParseReviver, jsonStringifyReplacer } from './json-safe-stringify';
import pangrams from './pangrams';
import pentagrams from './pentagrams';
import tetragrams from './tetragrams';
import trigrams from './trigrams';
import words from './words';

export const currentVersion: number = 0.01; // increment for schema changes.

export enum LANGUAGES {
	CPP = 'C++',
	CS = 'C#',
	GO = 'Go',
	JAVA = 'Java',
	JAVASCRIPT = 'Javascript',
	PYTHON = 'Python',
	RUST = 'Rust',
	SWIFT = 'Swift',
	TYPESCRIPT = 'Typescript'
}

// Javascript is the shittiest of the shit languages? You decide.
// I think https://esolangs.org/wiki/Brainfuck is better.
// export enum SOUNDS {
// 	RIGHT_LETTER = 'RIGHT_LETTER',
// 	WRONG_LETTER = 'WRONG_LETTER',
// 	PASSED_GOALS = 'PASSED_GOALS',
// 	FAILED_GOALS = 'FAILED_GOALS',
// 	LESSONS_DONE = 'LESSONS_DONE',
// }
export const SOUNDS = {
	RIGHT_LETTER: 'RIGHT_LETTER',
	WRONG_LETTER: 'WRONG_LETTER',
	PASSED_GOALS: 'PASSED_GOALS',
	FAILED_GOALS: 'FAILED_GOALS',
	LESSONS_DONE: 'LESSONS_DONE'
};
export const SOUND_NAMES = [
	{ key: SOUNDS.RIGHT_LETTER, value: 'Right Letter' },
	{ key: SOUNDS.WRONG_LETTER, value: 'Wrong Letter' },
	{ key: SOUNDS.PASSED_GOALS, value: 'Passed Goals' },
	{ key: SOUNDS.FAILED_GOALS, value: 'Failed Goals' },
	{ key: SOUNDS.LESSONS_DONE, value: 'Lessons Done' }
];

export enum SOURCES {
	BIGRAMS = 'bigrams',
	TRIGRAMS = 'trigrams',
	TETRAGRAMS = 'tetragrams',
	PENTAGRAMS = 'pentagrams',
	HEXAGRAMS = 'hexagrams',
	PANGRAMS = 'pangrams',
	WORDS = 'words',
	CODE = 'code',
	CODE_WORDS = 'code_words',
	CUSTOM_WORDS = 'custom_words'
}

export class SourceOptions {
	scope: number = 50;
	combination: number = 2;
	repetition: number = 5;
	filter: string = '';
	minimumWPM: number = 40;
	minimumAccuracy: number = 100;
	WPMs: string[] = [];
	phrases: string[] = [];
	phrasesCurrentIndex: number = 0;
}

export class XgramData {
	version: number = currentVersion;
	public source: string = SOURCES.BIGRAMS;

	bigrams: string[] = bigrams;
	trigrams: string[] = trigrams;
	tetragrams: string[] = tetragrams;
	pentagrams: string[] = pentagrams;
	hexagrams: string[] = hexagrams;
	pangrams: string[] = pangrams;
	words: string[] = words;
	code: Map<string, string[]> = code;
	code_words?: string[];
	custom_words?: string[];

	phrases: string[] = [];
	expectedPhrase: string = '';
	typedPhrase: string = '';
	startTime?: Date;
	hitsCorrect: number = 0;
	hitsWrong: number = 0;
	isInputCorrect: boolean = true;
	rawWPM: number = 0;
	accuracy: number = 0;

	public sounds: Map<string, boolean> = new Map([
		[SOUNDS.RIGHT_LETTER, true],
		[SOUNDS.WRONG_LETTER, true],
		[SOUNDS.PASSED_GOALS, true],
		[SOUNDS.FAILED_GOALS, true],
		[SOUNDS.LESSONS_DONE, true]
	]);

	public languages: Map<string, boolean> = new Map([
		[LANGUAGES.CPP, false],
		[LANGUAGES.CS, false],
		[LANGUAGES.GO, false],
		[LANGUAGES.JAVA, false],
		[LANGUAGES.JAVASCRIPT, false],
		[LANGUAGES.PYTHON, false],
		[LANGUAGES.RUST, false],
		[LANGUAGES.SWIFT, false],
		[LANGUAGES.TYPESCRIPT, false]
	]);
	public sourceOptions: Map<string, SourceOptions> = new Map([
		[SOURCES.BIGRAMS, new SourceOptions()],
		[SOURCES.TRIGRAMS, new SourceOptions()],
		[SOURCES.TETRAGRAMS, new SourceOptions()],
		[SOURCES.PENTAGRAMS, new SourceOptions()],
		[SOURCES.HEXAGRAMS, new SourceOptions()],
		[SOURCES.PANGRAMS, new SourceOptions()],
		[SOURCES.WORDS, new SourceOptions()],
		[SOURCES.CODE, new SourceOptions()],
		[SOURCES.CODE_WORDS, new SourceOptions()],
		[SOURCES.CUSTOM_WORDS, new SourceOptions()]
	]);
}

class MyStore {
	constructor(
		public data: Writable<XgramData> = writable<XgramData>(
			<XgramData>(
				(browser && sessionStorage.getItem('data')
					? JSON.parse(sessionStorage.getItem('data') ?? '', (key, value) =>
							jsonParseReviver(value, (error: Error) => console.error(error))
					  ) ?? <XgramData>{}
					: <XgramData>{})
			)
		),
		public options: Writable<SourceOptions> = writable<SourceOptions>(
			<SourceOptions>(browser && sessionStorage.getItem('options')
				? JSON.parse(sessionStorage.getItem('options') ?? '', (key, value) => {
						console.log('options jsonParseReviver key:' + key);
						console.log('options jsonParseReviver value:' + value);

						return jsonParseReviver(value, (error: Error) => console.error(error));
				  }) ?? new SourceOptions()
				: new SourceOptions())
		),
		public truthy: Writable<boolean> = writable<boolean>(
			<boolean>(browser && sessionStorage.getItem('truthy')
				? JSON.parse(sessionStorage.getItem('truthy') ?? '', (key, value) => {
						console.log('truthy jsonParseReviver key:' + key);
						console.log('truthy jsonParseReviver value:' + value);

						return jsonParseReviver(value, (error: Error) => console.error(error));
				  }) ?? true
				: true)
		)
	) {
		if (browser) {
			data.subscribe(
				(value) => (sessionStorage.data = JSON.stringify(value, jsonStringifyReplacer))
			);
			options.subscribe((value) => {
				let x = new SourceOptions();
				console.log('options x:' + x);
				console.log('options x.scope:' + x.scope);
				let s = JSON.stringify(value, jsonStringifyReplacer);
				sessionStorage.options = s;
				console.log('options stringified:' + s);
			});
			truthy.subscribe((value) => {
				console.log('\ntruthy');
				// console.log('truthy value:' + value);
				let s = sessionStorage.getItem('truthy');
				console.log('truthy sessionStorage.getItem:' + s);

				let c = JSON.parse(s ?? 'true');
				console.log('truthy JSON.parse c:' + c);

				let b: boolean = true;
				s = JSON.stringify(b, jsonStringifyReplacer);
				sessionStorage.truthy = s;
				console.log('truthy b: boolean jsonStringifyReplacer:' + s);

				s = JSON.stringify(b);
				console.log('truthy b: boolean stringify:' + s);

				s = JSON.stringify(value);
				console.log('truthy value stringify:' + s);

				sessionStorage.truthy = s;
				s = JSON.parse(sessionStorage.getItem('truthy') ?? '');
				console.log('truthy sessionStorage.getItem:' + s);
			});
		}
	}
}

if (browser) {
	// let data = sessionStorage.getItem('data');
	// console.log(data === 'undefined');
	// console.log('data:' + data);
	// let options = sessionStorage.getItem('options');
	// console.log(options === 'undefined');
	// console.log('options:' + options);
	// console.log('words:' + words);

	sessionStorage.clear();
	console.log('\nCLEARED\n');
	sessionStorage.truthy = 'true';
	// data = sessionStorage.getItem('data');
	// console.log(data === 'undefined');
	// console.log('data:' + data);
	// options = sessionStorage.getItem('options');
	// console.log(options === 'undefined');
}

export const myStore = new MyStore();
