import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    postcss({
      inject: false,
      extensions: [ '.css' ]
    }),
    nodeResolve({
      customResolveOptions: {
        extensions: [
          'js', 'ts', 'json'
        ]
      }
    }),
    typescript(/* { plugin options } */)
  ]
};
