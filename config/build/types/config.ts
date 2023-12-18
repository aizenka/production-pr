export type BuildMode = 'production' | 'development'

export enum ProjectType {
  FRONTEND = 'frontend',
  STORYBOOK = 'storybook',
  JEST = 'jest'
}

export interface BuildEnv {
  mode: BuildMode,
  port: number,
  analyze: boolean,
  apiUrl: string
}
export interface BuildPaths {
  entry: string,
  build: string,
  html: string,
  src: string,
}

export interface BuildOptions {
  mode: BuildMode,
  paths: BuildPaths,
  isDev: boolean,
  port: number,
  analyze: boolean,
  apiUrl: string,
  project: ProjectType
}