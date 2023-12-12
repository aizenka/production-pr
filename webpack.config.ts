import path from 'path'
import webpack from 'webpack'
import { BuildPaths, BuildEnv } from './config/build/types/config'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default (env: BuildEnv) => {

  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  // TODO: tmp (use cross-env)
  const mode = env.mode || 'development'
  const PORT = env.port || 3000
  const analyze = env.analyze || false
  const apiUrl = env.apiUrl || 'http://localhost:8080'

  const isDev = mode === 'development'

  // dotenv.config({
  //   path: path.resolve(__dirname, `.env.${isDev ? 'development' : 'production'}`),
  //   process.env.NODE_ENV
  // });


  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    analyze
  })

  return config
}