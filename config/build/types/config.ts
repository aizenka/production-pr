export type BuildMode = 'production' | 'development'
export interface IBuildEnv {
  mode: BuildMode,
  port: number
}
export interface IBuildPaths {
  entry: string,
  build: string,
  html: string,
  src: string
}

export interface IBuildOptions {
  mode: BuildMode,
  paths: IBuildPaths,
  isDev: boolean,
  port: number
}