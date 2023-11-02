import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { IBuildOptions } from './types/config'

export function buildLoaders ({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
  const cssLoaders =  {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        // Translates CSS into CommonJS
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => !!resPath.includes('.module.'),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:3]'
              : '[hash:base64:8]'
          },
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ]
  }

  const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }

  // webpack expects js to be returned by the last loader in the chain
  return [cssLoaders, typescriptLoader]
}