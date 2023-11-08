import path from 'path'
import webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { IBuildOptions } from './types/config'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: IBuildOptions):  webpack.Configuration {
  const { mode, paths, isDev } = options

  return {
    mode,
    entry: {
      bundle: paths.entry
    },
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    resolve: buildResolvers(paths),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined
  }
}