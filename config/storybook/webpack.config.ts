import path from 'path'
import type { RuleSetRule } from 'webpack'
import type webpack from 'webpack'
import { DefinePlugin } from 'webpack'
import { cssLoader } from '../build/loaders'
import type { BuildPaths } from '../build/types/config'
import { ProjectType } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    locales: '',
    buildLocales: '',
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

  config!.module!.rules.push(cssLoader(true))

  config!.plugins!.push(
    new DefinePlugin({
      __IS_DEV__: true,
      __API_URL__: 'http://testapi.com',
      __PROJECT__: JSON.stringify(ProjectType.STORYBOOK)
    })
  )

  return config
}