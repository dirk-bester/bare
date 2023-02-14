// License: CC0
// see: https://stackoverflow.com/a/73155667/3492994
// see: https://github.com/stefnotch/json-safe-stringify/issues/1

export function jsonStringifyReplacer(value: any) {
	console.log('jsonStringifyReplacer value:' + value);
	if (typeof value === 'object' && value !== null) {
		if (value instanceof Map) {
			console.log('jsonStringifyReplacer map:' + Array.from(value.entries()));
			return {
				_meta: { type: 'map' },
				value: Array.from(value.entries())
			};
		} else if (value instanceof Set) {
			return {
				_meta: { type: 'set' },
				value: Array.from(value.values())
			};
		} else if ('_meta' in value) {
			// escape "_meta" properties
			return {
				...value,
				_meta: {
					type: 'escaped-meta',
					value: value['_meta']
				}
			};
		}
	}
	console.log('jsonStringifyReplacer returning value:' + value);
	return value;
}
export function jsonParseReviver(value: any, errorCallback: any) {
	if (typeof value === 'object' && value !== null) {
		if ('_meta' in value) {
			if (value._meta.type === 'map') {
				return new Map(value.value);
			} else if (value._meta.type === 'set') {
				return new Set(value.value);
			} else if (value._meta.type === 'escaped-meta') {
				return {
					...value,
					_meta: value._meta.value
				};
			} else {
				errorCallback?.(
					new Error('Unexpected meta type: ' + value._meta, {
						cause: value._meta
					})
				);
			}
		}
	}
	return value;
}
export class JsonSerializer {
	stringifyReplacer = jsonStringifyReplacer;
	parseReviver = jsonParseReviver;
	constructor() {}
	stringify(value: any) {
		return JSON.stringify(value, (key, value) => this.stringifyReplacer(value));
	}
	parse(text: any, errorCallback: any) {
		return JSON.parse(text, (key, value) => this.parseReviver(value, errorCallback));
	}
}
