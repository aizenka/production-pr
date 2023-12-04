import path from 'path'
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import buildCssLoader from '../build/loaders/buildCssLoader'
import { BuildPaths } from '../build/types/config'

// TODO: fix ts
export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  if (config.resolve?.modules) {
    config.resolve.modules = [ paths.src, 'node_modules' ]
  }

  if (config.module?.rules) {
    config.module.rules = config.module?.rules?.map(
      (rule: RuleSetRule | '...') => {
        if (rule !== '...' && /svg/.test(rule.test as string)) {
          return { ...rule, exclude: /\.svg$/i }
        }

        return rule
      })

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    config.module.rules.push(buildCssLoader(true))
  }

  if (config?.plugins) {
    config.plugins.push(
      new DefinePlugin({
        __IS_DEV__: true
      })
    )
  }


  return config
}