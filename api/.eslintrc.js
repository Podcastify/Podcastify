module.exports = {
    extends: [
        'prettier',
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    plugins: ['prettier'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js'],
            },
            'babel-module': {},
        },
        node: true,
    },
    env: {
        node: true,
        es6: true,
        jest: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        requireConfigFile: false,
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                arrowParens: 'always',
                bracketSpacing: false,
                tabWidth: 4,
                trailingComma: 'es5',
                singleQuote: true,
            },
        ],
        'valid-jsdoc': 0,
        'require-jsdoc': 0,
        'new-cap': 0,
        'no-console': 0,
        'max-len': [
            'error',
            {
                code: 120,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreStrings: true,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
            },
        ],
    },
};
