import path from 'path'

export default {
  rootDir: '../../',
  clearMocks: true,
  testEnvironment: 'jsdom',
  globals: {
    __IS_DEV__: true,
    __API_URL__: ''
  },
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
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
    '\\.svg': path.resolve(__dirname, 'JestMockSvgComponent.tsx')
  }
}
