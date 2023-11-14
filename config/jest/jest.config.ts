import path from 'path'

export default {
  rootDir: '../../',
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ],
  moduleDirectories: [
    'node_modules',
    'src'
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
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'JestMockSvgComponent.tsx')
  }
}
