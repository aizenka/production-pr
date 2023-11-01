import path from 'path'
import webpack from 'webpack'
import { IBuildPaths, IBuildEnv } from './config/build/types/config'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

export default (env: IBuildEnv) => {

  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  // tmp (use cross-env)
  const mode = env.mode || 'development'
  const PORT = env.port || 3000

  const isDev = mode === 'development'

  // dotenv.config({
  //   path: path.resolve(__dirname, `.env.${isDev ? 'development' : 'production'}`),
  //   process.env.NODE_ENV
  // });


  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })

  return config
}