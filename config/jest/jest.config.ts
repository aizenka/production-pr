import path from 'path'
import { ProjectType } from '../build/types/config'

export default {
  rootDir: '../../',
  clearMocks: true,
  testEnvironment: 'jsdom',
  globals: {
    __IS_DEV__: true,
    __API_URL__: '',
    __PROJECT__: ProjectType.JEST
  },
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/fttemplates/'
  ],
  modulePaths: [
    '<rootDir>src'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  setupFilesAfterEnv: ['<rootDir>/config/jest/jestSetup.ts'],
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'
  ],
  moduleNameMapper: {
    axios: 'axios/dist/node/axios.cjs',
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'JestMockSvgComponent.tsx'),
    '^@/(.*)$': '<rootDir>src/$1'
  },
  reporters: [
    'default',
    [
      'jest-html-reporters', {
        publicPath: '<rootDir>/reports/unit',
        filename: 'unitReport.html',
        pageTitle: 'Unit tests report',
        openReport: true,
        darkTheme: true,
        inlineSource: true
      }
    ]
  ]
}
