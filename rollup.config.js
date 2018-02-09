import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'

let plugins = [
  resolve({
    browser: true,
    extensions: [ '.js', '.json' ],
    modulesOnly: true,
  }),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
  }),
  replace({
    exclude: 'node_modules/**',
    ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
  }),
]

// 使用uglify压缩，一般不需要
if (process.env.NODE_ENV === 'production') {
  let prodPlugins = [uglify()]
  plugins.concat(prodPlugins)
}

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'dbUtils', // 生成UMD模块的名字
    exports: 'named', // 导出模式，在导出多个时候使用
  },
  plugins: plugins,
};
