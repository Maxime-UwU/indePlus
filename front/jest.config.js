module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation)/)'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
  testEnvironment: 'node'
};
