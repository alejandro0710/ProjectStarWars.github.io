export default {
    testEnvironment: 'node',
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/(?!my-es-module).+\\.js$'],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
  };
  