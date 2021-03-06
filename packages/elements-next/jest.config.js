const baseConfig = require('../../scripts/jest/jest.config')

module.exports = {
  ...baseConfig,
  testPathIgnorePatterns: ['<rootDir>/src/tests/', 'dist', '.docz', 'config', 'stories.tsx'],
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.d.ts'],
  coveragePathIgnorePatterns: [
    '<rootDir>[/\\\\](node_modules|src/tests|dist|.docz|config)[/\\\\]',
    'src/index.tsx',
    'index.ts',
    '.stories.tsx',
  ],
  modulePathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|public|dist)[/\\\\]'],
  transform: {
    '^.+\\.css$': '<rootDir>/config/jest/css-transform.js',
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '<rootDir>/config/jest/file-transform.js',
  },
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 20,
      lines: 30,
      statements: 30,
    },
  },
}
