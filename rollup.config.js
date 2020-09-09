import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import postcss_url from 'postcss-url'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import json from '@rollup/plugin-json'
import svgr from '@svgr/rollup'
import includePaths from 'rollup-plugin-includepaths'

import pkg from './package.json'

export default {
  input: './src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
  ],
  plugins: [
    includePaths({
      paths: ['src']
    }),
    json(),
    external(),
    postcss({
      plugins: [
        postcss_url({
          url: 'inline'
        })
      ]
    }),
    url(),
    svgr(),
    babel({
      runtimeHelpers: true,
      exclude: 'node_modules/**',
      plugins: [ '@babel/external-helpers' ]
    }),
    resolve({
      jsnext: true,
      preferBuiltins: true,
      browser: true
    }),
    commonjs()
  ]
}
