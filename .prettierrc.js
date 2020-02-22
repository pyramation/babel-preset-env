module.exports = {
    arrowParens: 'avoid',
    bracketSpacing: true,
    semi: true,
    jsxBracketSameLine: false,
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    singleQuote: true,
    trailingComma: 'es5',
    parser: 'babel',
    overrides: [
      {
        files: '*.graphql',
        options: { parser: 'graphql' },
      },
      {
        files: '*.json',
        options: { parser: 'json' },
      },
      {
        files: ['*.md', '*.markdown'],
        options: { parser: 'markdown' },
      },
      {
        files: ['*.yml', '*.yaml'],
        options: { parser: 'yaml' },
      },
      {
        files: ['*.ts', '*.tsx', '*.ts.d'],
        options: { parser: 'typescript' },
      },
    ],
  };