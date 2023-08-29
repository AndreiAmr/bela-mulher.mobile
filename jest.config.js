module.exports = {
  preset: 'react-native',
  // setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  collectCoverage: true,
  coverageReporters: ['json', 'html'],
};
