import type webpack from 'webpack'
import { cssLoader, babelLoader } from './loaders'
import type { BuildOptions } from './types/config'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/
  // }

  const cssLoaders = cssLoader(isDev)
  const codeBabelLoader = babelLoader({ ...options, isTsx: false })
  const tsxCodeBabelLoader = babelLoader({ ...options, isTsx: true })

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  }

  const imageLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource'
  }

  const fontsLoader = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource'
  }

  // webpack expects js to be returned by the last loader in the chain
  return [
    fontsLoader,
    imageLoader,
    svgLoader,
    cssLoaders,
    codeBabelLoader,
    tsxCodeBabelLoader
  ]
}