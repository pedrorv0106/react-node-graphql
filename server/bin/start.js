#!/usr/bin/env node

/* eslint-disable import/no-commonjs */
require('@babel/register')({
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: true,
        },
      },
    ],
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '^~/(.+)': './src/\\1',
        },
      },
    ],
  ],
});

require('../src/server');
