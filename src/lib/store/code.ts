const code = new Map<string, string[]>([
	[
		'languageCpp',
		[
			'alignas',
			'alignof',
			'and',
			'and_eq',
			'asm',
			'auto',
			'bitand',
			'bitor',
			'bool',
			'break',
			'case',
			'catch',
			'char',
			'char16_t',
			'char32_t',
			'char8_t',
			'class',
			'co_await',
			'co_return',
			'co_yield',
			'compl',
			'concept',
			'const',
			'const_cast',
			'consteval',
			'constexpr',
			'constinit',
			'continue',
			'decltype',
			'default',
			'delete',
			'do',
			'double',
			'dynamic_cast',
			'else',
			'enum',
			'explicit',
			'export',
			'extern',
			'false',
			'float',
			'for',
			'friend',
			'goto',
			'if',
			'inline',
			'int',
			'long',
			'mutable',
			'namespace',
			'new',
			'noexcept',
			'not',
			'not_eq',
			'nullptr',
			'operator',
			'or',
			'or_eq',
			'private',
			'protected',
			'public',
			'register',
			'reinterpret_cast',
			'requires',
			'return',
			'short',
			'signed',
			'sizeof',
			'static',
			'static_assert',
			'static_cast',
			'struct',
			'switch',
			'template',
			'this',
			'thread_local',
			'throw',
			'true',
			'try',
			'typedef',
			'typeid',
			'typename',
			'union',
			'unsigned',
			'using',
			'using',
			'virtual',
			'void',
			'volatile',
			'wchar_t',
			'while',
			'xor',
			'xor_eq'
		]
	],
	[
		'languageCsharp',
		[
			'abstract',
			'add',
			'alias',
			'and',
			'args',
			'as',
			'ascending',
			'async',
			'await',
			'base',
			'bool',
			'break',
			'by',
			'byte',
			'case',
			'catch',
			'char',
			'checked',
			'class',
			'const',
			'continue',
			'decimal',
			'default',
			'delegate',
			'descending',
			'do',
			'double',
			'dynamic',
			'else',
			'enum',
			'equals',
			'event',
			'explicit',
			'extern',
			'false',
			'file',
			'finally',
			'fixed',
			'float',
			'for',
			'foreach',
			'from',
			'get',
			'global',
			'goto',
			'group',
			'if',
			'implicit',
			'in',
			'init',
			'int',
			'interface',
			'internal',
			'into',
			'is',
			'join',
			'let',
			'lock',
			'long',
			'managed',
			'nameof',
			'namespace',
			'new',
			'nint',
			'not',
			'notnull',
			'nuint',
			'null',
			'object',
			'on',
			'operator',
			'or',
			'orderby',
			'out',
			'override',
			'params',
			'partial',
			'private',
			'protected',
			'public',
			'readonly',
			'record',
			'ref',
			'remove',
			'required',
			'return',
			'sbyte',
			'scoped',
			'sealed',
			'select',
			'set',
			'short',
			'sizeof',
			'stackalloc',
			'static',
			'string',
			'struct',
			'switch',
			'this',
			'throw',
			'true',
			'try',
			'typeof',
			'uint',
			'ulong',
			'unchecked',
			'unmanaged',
			'unsafe',
			'ushort',
			'using',
			'value',
			'var',
			'virtual',
			'void',
			'volatile',
			'when',
			'where',
			'while',
			'with',
			'yield'
		]
	],
	[
		'languageGo',
		[
			'break',
			'default',
			'func',
			'interface',
			'select',
			'case',
			'defer',
			'go',
			'map',
			'struct',
			'chan',
			'else',
			'goto',
			'package',
			'switch',
			'const',
			'fallthrough',
			'if',
			'range',
			'type',
			'continue',
			'for',
			'import',
			'return',
			'var'
		]
	],
	[
		'languageJava',
		[
			'abstract',
			'assert',
			'boolean',
			'break',
			'byte',
			'case',
			'catch',
			'char',
			'class',
			'continue',
			'const',
			'default',
			'do',
			'double',
			'else',
			'enum',
			'exports',
			'extends',
			'final',
			'finally',
			'float',
			'for',
			'goto',
			'if',
			'implements',
			'import',
			'instanceof',
			'int',
			'interface',
			'long',
			'module',
			'native',
			'new',
			'package',
			'private',
			'protected',
			'public',
			'requires',
			'return',
			'short',
			'static',
			'strictfp',
			'super',
			'switch',
			'synchronized',
			'this',
			'throw',
			'throws',
			'transient',
			'try',
			'var',
			'void',
			'volatile',
			'while'
		]
	],
	[
		'languageJavascript',
		[
			'await',
			'break',
			'case',
			'catch',
			'class',
			'const',
			'continue',
			'debugger',
			'default',
			'delete',
			'do',
			'else',
			'enum',
			'export',
			'extends',
			'false',
			'finally',
			'for',
			'function',
			'if',
			'implements',
			'import',
			'in',
			'instanceof',
			'interface',
			'let',
			'new',
			'null',
			'package',
			'private',
			'protected',
			'public',
			'return',
			'super',
			'switch',
			'static',
			'this',
			'throw',
			'try',
			'true',
			'typeof',
			'var',
			'void',
			'while',
			'with',
			'yield'
		]
	],
	[
		'languagePython',
		[
			'and',
			'as',
			'assert',
			'break',
			'class',
			'continue',
			'def',
			'del',
			'elif',
			'else',
			'except',
			'False',
			'finally',
			'for',
			'from',
			'global',
			'if',
			'import',
			'in',
			'is',
			'lambda',
			'None',
			'nonlocal',
			'not',
			'or',
			'pass',
			'raise',
			'return',
			'True',
			'try',
			'while',
			'with',
			'yield'
		]
	],
	[
		'languageRust',
		[
			'as',
			'async',
			'await',
			'break',
			'const',
			'continue',
			'crate',
			'dyn',
			'else',
			'enum',
			'extern',
			'false',
			'fn',
			'for',
			'if',
			'impl',
			'in',
			'let',
			'loop',
			'match',
			'mod',
			'move',
			'mut',
			'pub',
			'ref',
			'return',
			'Self',
			'self',
			'static',
			'struct',
			'super',
			'trait',
			'true',
			'type',
			'union',
			'unsafe',
			'use',
			'where',
			'while'
		]
	],
	[
		'languageSwift',
		[
			'as',
			'associativity',
			'break',
			'case',
			'Class',
			'continue',
			'convenience',
			'default',
			'deinit',
			'didSet',
			'do',
			'dynamic',
			'dynamicType',
			'else',
			'enum',
			'extension',
			'fallthrough',
			'false',
			'final',
			'for',
			'func',
			'get',
			'if',
			'import',
			'in',
			'infix',
			'Init',
			'inout',
			'internal',
			'is',
			'lazy',
			'left',
			'Let',
			'mutating',
			'nil',
			'none',
			'nonmutating',
			'operator',
			'optional',
			'override',
			'postfix',
			'precedence',
			'prefix',
			'private',
			'protocol',
			'Protocol',
			'public',
			'required',
			'return',
			'right',
			'self',
			'Self',
			'set',
			'static',
			'struct',
			'subscript',
			'super',
			'switch',
			'true',
			'Type',
			'typealias',
			'unowned',
			'var',
			'weak',
			'where',
			'while',
			'willSet'
		]
	],
	[
		'languageTypescript',
		[
			'any',
			'as',
			'boolean',
			'break',
			'case',
			'catch',
			'class',
			'const',
			'constructor',
			'continue',
			'debugger',
			'declare',
			'default',
			'delete',
			'do',
			'else',
			'enum',
			'export',
			'extends',
			'false',
			'finally',
			'for',
			'from',
			'function',
			'get',
			'if',
			'implements',
			'import',
			'in',
			'instanceof',
			'interface',
			'let',
			'module',
			'new',
			'null',
			'number',
			'of',
			'package',
			'private',
			'protected',
			'public',
			'require',
			'return',
			'set',
			'static',
			'string',
			'super',
			'switch',
			'symbol',
			'this',
			'throw',
			'true',
			'try',
			'type',
			'typeof',
			'var',
			'void',
			'while',
			'with',
			'yield'
		]
	]
]);
export default code;
