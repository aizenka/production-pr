import webpack from 'webpack'
import { IBuildPaths } from './types/config'

export function buildResolvers (paths: IBuildPaths): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [
      paths.src,
      'node_modules'
    ],
    mainFiles: ['index'],
    alias: {}
  }
}