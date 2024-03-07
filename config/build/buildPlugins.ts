import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import type { BuildOptions } from './types/config'

// TODO: Could not find a declaration file for module 'webpack-bundle-analyze
// eslint-disable-next-line @typescript-eslint/no-var-requires
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// TODO: fix circular-dependency-plugin declaration
// eslint-disable-next-line @typescript-eslint/no-var-requires
const CircularDependencyPlugin = require('circular-dependency-plugin')

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
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        },
        mode: 'write-references'
      }
    })
  ]

  if (isDev) {
    plugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: analyze
      }),
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: true
      })
    )
  }

  return plugins
}