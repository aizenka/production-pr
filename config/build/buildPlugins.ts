import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import { BuildOptions } from './types/config'

// TODO: Could not find a declaration file for module 'webpack-bundle-analyze
// eslint-disable-next-line @typescript-eslint/no-var-requires
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

export function buildPlugins (
  {
    paths,
    isDev,
    apiUrl,
    analyze,
    project
  }: BuildOptions): webpack.WebpackPluginInstance[]
{
  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API_URL__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project)
    }),
    new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales }
      ]
    })
  ]

  if (isDev) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: analyze
      })
    )
  }

  return plugins
}