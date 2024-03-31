const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/pages/*.ts', 'src/**/*.tsx'],
  coverageReporters: ['lcov', 'text'],
  coveragePathIgnorePatterns: ['/node_modules/', 'pages/', 'app/'],
}

module.exports = createJestConfig(customJestConfig)
