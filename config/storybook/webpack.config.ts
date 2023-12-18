import path from 'path'
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import buildCssLoader from '../build/loaders/buildCssLoader'
import { BuildPaths, ProjectType } from '../build/types/config'

// TODO: fix ts
export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config!.resolve!.modules = [ paths.src, 'node_modules' ]

  config!.module!.rules = config!.module!.rules!.map(
    (rule: RuleSetRule | '...') => {
      if (rule !== '...' && /svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i }
      }

      return rule
    })

  config!.module!.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })

  config!.module!.rules.push(buildCssLoader(true))

  config!.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API_URL__: true,
      __PROJECT__: JSON.stringify(ProjectType.STORYBOOK)
    })
  )

  return config
}