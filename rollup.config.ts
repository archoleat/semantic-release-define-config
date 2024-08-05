import { resolve } from 'node:path';

import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const sourceFolder = 'src';
const typesFolder = `${sourceFolder}/types`;
const fileName = 'index';
const declarationFile = `${fileName}.d.ts`;
const indexFile = `${sourceFolder}/${fileName}.ts`;

export default defineConfig([
  {
    plugins: [typescript(), minify()],
    input: indexFile,
    output: {
      file: `${fileName}.js`,
      format: 'es',
    },
  },
  {
    plugins: [
      alias({
        entries: [
          {
            find: '#types',
            replacement: resolve(`${typesFolder}/${declarationFile}`),
          },
        ],
      }),
      dts(),
    ],
    input: indexFile,
    output: {
      file: declarationFile,
      format: 'es',
    },
  },
]);
