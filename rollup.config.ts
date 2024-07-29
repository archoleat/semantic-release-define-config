import { defineConfig } from 'rollup';

import { dts } from 'rollup-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';

const indexFile = 'src/index.ts';
const types = 'src/types';

export default defineConfig([
  {
    plugins: [typescript(), minify()],
    input: indexFile,
    output: {
      file: 'index.js',
      format: 'es',
    },
  },
  {
    plugins: [
      alias({
        entries: [
          {
            find: '#config',
            replacement: `${types}/config`,
          },
          {
            find: '#branches',
            replacement: `${types}/branches`,
          },
        ],
      }),
      dts()
    ],
    input: indexFile,
    output: {
      file: 'index.d.ts',
    },
  },
]);
