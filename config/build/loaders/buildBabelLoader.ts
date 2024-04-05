import type { BuildOptions } from '../types/config'
import { babelRemovePropsPlugin } from '../../babel'

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean,
}

export default function buildBabelLoader (options: BuildBabelLoaderProps) {
  const { isTsx, isDev } = options

  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
        presets: ['@babel/preset-env'],
        plugins: [
          ['@babel/plugin-transform-typescript', { isTsx }],
          '@babel/plugin-transform-runtime',

          // custom plugins
          isTsx && !isDev && [babelRemovePropsPlugin(), { props: ['data-testid'] }]
        ].filter(Boolean)
      }
    }
  }
}