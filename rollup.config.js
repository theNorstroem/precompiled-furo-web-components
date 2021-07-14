import resolve from '@rollup/plugin-node-resolve';
import {terser} from "rollup-plugin-terser";
import cleaner from 'rollup-plugin-cleaner';

export default [
  // browser-friendly  build
  {
    input: ['src/collection.js', 'src/DOMFBP.js'],
    output: {
      dir: "dist",
      format: 'es',
      entryFileNames: `[name].js`,
      chunkFileNames: `[name].js`,
      assetFileNames: `[name].[ext]`,
      plugins: []
    },
    plugins: [
      cleaner({
        targets: [
          './dist/'
        ]
      }),
      resolve({
        moduleDirectories: ['node_modules'],
        browser: true
      }),
      terser({format: {comments: false}}),

    ]
  }
];
