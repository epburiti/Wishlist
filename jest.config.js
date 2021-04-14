module.exports = {
  clearMocks: true,
  preset: 'js-jest',
  projects: ['<rootDir>/packages/**/jest.config.js'],
  testEnvironment: 'node',
  testMatch: ['*.spec.js', '*.spec.js'],
};
